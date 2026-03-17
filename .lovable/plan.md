
Ziel: Das Logo soll nach dem ersten Laden beim Seitenwechsel sofort sichtbar bleiben (kein Nachladen/Flicker), und die Navbar darf sich dabei nicht mehr verschieben.

1) Root-Cause beheben (Header wird aktuell pro Seite neu gemountet)
- Aktuell steckt `<Navbar />` in jeder einzelnen Page-Komponente.
- Beim Route-Wechsel wird die komplette Page inkl. Navbar neu aufgebaut; dadurch wird auch das Logo-Element neu gerendert.
- Lösung: Navbar in ein zentrales Layout verschieben, das über alle Hauptseiten persistent bleibt.

2) Globales Layout mit persistentem Header einführen
- Neue Layout-Komponente mit `<Navbar />` + `<Outlet />`.
- In `App.tsx` die Hauptseiten als verschachtelte Routes unter dieses Layout legen.
- `NotFound` separat lassen (ohne Navbar), damit 404 sauber bleibt.
- Effekt: Nur der Seiteninhalt wechselt, Header bleibt im DOM und das Logo bleibt direkt sichtbar.

3) Doppelte Navbar-Instanzen entfernen
- In allen Content-Seiten `Navbar`-Import und `<Navbar />` entfernen:
  - `Index.tsx`, `Leistungen.tsx`, `Software.tsx`, `Methodik.tsx`, `Team.tsx`,
    `Kontakt.tsx`, `Karriere.tsx`, `KarriereDetail.tsx`, `Bewerbung.tsx`
- Dadurch gibt es exakt eine einzige Navbar-Instanz.

4) Logo-Rendering in Navbar zusätzlich absichern
- Logo auf „above the fold“ optimieren:
  - `loading="eager"`, `fetchPriority="high"` am `<img>`
- Platz stabil halten ohne Verzerrung:
  - Container mit stabiler Höhe + sinnvollem `min-width` (statt harter Verzerrungsbreite)
  - Bild mit `h-full w-auto object-contain`
- Ergebnis: Kein Layout-Sprung und kein gestauchtes Logo.

5) Validierung (nach Umsetzung)
- Desktop: mehrfach zwischen `/software`, `/leistungen`, `/methodik`, `/kontakt` wechseln → Logo bleibt sichtbar ohne Flackern.
- Mobile: Menü öffnen/schließen + Seitenwechsel → Fullscreen-Sidebar weiterhin korrekt.
- CLS-Check visuell: Navbar-Position bleibt beim Wechsel konstant.

Technische Details
- Neue Datei: `src/components/layout/SiteLayout.tsx` (oder ähnlich)
- Änderungen:
  - `src/App.tsx` (Nested Routes mit persistentem Layout)
  - `src/components/landing/Navbar.tsx` (Logo-Priorität + stabile Maße ohne Verzerrung)
  - 9 Page-Dateien (Navbar entfernen)
- Kein Backend, keine API-Änderungen; rein Frontend-Routing + Rendering-Verhalten.
