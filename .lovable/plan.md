

# Bildschutz auf der Team-Seite

Rechtsklick auf Team-Bilder deaktivieren, sodass weder "Bild speichern unter" noch "Google Bildersuche" möglich ist.

## Umsetzung in `src/pages/Team.tsx`

1. `onContextMenu={(e) => e.preventDefault()}` auf die `<img>`-Elemente setzen
2. Optional: `draggable={false}` und CSS `user-select: none; pointer-events: none` auf die Bilder, um auch Drag & Drop zu unterbinden — dabei `pointer-events` nur auf das `<img>` selbst (nicht den Container), damit Hover-Effekte erhalten bleiben

Hinweis: Dies ist kein 100%iger Schutz (DevTools, Screenshot etc.), aber verhindert die gängigsten Wege.

