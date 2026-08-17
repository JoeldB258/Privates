/* Frame-exact MP4 export of the Swisstainable Region Zug animation.
 *
 * Uses the animation framework's own export protocol (animations-v3.jsx): the
 * stage advertises data-om-sync-seek, and a 'data-om-seek-to-time-frame' event
 * with detail.sync === true pauses the engine clock and commits that exact
 * timestamp via ReactDOM.flushSync, so the DOM is settled the moment
 * dispatchEvent returns. Frames are therefore deterministic, not real-time
 * captures — no dropped or duplicated frames regardless of how slow rendering is.
 *
 * Usage: node export.js [--fps 30] [--out file.mp4] [--probe 0,3,12,20,28,35]
 */
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
// Needs libx264. Playwright's bundled ffmpeg only does VP8/WebM, so this points
// at a full build (e.g. the one imageio-ffmpeg installs) — override with FFMPEG.
const FFMPEG = process.env.FFMPEG ||
  '/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2';

function arg(name, def) {
  const i = process.argv.indexOf('--' + name);
  return i > -1 ? process.argv[i + 1] : def;
}

const FPS = parseInt(arg('fps', '30'), 10);
const OUT = arg('out', path.join(DIR, 'out.mp4'));
const PROBE = arg('probe', null);
const HOLD = parseFloat(arg('hold', '0')); // extra seconds of the final frame

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox', '--force-color-profile=srgb', '--disable-lcd-text'] });
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });
  const missing = [];
  page.on('console', m => { const t = m.text(); if (/failed to load/.test(t)) missing.push(t); });

  await page.goto('file://' + DIR + '/anim.html', { waitUntil: 'load' });

  // The stage is rendered by an unpacked module, so wait for the exportable
  // element itself rather than a fixed timeout.
  await page.waitForSelector('[data-om-exportable-video-with-duration-secs]', { timeout: 60000 });
  await page.waitForFunction(() => {
    const el = document.querySelector('[data-om-exportable-video-with-duration-secs]');
    return el && el.getAttribute('data-om-sync-seek') === 'true' &&
           el.getAttribute('data-om-fonts-inlined') === 'true';
  }, { timeout: 60000 });
  // Let the bundle's own image decoding finish before the first frame.
  await page.waitForFunction(() => {
    const imgs = [...document.images];
    return imgs.length > 0 && imgs.every(i => i.complete);
  }, { timeout: 60000 }).catch(() => {});

  const meta = await page.evaluate(() => {
    const el = document.querySelector('[data-om-exportable-video-with-duration-secs]');
    // Isolate the stage: drop the player chrome and pin the 1920x1080 stage to
    // the viewport origin at scale 1, so a viewport screenshot is a native-
    // resolution frame with no resampling.
    el.style.transform = 'none';
    el.style.position = 'fixed';
    el.style.left = '0px';
    el.style.top = '0px';
    el.style.margin = '0px';
    el.style.boxShadow = 'none';
    el.style.zIndex = '2147483647';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.margin = '0px';
    document.body.style.background = '#ffffff';
    window.__stage = el;
    window.__seek = (t) => {
      el.dispatchEvent(new CustomEvent('data-om-seek-to-time-frame', {
        detail: { time: t, sync: true },
      }));
    };
    const imgs = [...document.images].map(i => ({ src: i.currentSrc.split('/').pop(), w: i.naturalWidth }));
    return {
      duration: parseFloat(el.getAttribute('data-om-exportable-video-with-duration-secs')),
      scenes: JSON.parse(el.getAttribute('data-om-timeline-scenes') || '[]'),
      imgCount: imgs.length,
      brokenImgs: imgs.filter(i => !i.w).map(i => i.src),
    };
  });

  console.log('duration=%ss  scenes=%s  images=%d  broken=%s',
    meta.duration, meta.scenes.map(s => s.name + ':' + s.dur).join(' '), meta.imgCount,
    meta.brokenImgs.length ? [...new Set(meta.brokenImgs)].join(',') : 'none');
  if (meta.brokenImgs.length) {
    console.error('ABORT: assets failed to load:', [...new Set(meta.brokenImgs)].join(', '));
    await browser.close();
    process.exit(1);
  }

  const shot = async (t) => {
    await page.evaluate((tt) => window.__seek(tt), t);
    return page.screenshot({ clip: { x: 0, y: 0, width: 1920, height: 1080 }, type: 'png', animations: 'disabled' });
  };

  if (PROBE) {
    for (const t of PROBE.split(',').map(Number)) {
      fs.writeFileSync(path.join(DIR, 'probe_' + String(t).replace('.', '_') + 's.png'), await shot(t));
      console.log('probe', t + 's');
    }
    await browser.close();
    return;
  }

  const nFrames = Math.round(meta.duration * FPS);
  const holdFrames = Math.round(HOLD * FPS);
  const ff = spawn(FFMPEG, [
    '-y', '-hide_banner', '-loglevel', 'error',
    '-f', 'image2pipe', '-framerate', String(FPS), '-i', 'pipe:0',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '16',
    '-profile:v', 'high', '-level', '4.0',
    '-pix_fmt', 'yuv420p',           // required for PowerPoint / QuickTime
    '-r', String(FPS),
    '-movflags', '+faststart',
    OUT,
  ], { stdio: ['pipe', 'inherit', 'inherit'] });

  const write = (buf) => new Promise((res, rej) => {
    if (ff.stdin.write(buf)) return res();
    ff.stdin.once('drain', res);
    ff.stdin.once('error', rej);
  });

  const t0 = Date.now();
  let last = null;
  for (let f = 0; f < nFrames; f++) {
    last = await shot(f / FPS);
    await write(last);
    if (f % 90 === 0 || f === nFrames - 1) {
      const done = f + 1;
      const rate = done / ((Date.now() - t0) / 1000);
      console.log('frame %d/%d  t=%ss  %s fps  eta %ss',
        done, nFrames, (f / FPS).toFixed(2), rate.toFixed(1),
        Math.round((nFrames - done) / rate));
    }
  }
  for (let i = 0; i < holdFrames; i++) await write(last); // freeze the closing claim

  ff.stdin.end();
  await new Promise((res, rej) => ff.on('close', c => (c === 0 ? res() : rej(new Error('ffmpeg exit ' + c)))));
  console.log('wrote', OUT, (fs.statSync(OUT).size / 1e6).toFixed(1) + ' MB',
    'frames', nFrames + holdFrames, '@', FPS + 'fps');
  await browser.close();
})();
