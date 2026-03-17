

# Kontakt-Seite: Card entfernen & Sidebar sticky machen

## Änderungen in `src/pages/Kontakt.tsx`

1. **Formular-Card entfernen**: Den Wrapper `div` mit `rounded-2xl border border-border/60 bg-white p-8 md:p-10` (Zeile 79/156) entfernen — Formular-Inhalt (Titel, Text, Form) direkt ohne umschließende Card rendern.

2. **Grid → Flex-Layout** wie auf KarriereDetail: `grid lg:grid-cols-5` ersetzen durch `flex flex-col lg:flex-row gap-8` mit `flex-1` für die linke Spalte und `w-full lg:w-80 shrink-0` für die rechte.

3. **Rechte Spalte sticky machen**: Den Sidebar-Content in einen Container mit `lg:sticky lg:top-28` wrappen — gleiche Methode wie auf der KarriereDetail-Seite.

