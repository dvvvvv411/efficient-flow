

# Interactive Dashboard Mockup

Make the hero dashboard mockup interactive with real sidebar navigation and content that changes on click.

## Approach

Convert `HeroSection.tsx` to use React state for the active sidebar tab. The sidebar gets 5 named menu items with icons (Dashboard, Prozesse, Analytics, Projekte, Einstellungen). Clicking a sidebar item changes `activeTab` state, which swaps the main content area.

## Sidebar
Replace placeholder gray bars with real text labels + small icons:
- **Dashboard** (default/active) — highlighted with `bg-primary/10`
- **Prozesse** — process list view
- **Analytics** — chart/graph view  
- **Projekte** — project cards view
- **Einstellungen** — settings form view

Each item is a clickable `button` with cursor-pointer.

## Content per Tab

| Tab | KPI Cards | Main Area |
|---|---|---|
| Dashboard | Effizienz +42%, Prozesse 128, Einsparung €340k | Bar chart (current) |
| Prozesse | Aktiv 24, Abgeschlossen 89, Ausstehend 15 | List of 4 process rows with status badges (Aktiv/Done) |
| Analytics | Besucher 12.4k, Conversion 3.2%, Umsatz €1.2M | Line chart (SVG polyline) |
| Projekte | Laufend 8, Geplant 5, Fertig 34 | 2x2 grid of mini project cards with progress bars |
| Einstellungen | — (no KPI cards, full width) | Settings form mockup with toggle switches and input fields |

## Technical Details
- Add `useState<string>('dashboard')` to HeroSection
- Sidebar items array with `id`, `label`, `icon` (from lucide)
- Content rendered conditionally based on active tab
- Smooth transition: `transition-all duration-200` on content area
- Keep the float animation, browser bar, glow — unchanged
- Everything stays purely visual (no real functionality), just looks interactive

## File Changes
- `src/components/landing/HeroSection.tsx` — add state, interactive sidebar, 5 content views

