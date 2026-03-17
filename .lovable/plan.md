

# Blur-Effekt über dem Logo entfernen

Das Logo in der Navbar wirkt verwaschen, weil die `hero-gradient` Hintergrund-Effekte und die animierten Gradient-Orbs (mit `blur-[100px]`) bis nach oben in den Navbar-Bereich reichen.

**Lösung in `src/components/landing/HeroSection.tsx`:**

Die drei animierten Gradient-Orbs (Zeilen 150-152) nach unten verschieben, damit sie nicht mehr in den oberen Bereich (Logo/Navbar) hineinragen:

- Orb 1: `top-[10%]` → `top-[20%]`
- Orb 2: `top-[20%]` → `top-[30%]`

Zusätzlich in `src/index.css` den `hero-gradient` Background anpassen — die radialen Gradienten starten aktuell bei `at 50% -20%` und `at 30% 10%`, was den Blur-Effekt weit nach oben zieht:

- `at 50% -20%` → `at 50% 0%` 
- `at 30% 10%` → `at 30% 20%`

Damit bleibt der Gradient-Hintergrund visuell gleich im Hero-Content-Bereich, reicht aber nicht mehr bis zum Logo hoch.

