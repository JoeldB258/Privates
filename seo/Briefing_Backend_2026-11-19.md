# Briefing Backend zug-tourismus.ch: Winter und Metabeschriebe

Auftraggeber: Joel de Buren, Leiter Marketing, Zug Tourismus · Stand: 19.11.2026
Ausführung: im Drupal-Backend backend.zug-tourismus.ch, eingeloggt mit dem Konto von Joel (User 19). Joel loggt sich selbst ein, Zugangsdaten werden nie weitergegeben oder notiert.

## Ziel
Die wichtigsten Winterseiten mit korrekten Daten 2026/27 aktualisieren und fehlende Metabeschriebe nachtragen. Grundlage ist der SEO-Check vom 19.11.2026 (Artefakt «SEO-Check zug-tourismus.ch», Ordner seo/ im Repository JoeldB258/Privates).

## Arbeitsregeln
1. Nur die unten genannten Nodes und nur die genannten Felder ändern. Nichts löschen, keine Bilder, Menüs, Adressen (URL-Alias) oder Einstellungen anfassen.
2. Pro Node: Bearbeitungslink öffnen, bestehenden Text vor dem Ändern ins Protokoll kopieren (für ein Zurücksetzen), dann ändern, speichern.
3. Veröffentlichungsstatus beibehalten. Die Website nutzt einen Freigabe-Workflow (Moderation State). Beim Speichern denselben Status wählen, den die Seite vorher hatte. Ist unklar, ob «Speichern» sofort live geht, zuerst bei einer einzigen Seite testen und Joel fragen.
4. Nur Deutsch bearbeiten. Englisch und Französisch werden automatisch übersetzt.
5. Texte exakt übernehmen. Platzhalter in eckigen Klammern [ … ] nie aufschalten, diese Seiten überspringen und im Protokoll melden.
6. Unpublizieren nur bei den ausdrücklich genannten Nodes, und nur nach Rückfrage bei Joel.
7. Nach dem Speichern die Live-Seite mit angehängtem Parameter prüfen (z.B. ?check=1), weil das Frontend zwischenspeichert. Erscheint die Änderung nach 15 Minuten nicht, im Protokoll vermerken.

## Wo die Felder liegen
- **Metabeschrieb:** im Bearbeitungsformular im Bereich «Meta Tags» (Feld field_meta_tags), Unterfeld «Description» bzw. «Beschreibung». Max. 1'000 Pixel, alle Texte unten sind geprüft.
- **Einleitung:** Feld «Lead-Text» (field_lead_text_html), der erste Absatz oben auf der Seite.
- **Kacheltext:** Feld «Teaser-Text» (field_teaser_text_html). Nicht ändern, ausser es ist unten ausdrücklich genannt.
- Heissen die Felder anders, nicht raten: Feldnamen ins Protokoll schreiben und Joel fragen.

