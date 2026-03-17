

# Favicon + Meta-Daten Fix

Die `index.html` sieht bereits korrekt aus -- Titel, Description, Author, OG-Tags und Favicon-Referenz sind alle richtig gesetzt. Die Lovable-Referenzen im Code sind nur in Build-/Test-Tools (vite.config, playwright), die für die Entwicklung nötig sind.

Das Problem ist vermutlich, dass das generierte `public/favicon.png` nicht korrekt erstellt wurde (die Diff zeigt nur `<binary>` mit 1 Zeile).

## Plan

1. **Neues Favicon generieren** -- Ein frisches, hochwertiges Favicon für EfficientFlow generieren mit dem Nano banana pro Modell (bessere Qualität). Minimalistisches "EF"-Monogramm oder Flow-Icon, 512x512px, auf transparentem Hintergrund.

2. **Favicon als `public/favicon.png` speichern** -- Das alte überschreiben mit dem korrekt generierten Bild.

3. **Seitentitel pro Unterseite setzen** -- Aktuell wird nur der globale Titel in `index.html` gesetzt. Für jede Seite einen passenden `document.title` via `useEffect` setzen:
   - **Index:** `EfficientFlow – Beratung, Digitalisierung & Software`
   - **Leistungen:** `Leistungen | EfficientFlow`
   - **Methodik:** `Methodik | EfficientFlow`
   - **Software:** `Software | EfficientFlow`
   - **Team:** `Team | EfficientFlow`
   - **Kontakt:** `Kontakt | EfficientFlow`
   - **Karriere:** `Karriere | EfficientFlow`
   - **KarriereDetail:** `Stellenangebot | EfficientFlow`
   - **Bewerbung:** `Bewerbung | EfficientFlow`
   - **NotFound:** `Seite nicht gefunden | EfficientFlow`

**Dateien:** `public/favicon.png` (neu), alle Seiten in `src/pages/*.tsx`

