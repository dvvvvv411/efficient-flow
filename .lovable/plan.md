

# Fix: Footer Bottom-Bar abgeschnitten

## Problem
Die Bottom-Bar (Zeile 76) benutzt negative Margins (`-mx-5 sm:-mx-6 -mb-16 sm:-mb-20`) und `rounded-b-lg`, um über den Padding-Container hinauszuragen. Das verursacht abgeschnittene/abgehackte Kanten, weil der Container das Element clippt.

## Lösung
Die Bottom-Bar aus dem `max-w-7xl`-Container herausnehmen und als eigenes `<div>` direkt innerhalb des `<footer>` platzieren. So braucht es keine negativen Margins mehr und die Hintergrundfarbe erstreckt sich sauber über die volle Breite.

### Änderung in `src/components/landing/Footer.tsx`
- Bottom-Bar-`div` **nach** dem `max-w-7xl`-Container platzieren (nicht darin)
- Negative Margins und `rounded-b-lg` entfernen
- Stattdessen eigenen `max-w-7xl mx-auto px-5 sm:px-6` Container innerhalb der Bottom-Bar für konsistentes Alignment
- `bg-muted/30 border-t border-border/50` bleibt als Styling

**1 Datei, ~5 Zeilen Änderung.**