## Schreibregeln (falls Joel Anpassungen wünscht)
Keine direkte Ansprache (auch kein «Sie»), keine Gedankenstriche, «ss» statt «ß», Zahlen mit Apostroph (2'600), Uhrzeiten mit «Uhr» (16:30 Uhr), gendern («Partnerinnen und Partner»), Metabeschrieb wiederholt nie den Seitentitel.

## Teil A: heute
### A1. Kerzenziehen in Zug · Node 7750
Bearbeiten: https://backend.zug-tourismus.ch/de/node/7750/edit
**Lead-Text ersetzen durch:**

> Der Duft von warmem Wachs, leuchtende Farben und kreative Momente: Das Kerzenziehen ist ein stimmungsvoller Auftakt in die Adventszeit. In der Region Zug gestalten Gross und Klein eigene Kerzen. Je nach Veranstalter ist eine Anmeldung nötig, die Preise variieren.
> Zug, Wintermarkt im Freiruum: Samstag, 5. Dezember 2026, bis 19:00 Uhr, und Sonntag, 6. Dezember 2026, bis 18:00 Uhr, in der Genusshalle, CHF 5.

Die Liste mit den Daten 2025 (Oberägeri, Hünenberg, Rotkreuz, Menzingen, Freiruum) im Haupttext entfernen. Link zum Freiruum: https://www.freiruum.ch/events/wintermarkt2026
**Metabeschrieb:** Kerzen selber ziehen in der Adventszeit: Kerzenziehen im Kanton Zug, unter anderem am Wintermarkt im Freiruum Zug am 5. und 6. Dezember 2026.
Hinweis: Menzingen, Oberägeri, Hünenberg, Rotkreuz erst nach Bestätigung durch Joel ergänzen.

### A2. Lichterschiff Zugersee · Node 8229
Bearbeiten: https://backend.zug-tourismus.ch/de/node/8229/edit
Bei den Öffnungszeiten die Fahrt vom Donnerstag, 19. November 2026, entfernen und beim Freitag, 18. Dezember 2026, «ausgebucht» ergänzen.
**Folgenden Absatz unter den Daten ergänzen:**

> Lichterfahrten auf dem Zugersee 2026: Donnerstag, 26. November, Freitag, 11. Dezember, und Freitag, 18. Dezember (ausgebucht), jeweils 19:00 Uhr ab Zug Bahnhofsteg, Ankunft 21:30 Uhr Zug Schützenmatt. Rundfahrt CHF 36, mit Halbtax oder GA CHF 33, Kinder von 6 bis 16 Jahren CHF 18, Kinder unter 6 Jahren gratis.

**Metabeschrieb:** Winterfahrten mit der MS Rigi auf dem Zugersee: ein Schiff voller funkelnder Lichter für einen ruhigen Abend in der Adventszeit.

### A3. Skihalle Zug (Aprilscherz) · Node 8507
Bearbeiten: https://backend.zug-tourismus.ch/de/node/8507/edit
**Unpublizieren** (nach Rückfrage bei Joel). Grund: Die erfundene Skihalle wird sonst von KI-Suchen als Tatsache zitiert.

### A4. Baarer Bier Alkoholfrei Wander-Challenge · Node 4808
Bearbeiten: https://backend.zug-tourismus.ch/de/node/4808/edit
**Lead-Text ersetzen durch:**

> Die Baarer Bier Alkoholfrei Wander-Challenge 2026 von Brauerei Baar, Zug Tourismus und den Zuger Wanderwegen ist abgeschlossen. Vielen Dank allen, die mitgewandert sind. Die zehn Routen im und um den Kanton Zug bleiben als Wandertipps online.

**Metabeschrieb:** Die Wander-Challenge 2026 von Brauerei Baar und Zug Tourismus ist abgeschlossen. Die zehn Routen im und um den Kanton Zug bleiben als Wandertipps online.
Den Satz mit «stanzen Sie unterwegs Ihre Sammelkarte und gewinnen Sie …» entfernen.

## Teil B: diese Woche (Winter)
### B1. Weihnachtsessen in Zug · Node 3577
Bearbeiten: https://backend.zug-tourismus.ch/de/node/3577/edit
**Metabeschrieb:** Fondue Chalets, Restaurants und Apéro-Locations im Kanton Zug für das Weihnachtsessen mit Team, Firma oder Familie, für kleine Runden und grosse Gruppen.

### B2. Weihnachtsfeier in Zug · Node 3314
Bearbeiten: https://backend.zug-tourismus.ch/de/node/3314/edit
**Metabeschrieb:** Rahmenprogramme, Locations und weihnachtliche Teamevents im Kanton Zug für Firmenfeiern, Vereine und Gruppen jeder Grösse.

### B3. Winter in Zug · Node 1567
Bearbeiten: https://backend.zug-tourismus.ch/de/node/1567/edit
**Metabeschrieb:** Eisfelder, Fondue Chalets, Lichterwege, Winterwanderungen auf dem Zugerberg und Weihnachtsmärkte: Tipps für die kalte Jahreszeit im Kanton Zug.
**Lead-Text ersetzen durch:**

> Rote Wangen, kalte Nasenspitze und eisiger Wind: Zeit zum Aufwärmen. Eisfelder, Fondue Chalets, Lichterwege, Museen und Winterwanderungen machen den Kanton Zug in der kalten Jahreszeit drinnen und draussen zum Ausflugsziel.


### B4. Winter für Familien · Node 5784
Bearbeiten: https://backend.zug-tourismus.ch/de/node/5784/edit
**Metabeschrieb:** Schlitteln, Eislaufen, Lichterwege und Winterwanderungen mit Kindern: Winterausflüge für Familien im Kanton Zug, von der Stadt bis ins Ägerital.
**Lead-Text ersetzen durch:**

> Schlitteln, Eislaufen, Lichterwege und gemütliche Winterwanderungen: Die Region Zug bietet Familien in der kalten Jahreszeit viele Ausflugsmöglichkeiten, von der Stadt bis ins Ägerital.


### B5. Regenwetter-Tipps · Node 2669
Bearbeiten: https://backend.zug-tourismus.ch/de/node/2669/edit
**Metabeschrieb:** Museen, Ägeribad und weitere Erlebnisse unter Dach: Ausflugsideen im Kanton Zug für Regentage und kalte Wintertage, für Familien und Gruppen.

### B6. Winterwanderungen · Node 1603
Bearbeiten: https://backend.zug-tourismus.ch/de/node/1603/edit
**Metabeschrieb:** Gespurte Winterwanderwege auf dem Zugerberg, auf dem Raten und im Ägerital, oft über der Nebeldecke, mit Beizli zum Einkehren unterwegs.

Weitere Winterseiten mit fertigem Metabeschrieb (nur Metabeschrieb ersetzen):
- **Lichterwege** (/de/lichterwege/): Beleuchtete Spazierwege im Advent auf dem Zugerberg, im Ägerital, in Baar, Cham und Hünenberg, mit Daten und Startpunkten der einzelnen Wege.
- **Eissport** (/de/eissport/): EVZ-Heimspiele in der OYM hall, Eisfelder in der Stadt Zug und in Unterägeri mit Fondue am Eis sowie Curling-Plausch für Gruppen.
- **Langlaufloipen** (/de/langlaufloipen/): Loipen auf dem Zugerberg, in Unterägeri, Menzingen und im Hochtal von Rothenthurm: Langlaufen durch Moorlandschaften und über sonnige Hochplateaus.
- **Schlittelwege** (/de/schlittelwege/): Schlittelwege auf dem Zugerberg und in den nahen Wintersportgebieten Raten, Sattel-Hochstuckli, Stoos und Rigi, für Familien und rasante Abfahrten.
- **Wintersportgebiete** (/de/wintersportgebiete/): Skilifte am Nollen und auf dem Raten, Loipen, Schlittelwege und Winterwanderungen: Wintersportgebiete im Kanton Zug und in der nahen Zentralschweiz.
- **Zugerberg im Winter** (/de/poi/gebiet/zugerberg-im-winter/): Mit der Zugerbergbahn in wenigen Minuten auf 1'093 Meter: gespurte Winterwanderwege, Schlittelweg, Loipe und Aussicht auf Zugersee und Alpen.
- **Adventskalender** (/de/adventskalender/): Jeden Tag im Dezember ein neues Türchen mit Überraschungen und Preisen aus der Region Zug, dieses Jahr mit 25 statt 24 Türchen.
- **Schneeschuhrouten** (/de/schneeschuhrouten/): Schneeschuhtouren im Kanton Zug und in der Umgebung, allein oder geführt in der Gruppe: Routen durch stille Winterlandschaften abseits vom Trubel.
Die Node-IDs dieser Seiten über die Suche im Backend unter «Inhalt» finden (Titel eingeben).

## Teil C: viel besucht
### C1. Tourist Information · Node 6754
Bearbeiten: https://backend.zug-tourismus.ch/de/node/6754/edit
**Metabeschrieb:** Tourist Information in der Bahnhofshalle Zug: persönliche Beratung, Führungen, SBB Tageskarten, Souvenirs und Zug Shop, mit Öffnungszeiten und Kontakt.
**Lead-Text ersetzen durch:**

> Den schönsten Ort für den Sonnenuntergang, ein Restaurant für den Businesslunch oder eine Idee für den nächsten Ausflug: Das Team der Tourist Information in der Bahnhofshalle Zug kennt die Region und ihre Geheimtipps. Beratung am Schalter, per Telefon unter +41 41 511 75 00 oder per E-Mail an info@zug.ch.

### C2. Über Zug Tourismus · Node 1727
Bearbeiten: https://backend.zug-tourismus.ch/de/node/1727/edit
**Metabeschrieb:** Kantonale Tourismusorganisation für alle elf Zuger Gemeinden: Destinationsmarketing, Tourist Information, Business Events und Nachhaltigkeit.

### C3. Höllgrotten Baar · Node 1038
Bearbeiten: https://backend.zug-tourismus.ch/de/node/1038/edit
**Metabeschrieb:** Tropfsteinhöhlen im Lorzentobel bei Baar: Stalaktiten, Stalagmiten und kleine unterirdische Seen, ein Ausflugsziel für Familien und Schulklassen.

### C4. Team von Zug Tourismus · Node 1726
Bearbeiten: https://backend.zug-tourismus.ch/de/node/1726/edit
**Metabeschrieb:** Das Team der Tourist Information, des Marketings und des Business-Bereichs von Zug Tourismus mit Kontakt für Gäste, Medien sowie Partnerinnen und Partner.

## Teil D: Fasnacht 2027 (bis Mitte Januar, bestätigte Daten)
### Umzug Zuger Chesslete · Node 6193
Bearbeiten: https://backend.zug-tourismus.ch/de/node/6193/edit
**Lead-Text ersetzen durch:**

> Der Schülerumzug der 49. Zuger Chesslete findet am Schmutzigen Donnerstag, 4. Februar 2027, statt. Er führt vom Kolinplatz zum Bundesplatz, wo zum Abschluss eine Konfettischlacht wartet. Startzeit gemäss Programm der Zuger Chesslete.

**Metabeschrieb:** Schülerumzug der Zuger Chesslete am Schmudo, 4. Februar 2027, vom Kolinplatz zum Bundesplatz, mit Konfettischlacht zum Abschluss.
Offen: Startzeit Schülerumzug (2026: 14:30 Uhr) noch nicht publiziert.

### Faschall Umzug Allenwinden · Node 8250
Bearbeiten: https://backend.zug-tourismus.ch/de/node/8250/edit
**Lead-Text ersetzen durch:**

> Am Fasnachtssamstag, 6. Februar 2027, um 13:30 Uhr zieht der Faschall Umzug durch Allenwinden, mit anschliessender Kinderbescherung. Bunte Kostüme, Musik und fröhliche Stimmung machen ihn zu einem Fasnachtserlebnis für die ganze Familie. Am Abend folgt um 20:00 Uhr der Faschall-Ball in der Aula Allenwinden.

**Metabeschrieb:** Faschall Umzug am Fasnachtssamstag, 6. Februar 2027, um 13:30 Uhr durch Allenwinden, mit Kinderbescherung und Faschall-Ball am Abend.

### Umzug Räbefasnacht Baar · Node 6194
Bearbeiten: https://backend.zug-tourismus.ch/de/node/6194/edit
**Lead-Text ersetzen durch:**

> Der grosse Fasnachtsumzug am Fasnachtssonntag, 7. Februar 2027, startet um 14:30 Uhr und ist mit über 50 Nummern der Höhepunkt der Baarer Räbefasnacht. Route: Büelplatz, Marktgasse, Kreuzplatz, Neugasse, Bahnhof, Bahnhofstrasse, Dorfstrasse, Rathausplatz.

**Metabeschrieb:** Grosser Umzug am Fasnachtssonntag, 7. Februar 2027, um 14:30 Uhr in Baar: über 50 Nummern, der Höhepunkt der Räbefasnacht.
Offen: Route am Ende gegen Programm prüfen (Text im Programm abgeschnitten nach «Ratha…»).

### Kinderumzug Baar · Node 6195
Bearbeiten: https://backend.zug-tourismus.ch/de/node/6195/edit
**Lead-Text ersetzen durch:**

> Der Kinderumzug findet am Fasnachtsmontag, 8. Februar 2027, um 14:30 Uhr im Dorfzentrum Baar statt. Weil der Fasnachtsmontag 2027 in die Sportferien fällt, organisiert die Fasnachtsgesellschaft Baar den Umzug. Alle Kinder, die einmal an einem Fasnachtsumzug mitlaufen möchten, können sich anmelden.

**Metabeschrieb:** Kinderumzug am Fasnachtsmontag, 8. Februar 2027, um 14:30 Uhr im Dorfzentrum Baar, organisiert von der Fasnachtsgesellschaft Baar.

### Räbefasnacht Baar: Verbrennung des Räbechüng · Node 6267
Bearbeiten: https://backend.zug-tourismus.ch/de/node/6267/edit
**Lead-Text ersetzen durch:**

> Am Fasnachtsdienstag, 9. Februar 2027, endet die Baarer Räbefasnacht mit dem Schlussakt auf dem Rathausplatz: Um 19:45 Uhr startet der Fackelzug durch das Dorfzentrum, um 20:00 Uhr wird der Räbechüng zu Guggenklängen verbrannt.

**Metabeschrieb:** Schlussakt der Räbefasnacht am 9. Februar 2027: Fackelzug um 19:45 Uhr und Verbrennung des Räbechüngs um 20:00 Uhr auf dem Rathausplatz Baar.

### Umzug Eiche-Fasnacht Hünenberg · Node 6269
Bearbeiten: https://backend.zug-tourismus.ch/de/node/6269/edit
**Lead-Text ersetzen durch:**

> Am Fasnachtsdienstag, 9. Februar 2027, zieht der bunte Fasnachtsumzug der Eiche Zunft durch die Strassen von Hünenberg. Anschliessend folgen ein Monsterkonzert und die Verbrennung des Eichefrässers.

**Metabeschrieb:** Fasnachtsumzug der Eiche Zunft am 9. Februar 2027 durch Hünenberg, mit Monsterkonzert und Verbrennung des Eichefrässers.
Offen: Startzeit 2027 nicht publiziert (2026: 14:30 Uhr).

### Umzug Legorenfasnacht Oberägeri · Node 6271
Bearbeiten: https://backend.zug-tourismus.ch/de/node/6271/edit
**Lead-Text ersetzen durch:**

> Am Güdeldienstag, 9. Februar 2027, startet der Grosse Umzug der Legorenfasnacht pünktlich um 13:15 Uhr beim Gasthaus Hirschen und zieht der Hauptstrasse entlang durch Oberägeri.

**Metabeschrieb:** Grosser Umzug der Legorenfasnacht am Güdeldienstag, 9. Februar 2027, um 13:15 Uhr ab Gasthaus Hirschen in Oberägeri.

### Umzug Wylägerer Fasnacht Unterägeri · Node 6278
Bearbeiten: https://backend.zug-tourismus.ch/de/node/6278/edit
**Lead-Text ersetzen durch:**

> Am Sonntag, 7. Februar 2027, beginnt um 13:45 Uhr der 64. Wylägerer Fasnachtsumzug in Unterägeri, anschliessend Bühnenspiel auf dem Dorfplatz. Bereits am Schmutzigen Donnerstag, 4. Februar 2027, startet um 14:00 Uhr der Kinderumzug mit anschliessender Kinderfasnacht in der Ägerihalle.

**Metabeschrieb:** 64. Wylägerer Fasnachtsumzug am 7. Februar 2027 um 13:45 Uhr in Unterägeri, Kinderumzug am Schmudo um 14:00 Uhr.

### Fasnacht in Zug (Übersicht) · Node 2036
Bearbeiten: https://backend.zug-tourismus.ch/de/node/2036/edit
Tagestitel ersetzen: Schmutziger Donnerstag, 4. Februar 2027 · Fasnachtsfreitag, 5. Februar 2027 · Fasnachtssamstag, 6. Februar 2027 · Fasnachtssonntag, 7. Februar 2027 · Fasnachtsmontag, 8. Februar 2027 · Fasnachtsdienstag, 9. Februar 2027. Abschnittstitel «Fasnacht 2026 im Kanton Zug: Abgesagte und pausierende Anlässe» auf 2027 ändern. Die Einträge aktualisieren sich mit den einzelnen Umzugsseiten. Bäckermöhli (27. Januar 2027), Chrööpfelimee (14. Februar 2027) und Greth Schell (8. Februar 2027) sind bereits korrekt.
**Metabeschrieb:** Chesslete am Schmudo, 4. Februar 2027, Umzüge in allen Gemeinden und Guggenmusigen bis zum Güdeldienstag: die Fasnacht im Kanton Zug.

Noch NICHT bearbeiten (Daten 2027 fehlen): Steinhausen (6273), Chnöpfli Rotkreuz (6274), Herti Zug (6275), FASI Rotkreuz (8138), Neuheim (8132), Nachtumzug Menzingen (6270), Laternenweg Raten (7932), Stuckli Ballonfiesta (8071).

## Teil E: übrige fehlende Metabeschriebe
Datei seo/Metabeschriebe_neu_2026-11-19.csv (bzw. Excel, Blatt «Metabeschriebe neu»): 112 Zeilen mit Aktion «meta». Pro Zeile Link «Bearbeiten» öffnen, Text ins Feld Metabeschrieb einfügen, speichern. Zeilen mit «noindex» oder «archiv» nicht bearbeiten, nur an Joel melden.

## Protokoll (nach jedem Node ausfüllen)
| Node | Seite | Feld | alter Text (Anfang) | erledigt | live geprüft | Bemerkung |
|---|---|---|---|---|---|---|

## Abschluss
Am Ende an Joel: Liste der bearbeiteten Nodes, übersprungene Nodes mit Grund, offene Fragen. Nichts weiteres ändern.