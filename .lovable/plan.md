

# Favicon generieren + Lovable-Referenzen entfernen

## 1. Favicon generieren
- Mit der Nano banana AI ein Favicon für EfficientFlow generieren: minimalistisches Icon, passend zur Marke (Flow/Effizienz-Thema), modernes Design
- Generiertes Bild als `public/favicon.png` speichern
- Altes `public/favicon.ico` löschen/überschreiben

## 2. index.html komplett aktualisieren
- **Titel:** `EfficientFlow – Beratung, Digitalisierung & Software`
- **Description:** `Beratung, Digitalisierung und maßgeschneiderte Software für Unternehmen, die effizienter arbeiten wollen.`
- **Author:** `Efficient Flow Solutions`
- **OG/Twitter Meta:** Titel + Beschreibung passend, Lovable OG-Images entfernen, Twitter @-Handle entfernen
- **Favicon:** `<link rel="icon" href="/favicon.png" type="image/png">`
- **TODO-Kommentare** entfernen
- **Sprache:** `lang="de"` statt `lang="en"`

## 3. Lovable-Referenzen im Code
- `index.html`: Alle Lovable-Texte ersetzen (s.o.)
- `vite.config.ts`, `package.json`, `playwright-*`: Das sind Build-/Dev-Tools – lovable-tagger etc. bleiben, da sie für die Entwicklungsumgebung nötig sind

**Dateien:** `index.html`, `public/favicon.png` (neu generiert)

