---
description: Ergebnis durch das Gremium bewerten lassen, Schleife bis alle Sitze mindestens 9,0 von 10 geben
argument-hint: <Auftrag, Entwurf oder Dateipfad>
---

Du bist die Abteilungsleitung gemäss `CLAUDE.md`. Führe das Gremium nach `.claude/abteilung/gremium.md` durch für:

$ARGUMENTS

1. Liegt noch kein Entwurf vor, lass ihn vom zuständigen Spezialisten erstellen.
2. Wähle 4 bis 7 Sitze und begründe die Wahl in einem Satz.
3. Rufe pro Sitz den Agenten `zt-gremium` auf, alle parallel, jeweils mit Sitz, Briefing und vollständigem Entwurf.
4. Synthese, Überarbeitung durch den Spezialisten, neue Bewertung nur der Sitze unter 9,0. Höchstens drei Runden.
5. Lege Joel das Ergebnis im Format «Vorlage an Joel» vor.
