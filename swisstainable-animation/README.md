# Swisstainable Region Zug – Animation als MP4

Export der Claude-Design-Animation «Swisstainable Region Zug – Animation» in eine
MP4-Datei für PowerPoint (Nachhaltigkeits-Summit 2026).

## Ergebnis

`Swisstainable-Region-Zug-Animation.mp4` — 1920×1080, 30 fps, 37 s, H.264 (High, Level 4.0),
yuv420p, faststart, ohne Tonspur. Läuft in PowerPoint unter Windows und macOS
sowie in Keynote und QuickTime ohne Zusatz-Codec.

Die sechs Szenen der Komposition: Intro 2.5 s · Zählen 10 s · Stufen 6.5 s ·
Branchen 7 s · Historie 7.5 s · Abschluss 3.5 s.

## Wie der Export funktioniert

Kein Bildschirmmitschnitt. Das Animations-Framework (`animations-v3.jsx`) bringt
ein eigenes Export-Protokoll mit: Die Stage meldet sich mit
`data-om-sync-seek="true"`, und ein Event `data-om-seek-to-time-frame` mit
`detail.sync === true` hält die Uhr an und committet exakt diesen Zeitpunkt per
`ReactDOM.flushSync`. Das DOM steht also fest, sobald `dispatchEvent`
zurückkommt.

`export.js` nutzt das: Es fährt die Zeitachse Bild für Bild ab (t = f / 30),
schiesst pro Zeitpunkt einen Screenshot in native 1920×1080 und schiebt die
PNG-Puffer direkt per Pipe in ffmpeg. Dadurch ist die Ausgabe unabhängig von der
Renderleistung — keine verlorenen oder doppelten Bilder, kein Ruckeln.

Für den Screenshot wird die Stage aus dem Player gelöst: `transform: none`,
`position: fixed` auf 0/0, Playbar verdeckt. So wird ohne Skalierung in
Originalauflösung aufgenommen.

## Die fehlenden Assets

Die exportierte Standalone-HTML bettet ihre Bilder nicht ein. Sie verlangt
`assets/zt-logo.png` und `assets/herz-{blau,gelb,gruen}.png`; ohne diese Dateien
bleiben Logo und alle 33 Herzen leer.

`build_assets.py` erzeugt sie aus dem offiziellen ZT-Logo:

- Die `herz-*.jpeg` aus dem Skill `zt-praesentationen` sind **nicht** brauchbar:
  Sie sind oben angeschnitten und liegen auf deckendem Weiss. Die Animation
  stapelt die drei Farbebenen übereinander und blendet ihre Deckkraft
  gegeneinander — das braucht echtes Alpha.
- Deshalb wird die vollständige Herzform aus `zug-tourismus-logo.png`
  freigestellt, quadratisch gepolstert (die Animation zeichnet in eine
  quadratische Box mit 100 % Breite/Höhe, sonst würde die Form verzerrt) und in
  den drei CI-Farben eingefärbt: Blau `#006BF2`, Gelb `#E3B000`, Grün `#17A600`.
- Das Logo selbst wird 4-fach (1368×172) für die Anzeigegrösse 342×43 geliefert.
  Sein Icon trägt in der Quelldatei ein älteres Blau (`#2A6BB4`); es wird auf CI
  Blau `#006BF2` gehoben, damit es zu den 33 Herzen im selben Bild passt. Der
  Schriftzug bleibt reines Schwarz.

Die Schriften (Helvetica Now Display Bold / Text Regular) sind bereits in der
HTML eingebettet (`data-om-fonts-inlined="true"`), es ist nichts nachzuladen.

## Neu exportieren

```bash
pip install pillow imageio-ffmpeg
python3 build_assets.py                     # assets/ neu bauen
node export.js --fps 30 --out Swisstainable-Region-Zug-Animation.mp4
```

Nützliche Optionen:

- `--probe 0.6,6,14,20,27,35` schreibt Einzelbilder zu diesen Sekunden statt
  eines Videos — zum Prüfen, ohne 1110 Bilder zu rendern.
- `--fps 60` für doppelt so flüssige Bewegung bei etwa doppelter Dateigrösse.
- `--hold 2` friert das Schlussbild zwei Sekunden länger ein, falls der
  Schlussclaim in der Präsentation länger stehen soll.

Voraussetzungen: Playwright mit Chromium (hier `PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers`)
und ein ffmpeg mit libx264. Das von Playwright mitgelieferte ffmpeg genügt
**nicht** — es kann nur VP8/WebM; daher `imageio-ffmpeg`.

## Dateien

| Datei | Zweck |
|---|---|
| `Swisstainable-Region-Zug-Animation.mp4` | das Video für PowerPoint |
| `anim.html` | die Standalone-Animation aus Claude Design (Quelle) |
| `export.js` | Frame-für-Frame-Export nach MP4 |
| `build_assets.py` | baut `assets/` aus dem offiziellen ZT-Logo |
| `assets/` | Logo und die drei Herzfarben |
