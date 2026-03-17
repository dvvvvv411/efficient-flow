

# Hero Section: 1/2 Split Layout

## Layout Change
Convert from centered single-column to a **two-column split layout**:
- **Left (50%)**: Badge, headline, subtext, CTA buttons — all left-aligned
- **Right (50%)**: The dashboard mockup graphic, slightly rotated/tilted for depth

On mobile (<md), stack vertically: text on top, mockup below.

Container: `max-w-7xl` with `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`. Text side gets `text-left` instead of `text-center`.

## Button Optimization
- **"Projekt starten"**: Larger (`h-14 px-10 text-base`), stronger shadow, subtle hover scale transform
- **"Leistungen entdecken"**: Match height, add a chevron/arrow icon, clearer hover state with border color change

Buttons left-aligned in a row, not centered.

## Adjustments
- Remove `min-h-screen` (let content dictate height), use generous padding (`py-24 lg:py-32 pt-40`)
- Dashboard mockup: remove `mt-16`, add slight `rotate-1` or perspective tilt for visual interest
- Keep gradient orbs and bottom fade as-is

