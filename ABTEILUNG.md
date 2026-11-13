# Abteilung Marketing & Nachhaltigkeit Zug Tourismus

Eine Agenten-Abteilung für Joels Arbeit bei Zug Tourismus: eine Abteilungsleitung, neun Spezialistinnen und eine unabhängige Qualitätsprüfung. Die Agenten entwerfen, Joel gibt frei.

## Organigramm

```
                         Joel (Entscheid und Freigabe)
                                     │
                   Abteilungsleitung (Hauptsession, CLAUDE.md)
                    klärt · verteilt · bündelt · legt vor
                                     │
     Spezialistinnen (arbeiten einzeln, in Ketten oder parallel)
     · Strategie          · Redaktion          · Medien & PR
     · Partner/Mitglieder · Nachhaltigkeit     · Analyse & Reporting
     · Digital & Web      · Produktion         · Recherche
                                     │
                    Qualitätsprüfung (unabhängig, Pflicht vor Versand)

 Täglicher Lauf (Posteingang, Taskboard, Cockpit): bestehender Skill «stabschef»
```

| Agent | Rolle | Wichtigste Skills | Denkwerkzeuge |
| --- | --- | --- | --- |
| `zt-marketingstrategie` | Strategie, Kampagnen, Entscheidungsvorlagen | zug-tourismus-kontext, tourismus-branchenwissen, campaign-plan | Playing to Win, See Think Do Care, RACE, PESO, OKR, Working Backwards |
| `zt-content-redaktion` | Social, LinkedIn, Newsletter, Web-Texte | linkedin-joel, content-konverter, zt-webseiteneintrag | Hook, Show don't tell, UTM |
| `zt-medien-pr` | Medienmitteilungen, Medienanfragen, Bilder | zt-medienmitteilung, zt-mediendatenbank | Umgekehrte Pyramide, Message House |
| `zt-partner-mitglieder` | Anfragen, Mitgliedschaft, Kündigungen, Nachfassen | email-filter, nachfassen, zt-hotelvermittlung | Jobs to be done |
| `zt-nachhaltigkeit` | Swisstainable, Summit, Clean-Up, Bericht | swisstainable-claimcheck, clean-up-baar | Wirkungslogik, GRI light, Green-Claims-Prüfung |
| `zt-analyse-reporting` | Monatsreporting, KPIs, Umfrage | zt-monatsreporting, destinationsumfrage, data:analyze | Minto-Pyramide, Nachrechnen |
| `zt-digital-web` | Website-Check, Einträge, SEO, Barrierefreiheit | zt-website-check, zt-kultur-daten, eventliste-zug | WCAG 2.1 AA, Suchintention |
| `zt-produktion` | Präsentationen, Dokumente, Grafiken in CI | zt-cicd, zt-praesentationen, zt-dokumente | Action Titles, Pyramide |
| `zt-recherche` | Fakten, Benchmarks, Förderstellen, Recht | deep-research, zuger-foerderstellen, zug-geschichte | Quellenhierarchie, Vertrauensstufen |
| `zt-qualitaetspruefung` | Prüfung vor Versand, Advocatus Diaboli | swisstainable-claimcheck, brand-review, zt-cicd | Checkliste, Pre-Mortem, Steelmanning |

## So nutzt du die Abteilung

Im Repo `Privates` eine Claude-Code-Session starten (lokal oder auf claude.ai/code) und den Auftrag in eigenen Worten geben. Die Hauptsession routet selbst. Ausdrücklich geht es so:

```
/auftrag Kampagne Chriesibluescht 2027 planen, Fokus Familien aus der Deutschschweiz
```

```
/gegencheck <Text oder Entscheid>
```

Einen einzelnen Agenten direkt ansprechen: «Lass zt-medien-pr eine Medienmitteilung zum Pumptrack Neuheim schreiben.»

## Warum so gebaut: übernommene Prinzipien

**Aus den Agenten-Frameworks**

