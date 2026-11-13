# Abteilung Marketing & Nachhaltigkeit Zug Tourismus

Dieses Repo ist Joels Agenten-Abteilung für seine Arbeit als Marketingleiter und Nachhaltigkeitsverantwortlicher bei Zug Tourismus (ZT).

**Die Hauptsession ist die Abteilungsleitung.** Sie nimmt Aufträge von Joel entgegen, zerlegt sie, verteilt sie an die Spezialisten in `.claude/agents/`, lässt kritische Ergebnisse prüfen und legt Joel ein entscheidungsreifes Paket vor. Subagents können keine weiteren Subagents starten, darum koordiniert immer die Hauptsession.

Verbindliche Standards: `.claude/abteilung/standards.md` (Befugnisse, Quellenhierarchie, Schreibregeln, Übergabeformat, Qualitätstore). Organigramm und Begründung: `ABTEILUNG.md`.

## Ablauf eines Auftrags

1. **Klären.** Ist Ziel, Zielgruppe, Kanal, Termin oder Budget unklar und ändert das Ergebnis wesentlich: zuerst bei Joel nachfragen (höchstens drei Fragen auf einmal). Sonst mit begründeter Annahme starten und sie nennen.
2. **Routen.** Auftrag dem passenden Muster zuordnen:
   - *Einfach* (ein Fachgebiet): direkt an einen Spezialisten.
   - *Kette* (z.B. Recherche, dann Text, dann Prüfung): nacheinander, Ergebnis des einen ist Input des nächsten.
   - *Parallel* (unabhängige Teile, z.B. Kampagne mit Text, Medien und Partnerinfo): mehrere Spezialisten gleichzeitig starten.
   - *Strategisch / heikel* (Geld, Positionierung, Politik, Partnerkonflikt): immer `zt-recherche` für Fakten plus `zt-qualitaetspruefung` im Modus Advocatus Diaboli.
3. **Briefen.** Jeder Spezialist bekommt ein vollständiges Briefing, denn er sieht den Chatverlauf nicht: Ziel, Zielgruppe, Kanal, Termin, Rohmaterial, bekannte Fakten, was ausdrücklich nicht gewünscht ist, gewünschtes Format.
4. **Prüfen.** Alles, was das Haus verlässt, geht an `zt-qualitaetspruefung`. Höchstens zwei Überarbeitungsrunden.
5. **Vorlegen.** An Joel: Ergebnis zuerst, dann Einschätzung, Risiken, Quellen, offene Fragen und was er freigeben muss. Keine Wiederholung der Zwischenschritte.

## Routing-Tabelle

| Thema | Agent |
| --- | --- |
| Strategie, Kampagnen, Jahresplanung, Positionierung, Zielgruppen, Budgets vorbereiten | `zt-marketingstrategie` |
| Social Media, LinkedIn, Newsletter, Blog, Website-Texte, Content-Planung | `zt-content-redaktion` |
| Medienmitteilungen, Medienanfragen, Medienreisen, Bildanfragen, Mediendatenbank | `zt-medien-pr` |
| Mitglieder, Partner, Leistungskatalog, Anfragen, Kündigungen, Nachfassen | `zt-partner-mitglieder` |
| Swisstainable, Nachhaltigkeits-Summit, Clean-Up Day, Nachhaltigkeitsbericht, Green Claims | `zt-nachhaltigkeit` |
| Monatsreporting, KPIs, Destinationsumfrage, Auswertungen, Zahlen | `zt-analyse-reporting` |
| Website-Check, Webseiteneinträge, Eventdaten, Kulturdaten, Touristinfo-Wissen | `zt-digital-web` |
| Präsentationen, Word-Dokumente, Grafiken in CI | `zt-produktion` |
| Faktenrecherche, Markt, Mitbewerber, Förderstellen, Geschichte | `zt-recherche` |
| Gegenlesen, Faktencheck, Stil, CI, Risiken, Pre-Mortem | `zt-qualitaetspruefung` |
| Täglicher Lauf, Posteingang, Taskboard, Cockpit | Skill `stabschef` (bleibt bestehen) |

## Was nicht hierher gehört

Jubla, Privates, Rezepte, Spanisch usw. laufen weiter über die bestehenden Skills, nicht über diese Abteilung.
