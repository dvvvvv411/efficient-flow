

# Mobile-Optimierung & Navbar-Bug-Fix

## 1. Navbar — Logo-Flicker-Bug (Desktop)

**Problem:** Das Logo wird als separates `<img>` geladen. Bis es geladen ist, nimmt es keinen Platz ein → die Nav-Pill springt nach rechts wenn das Logo erscheint.

**Fix:** Dem Logo-Container eine feste Breite/Höhe geben (`w-[120px] h-10`) damit der Platz sofort reserviert ist, unabhängig vom Ladezustand des Bildes.

## 2. Navbar — Mehr Abstand "Kontakt" ↔ "Projekt starten" (Desktop)

Gap zwischen den Nav-Links und dem CTA-Button vergrößern: `ml-auto` → `ml-8` oder den CTA mit `pl-6` versehen, damit ein deutlicherer Abstand entsteht.

## 3. Navbar — Mobile Layout (Logo zentriert, Hamburger links, Fullscreen-Sidebar)

**Aktuell:** Logo links, Nav-Pill mit Hamburger rechts, Dropdown-Popover.

**Neu (nur `md:hidden`):**
- Layout: `[Hamburger] — [Logo zentriert] — [Platzhalter]` (3-Spalten mit `justify-between`)
- Hamburger öffnet ein **fullscreen Overlay** (`fixed inset-0 z-[60] bg-background`) statt des Dropdown-Popovers
- Overlay enthält: X-Close oben links, Logo oben mittig, Nav-Links vertikal zentriert mit großer Schrift, CTA-Button am Ende
- Smooth fade-in/slide Animation

## 4. Allgemeine Mobile-Optimierungen

**HeroSection:**
- Schriftgröße `text-4xl` → `text-3xl` auf kleinen Screens
- CTA-Buttons: `flex-col` statt `sm:flex-row` auf Mobile, volle Breite
- Dashboard-Mockup auf Mobile kleiner/simpler darstellen (ist bereits `grid-cols-1 lg:grid-cols-2`)

**PageHero:**
- `pt-36` → `pt-28` auf Mobile (weniger Top-Padding da Navbar kleiner)
- Schriftgröße etwas kleiner auf Mobile

**ServicesGrid:**
- Visuals (`hidden md:flex`) bleiben auf Mobile verborgen — OK
- Padding `p-8 md:p-10` → `p-6 md:p-10`

**Testimonials:**
- Grid `md:grid-cols-3` → bleibt `grid-cols-1` auf Mobile — OK, schon responsive

**Stats:**
- `grid-cols-2 md:grid-cols-4` — bereits responsive

**Footer:**
- `grid md:grid-cols-3` — bereits responsive, aber Spacing etwas reduzieren auf Mobile

**Team-Seite:**
- Grid `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` — OK
- Cards Padding `p-5` → `p-4` auf Mobile

**Kontakt-Seite:**
- Form + Info-Sidebar ist `lg:flex-row`, stacked auf Mobile — OK

## Dateien die geändert werden

1. **`src/components/landing/Navbar.tsx`** — Hauptänderungen:
   - Logo-Container mit fester Breite gegen Flicker
   - Mobile: komplettes Redesign (zentriertes Logo, Hamburger links, Fullscreen-Overlay)
   - Desktop: mehr Abstand zwischen Kontakt und CTA-Button

2. **`src/components/landing/HeroSection.tsx`** — Kleinere Mobile-Anpassungen (Schriftgrößen, Button-Layout)

3. **`src/components/landing/PageHero.tsx`** — Reduziertes Top-Padding auf Mobile

4. **`src/components/landing/ServicesGrid.tsx`** — Reduziertes Padding auf Mobile

5. **`src/components/landing/Footer.tsx`** — Feintuning Spacing Mobile

6. **`src/index.css`** — Ggf. Animation für Fullscreen-Menü (fade-in)

