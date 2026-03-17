

# Fix TrustBar Marquee

## Problem
The `overflow-hidden` is on the outer `<section>`, but the marquee content is inside a `max-w-7xl` container. Items scroll out of view but remain visible because the constrained container doesn't clip them — the fade gradients mask the edges but the content wraps back into view.

## Fix — `TrustBar.tsx`

1. Add `overflow-hidden` to the inner `relative` div (the marquee wrapper inside `max-w-7xl`) so content is clipped at the container boundary
2. Triple the tech stack items (3x instead of 2x) to ensure seamless looping within the narrower container — with only 2x copies, the content isn't wide enough to fill the scroll before repeating

