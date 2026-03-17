
# Dezenter Cookie-Banner

## Komponente: `src/components/CookieBanner.tsx`
- Kleiner, dezenter Banner am unteren Bildschirmrand (fixed bottom)
- Glass-Style passend zum Seitenstil (`glass-card` Klasse, backdrop-blur)
- Einzeiliges Layout: kurzer Text + "Akzeptieren" Button in Brand-Blau + "Ablehnen" Link dezent
- Beim Klick auf "Akzeptieren" oder "Ablehnen": `localStorage.setItem('cookies-accepted', 'true'/'false')` setzen, Banner ausblenden
- Beim nächsten Besuch: Banner nur anzeigen wenn kein `cookies-accepted` Eintrag in localStorage
- Sanfte Einblend-Animation (slide-up + fade-in)
- Link zur Datenschutzseite integriert

## Integration: `src/App.tsx`
- `<CookieBanner />` einmal global unterhalb der Routes rendern

## Technisch
- 1 neue Datei, 1 Edit
- Kein externer State nötig, nur localStorage
