# Das Gremium

Nach dem Vorbild von KI TALK Folge 159 (Maxi Raabe, Claude Code): Ergebnisse werden von einem Gremium aus Expertenperspektiven bewertet und so lange überarbeitet, bis **jedes Mitglied mindestens 9,0 von 10** vergibt.

Für Strategie, Kampagnen, Medienmitteilungen, Präsentationen an Vorstand oder Kanton und alles mit Aussenwirkung. Für Alltagsmails reicht `zt-qualitaetspruefung`.

## Sitze

Jeder Sitz bringt das Denken anerkannter Expertinnen und Experten seines Fachs ein. Die Namen stehen für deren veröffentlichte Methoden, nicht für erfundene Zitate.

| Sitz | Frage des Sitzes | Expertenwissen |
| --- | --- | --- |
| **Gast** | Würde ich deswegen nach Zug kommen, länger bleiben, wiederkommen? | Clayton Christensen (Jobs to be done), Avinash Kaushik (See, Think, Do, Care), Donald Miller (die Kundin ist die Heldin) |
| **Einheimische und Politik** | Tragen Bevölkerung, Gemeinden, Stadt und Kanton das mit? Passt es zur Leistungsvereinbarung? | Doxey Irridex (Tourismusakzeptanz), Destinationsumfrage ZT, Leistungsvereinbarung |
| **Partner und Wirtschaft** | Nützt es Key- und Promo-Partnern, Hotellerie, MICE? Ist es fair über den ganzen Kanton? | Mitgliedschafts- und Partnermodell ZT, Michael Porter (Wertschöpfung, Cluster) |
| **Marke** | Stärkt es «Zug, nicht gross, aber grossartig» und #inlovewithzug? Ist es unverwechselbar? | Byron Sharp (How Brands Grow, unverwechselbare Markenelemente), Marty Neumeier (Positionierung), ZT CI/CD |
| **Wirkung und Finanzen** | Lohnt sich der Aufwand? Ist der Erfolg messbar? | Lafley/Martin (Playing to Win), OKR (John Doerr), Pre-Mortem (Gary Klein) |
| **Nachhaltigkeit** | Ist es ökologisch und sozial verantwortbar und jede Aussage belegt? | Swisstainable, Brundtland, Green-Claims-Prüfung |
| **Redaktion und Medien** | Ist es klar, wahr, spannend, kurz? Würde eine Redaktion es aufnehmen? | Barbara Minto (Pyramide), umgekehrte Pyramide, Wolf Schneider (Deutsch für Profis) |

Die Abteilungsleitung wählt pro Auftrag **4 bis 7 passende Sitze** (Kosten und Tempo). Sitz «Gast» und «Marke» sind bei Aussenwirkung immer dabei.

## Bewertungsregeln (gegen Gefälligkeitsnoten)

- Jedes Mitglied bewertet **unabhängig**, ohne die Noten der anderen zu sehen.
- Skala 0 bis 10, eine Nachkommastelle. Anker: 10 = nichts mehr zu verbessern, 9 = veröffentlichungsreif, 7 = brauchbar mit klaren Mängeln, 5 = Grundidee trägt, Ausführung nicht, unter 5 = falsche Richtung.
- **Jeder Abzug braucht eine konkrete Begründung** mit Stelle im Text.
- **9,0 oder mehr nur, wenn kein Muss-Punkt offen ist.**
- Rückmeldung getrennt in **Muss** (blockiert 9,0) und **Kann** (Verbesserung).
- Faktenfehler, Verstösse gegen die ZT-Schreibregeln oder Befugnisse sind immer Muss-Punkte.

## Ablauf

1. **Entwurf** durch den zuständigen Spezialisten.
2. **Bewertung:** gewählte Sitze parallel mit dem Agenten `zt-gremium` (je ein Aufruf pro Sitz).
3. **Synthese** durch die Abteilungsleitung: Notentabelle, Muss-Punkte zusammengeführt, Widersprüche zwischen Sitzen aufgelöst oder als Zielkonflikt markiert.
4. **Überarbeitung** durch den Spezialisten mit allen Muss-Punkten.
5. **Neue Bewertung** nur durch Sitze unter 9,0 (plus Kontrolle, dass die Überarbeitung bei den anderen nichts verschlechtert hat).
6. **Abbruch** nach höchstens **drei Runden**. Dann geht das Ergebnis mit offenem Dissens an Joel: welcher Sitz, welche Note, warum.

## Vorlage an Joel

```
## Ergebnis (Runde X)
<finale Fassung>

## Gremium
| Sitz | Runde 1 | Runde 2 | Final | Offener Punkt |

## Zielkonflikte
- ...

## Freigabe nötig
```
