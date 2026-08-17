"""Rebuild the assets the standalone bundle expects but does not embed.

The bundle asks for assets/zt-logo.png and assets/herz-{blau,gelb,gruen}.png.
The shipped herz-*.jpeg in zt-praesentationen are cropped fragments on an opaque
white ground, so they are unusable here: the animation stacks the three colour
layers on top of each other and cross-fades their opacity, which needs real
alpha. The official logo PNG carries the complete heart as a clean alpha shape,
so both the logo and the three hearts are derived from it.
"""
import os
import pathlib

from PIL import Image

HERE = pathlib.Path(__file__).resolve().parent
# The official logo ships with the zt-dokumente skill; override with ZT_LOGO_SRC
# if it lives elsewhere.
LOGO_SRC = os.environ.get(
    'ZT_LOGO_SRC',
    str(pathlib.Path.home() / '.claude/skills/synced/zt-dokumente/assets/zug-tourismus-logo.png'),
)
OUT = HERE / 'assets'
OUT.mkdir(exist_ok=True)

# CI colours (zt-cicd): Blau is the primary. The logo file ships an older, duller
# blue (#2A6BB4); the animation sets every number and claim in #006BF2, so the
# heart shape is recoloured to the CI values to keep one frame internally consistent.
CI = {'blau': (0x00, 0x6B, 0xF2), 'gelb': (0xE3, 0xB0, 0x00), 'gruen': (0x17, 0xA6, 0x00)}

logo = Image.open(LOGO_SRC).convert('RGBA')

# --- hearts ------------------------------------------------------------------
# Isolate the heart: it is the first run of non-transparent columns, ahead of the
# gap that precedes the "Zug." wordmark.
alpha = logo.getchannel('A')
a = alpha.load()
W, H = logo.size
step = 7


def col_on(x):
    return any(a[x, y] > 10 for y in range(0, H, step))


x0 = 0
while x0 < W and not col_on(x0):
    x0 += 1
x1 = x0
while x1 < W and col_on(x1):
    x1 += 1

rows = [y for y in range(H) if any(a[x, y] > 10 for x in range(x0, x1, 5))]
y0, y1 = rows[0], rows[-1] + 1
heart_a = alpha.crop((x0, y0, x1, y1))
hw, hh = heart_a.size

# The animation draws each heart into a square box at width/height 100%, which
# would stretch a non-square source. Pad the mask into a square first so the
# shape keeps its proportions, then downscale once.
side = max(hw, hh)
square = Image.new('L', (side, side), 0)
square.paste(heart_a, ((side - hw) // 2, (side - hh) // 2))
SIZE = 256  # ~4x the largest on-screen heart (66px)
mask = square.resize((SIZE, SIZE), Image.LANCZOS)

for name, rgb in CI.items():
    img = Image.new('RGBA', (SIZE, SIZE), rgb + (0,))
    img.putalpha(mask)
    img.save(OUT / ('herz-%s.png' % name))

# --- zt-logo.png: rendered at 342x43, so ship 4x for clean downscaling --------
# The wordmark stays pure black per CI; only the icon is lifted from the file's
# older blue to CI Blau, so the header icon matches the 33 hearts below it.
lg = logo.copy()
px = lg.load()
for x in range(x0, x1):
    for y in range(y0, y1):
        a_ = px[x, y][3]
        if a_:
            px[x, y] = CI['blau'] + (a_,)
lg.resize((1368, 172), Image.LANCZOS).save(OUT / 'zt-logo.png')

print('heart bbox %dx%d -> square %d -> %dpx' % (hw, hh, side, SIZE))
print('logo 1368x172, hearts', ', '.join(sorted(CI)))
