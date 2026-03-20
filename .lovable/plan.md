

# Favicon für Google + Sitemap erstellen

## 1. `index.html` — Favicon-Tags erweitern

Aktuelle Einbindung (nur eine Zeile) durch Google-konforme Variante ersetzen:

```html
<link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
```

Google verlangt **mindestens 48×48 px** und bevorzugt mehrere `sizes`-Angaben. Falls die aktuelle `favicon.png` kleiner als 48×48 ist, muss sie durch eine größere Version ersetzt werden — bitte prüfen.

## 2. `public/sitemap.xml` — Neu erstellen

Domain: `https://efficient-flow.solutions`

Alle Routen aus `App.tsx`:
- `/`
- `/leistungen`
- `/software`
- `/methodik`
- `/team`
- `/kontakt`
- `/impressum`
- `/datenschutz`
- `/karriere`

## 3. `public/robots.txt` — Sitemap-Verweis ergänzen

Am Ende hinzufügen:
```
Sitemap: https://efficient-flow.solutions/sitemap.xml
```

## Hinweis
Nach Deployment dauert es einige Wochen, bis Google das Favicon in den Suchergebnissen aktualisiert. Die Änderungen sorgen dafür, dass alle technischen Voraussetzungen erfüllt sind.

