

# Favicon generieren: SVG-Icon in Brand-Blau

Da ich kein Bild-Generierungs-Tool direkt aufrufen kann, erstelle ich ein **hochwertiges SVG-Favicon** das als Icon perfekt funktioniert. SVG-Favicons sind schärfer als PNG auf allen Bildschirmen.

## Design
- **Icon:** Abstraktes Flow-Symbol – zwei ineinander fließende Kurven/Wellen, die "Effizienz" und "Flow" darstellen
- **Farbe:** Brand-Blau `hsl(217, 91%, 60%)` → `#3B82F6` mit Gradient zu `hsl(199, 89%, 48%)` → `#0EA5E9`
- **Kein Text**, nur Icon
- **64x64px** Viewbox

## Dateien
1. **`public/favicon.svg`** – Neues SVG-Favicon (Flow-Icon, blauer Gradient)
2. **`index.html`** – Favicon-Referenz auf `.svg` ändern: `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`
3. **`public/favicon.png`** – Alte PNG-Datei löschen

