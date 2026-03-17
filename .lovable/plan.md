

# Fix Hero Layout & TrustBar Width

## Problems
1. TrustBar is full-width but should match the hero content width (`max-w-7xl`)
2. Too much space between navbar and hero content — content not vertically centered
3. Hero section needs better vertical balance

## Changes

### 1. `TrustBar.tsx`
- Wrap the carousel content in a `max-w-7xl mx-auto px-6` container to match hero content width
- Keep the section full-width for the border, but constrain inner content

### 2. `HeroSection.tsx` (line 146)
- Reduce `pt-48` to `pt-32` for mobile
- Change `lg:min-h-[calc(100vh-120px)]` to `lg:min-h-[calc(100vh-140px)]` 
- Add `lg:pt-0` so on desktop the flexbox `justify-center` handles vertical centering naturally (no fixed top padding fighting against it)
- The dashboard mockup height stays as-is — the centering fix alone should resolve the gap

