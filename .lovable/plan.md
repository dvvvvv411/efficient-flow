

# Karriere-Seite Updates

## Änderungen in `src/data/karriereStellen.ts`

1. **München → Düsseldorf** bei allen Stellen (5 Vorkommen im `standort`-Feld + 1x im Benefits-Text der Werkstudent-Stelle)

2. **Prozessberater-Stelle komplett ersetzen** mit den neuen Daten und an **Position 1** im Array verschieben:
   - slug: `onlineprozess-tester`
   - titel: `Mitarbeiter (m/w/d) für Onlineprozess-Tests`
   - standort: `Düsseldorf` (konsistent, auch wenn 100% Remote)
   - modell: `Remote / Minijob / Teilzeit`
   - Alle Felder (kurzbeschreibung, beschreibung, aufgaben, voraussetzungen, benefits) mit dem bereitgestellten Text

**1 Datei, ~40 Zeilen Änderung.**

