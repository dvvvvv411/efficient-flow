

# Hero + TrustBar Fullscreen on Desktop

## Problem
The Hero section and TrustBar carousel don't fill the viewport on load. There's a large empty gap between the hero content and the TrustBar, pushing the carousel below the fold.

## Solution

**1. `HeroSection.tsx`** — Make the hero section fill the screen minus space for the TrustBar:
- Change from fixed padding (`pt-48 pb-16 lg:pb-24`) to `min-h-[calc(100vh-120px)]` on desktop (120px reserved for TrustBar)
- Use flexbox to vertically center the content within that space
- Keep existing padding for mobile

**2. `TrustBar.tsx`** — Reduce vertical padding slightly so it tucks neatly at the bottom of the viewport:
- Reduce `py-14` to `py-8` so the carousel sits closer to the hero

This ensures that on first load at desktop resolution, the Navbar + Hero + TrustBar together fill exactly one viewport height.

