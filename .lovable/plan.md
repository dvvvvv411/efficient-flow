

# Team-Bilder austauschen & Cards anpassen

## Bilderzuordnung

**Männlich** (6 Bilder: 1-6):
- Dr. Thomas Weber → `4-2.jpg` (fest)
- Michael Fischer → `1-2.jpg`
- Daniel Krause → `2-2.jpg`
- Markus Bauer → `3-2.jpg`
- Jonas Hartmann → `5-2.jpg`
- Sebastian Richter → `6-2.jpg`

**Weiblich** (4 Bilder: 7-10):
- Laura Schneider → `7-2.jpg`
- Julia Wagner → `8-2.jpg`
- Anna Hoffmann → `9-2.jpg`
- Sarah Meier → `10-2.jpg`

## Änderungen

1. **Bilder kopieren**: Alle 10 Uploads nach `src/assets/team/` kopieren (alte Bilder ersetzen).

2. **`src/pages/Team.tsx`**: Imports auf neue Dateien umstellen. Cards kompakter gestalten:
   - Kleinere Bilddarstellung (nicht mehr `aspect-square` fullwidth, sondern z.B. rundes Avatar-Bild oder kleineres rechteckiges Bild)
   - Grid auf 5 Spalten (xl) / 4 (lg) / 3 (md) / 2 (sm) umstellen für kompaktere Darstellung
   - Kompakteres Card-Design: rundes Profilbild (ca. 80-96px), Name und Rolle darunter, Beschreibung kleiner oder als Tooltip/Hover
   - Dadurch weniger Abhängigkeit von hoher Bildauflösung

