

# Navbar Vergrößerung + Neue Headline

## 1. Navbar (`Navbar.tsx`)

Die Navbar ist aktuell `max-w-4xl h-14` mit kleinen Texten (`text-[13px]`, `text-sm`). Im Vergleich zur großen Hero Section wirkt sie zu zierlich.

**Änderungen:**
- `max-w-4xl` → `max-w-5xl` (breiter)
- `h-14` → `h-16` (höher)
- `px-6` → `px-8`
- Logo-Icon: `w-7 h-7` → `w-8 h-8`, Logo-Text: `text-sm` → `text-base`
- Nav-Links: `text-[13px]` → `text-sm`, `gap-7` → `gap-8`
- CTA-Button: `px-4 py-2 text-[13px]` → `px-5 py-2.5 text-sm`, `gap