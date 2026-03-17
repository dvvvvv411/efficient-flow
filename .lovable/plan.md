

# Fix: Logo im Header verzerrt

**Problem:** Der Logo-Container hat `w-[120px] h-10` als feste Dimensionen, und das `<img>` darin hat `h-10 w-auto`. Wenn das tatsächliche Seitenverhältnis des Logos nicht exakt 120×40px entspricht, wird es durch den Container gestaucht/verzerrt.

**Fix in `src/components/landing/Navbar.tsx`:**

- **Zeile 42:** Container-Klasse von `w-[120px] h-10` auf `h-10` ändern — nur Höhe fixieren, Breite automatisch
- Das `<img>` behält `h-10 w-auto` und skaliert korrekt
- Zusätzlich `object-contain` auf das `<img>` setzen als Absicherung

So bleibt der Flicker-Fix erhalten (feste Höhe reserviert vertikalen Platz), aber die Breite passt sich dem tatsächlichen Logo-Seitenverhältnis an.