| Prinzip | Quelle | Umsetzung hier |
| --- | --- | --- |
| Einfache, kombinierbare Muster statt eines Riesenagenten: Kette, Routing, Parallelisierung, Orchestrator mit Workern, Evaluator mit Optimierer | Anthropic, «Building effective agents», Dezember 2024 | Vier Ablaufmuster in `CLAUDE.md`, Qualitätsprüfung als Evaluator mit maximal zwei Runden |
| Leitagent zerlegt und briefet Subagenten vollständig, Subagenten arbeiten parallel in eigenem Kontext | Anthropic, «How we built our multi-agent research system», Juni 2025 | Briefing-Pflicht in `CLAUDE.md` Schritt 3 |
| Spezialisierte Subagenten mit eigener Beschreibung, eigenem Prompt und eigenen Werkzeugen; Subagenten starten keine weiteren Subagenten | Claude Code Dokumentation, Subagents (code.claude.com/docs) | Zehn Dateien in `.claude/agents/`, Koordination nur in der Hauptsession |
| Guardrails und klare Übergaben zwischen Agenten, Mensch entscheidet bei heiklen Aktionen | OpenAI, «A practical guide to building agents», 2025 | Befugnistabelle in den Standards, Rückfrage-Regeln in `.claude/settings.json`, einheitliches Übergabeformat |
| Rolle, Ziel und Hintergrund pro Agent | CrewAI Dokumentation (role, goal, backstory) | Jeder Agent beginnt mit Rolle und Haltung |

**Aus den Fachframeworks**

| Framework | Quelle |
| --- | --- |
| Playing to Win (Strategiekaskade) | A. G. Lafley, Roger Martin, Harvard Business Review Press, 2013 |
| See, Think, Do, Care | Avinash Kaushik, Blog «Occam's Razor», 2013 |
| RACE Planning | Dave Chaffey, Smart Insights |
| PESO-Modell | Gini Dietrich, «Spin Sucks», 2014 |
| Pyramidenprinzip | Barbara Minto, «The Pyramid Principle» |
| Working Backwards / PR-FAQ | Colin Bryar, Bill Carr, «Working Backwards», 2021 |
| Pre-Mortem | Gary Klein, «Performing a Project Premortem», Harvard Business Review, September 2007 |
| Swisstainable | Schweiz Tourismus (aktuelle Kriterien jeweils auf der offiziellen Seite prüfen) |
| WCAG 2.1 | W3C, 2018 |

## Risiken und Grenzen (ehrlich)

- **Outlook-Entwürfe:** Laut Skill `stabschef` hat der Outlook-Konnektor seit dem 25.09.2026 nur Leserechte. Bis die Informatik Mail.ReadWrite freigibt, liefern die Agenten Entwürfe zum Kopieren.
- **Fehlende Daten:** Google Analytics und das Social-Media-Planungstool sind nicht angeschlossen. Zahlen von dort musst du liefern, sonst bleibt das Reporting lückenhaft.
- **Kosten und Tempo:** Mehrere Agenten parallel brauchen deutlich mehr Rechenaufwand als ein einzelner Chat (Anthropic nennt für Multi-Agent-Recherche rund 15-mal mehr Tokens als ein normaler Chat). Für kleine Aufgaben darum lieber direkt einen Agenten oder den passenden Skill nehmen.
- **Doppelte Wahrheit vermeiden:** Fachwissen (Preise, Partner, Regeln) gehört in die Skills, nicht in die Agenten. Ändert sich etwas, nur den Skill anpassen.
- **Abhängigkeit von Skills:** Die Agenten laden deine Claude.ai-Skills. Läuft eine Session ohne diese Skills, arbeiten die Agenten mit den Standards weiter, aber ohne Detailwissen. Das melden sie dann.
- **Keine Garantie für Fakten:** Die Qualitätsprüfung senkt das Fehlerrisiko, ersetzt aber nicht deinen Blick vor dem Versand.

## Pflege

- Nach den ersten zwei Wochen prüfen: Welche Agenten wurden genutzt, wo hat die Prüfung echte Fehler gefunden? Ungenutzte Agenten zusammenlegen.
- Neue Erkenntnisse (z.B. eine Regel von Joel) in den passenden Skill schreiben, nicht in mehrere Agenten.
