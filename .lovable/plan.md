

# TrustBar → Tech-Stack Carousel

## Changes

**1. Copy uploaded SVG icons to `src/assets/tech/`**
Copy all 9 uploaded SVG files (react, nodejs, python, postgresql, php, html5, css3, nextjs, csharp) into `src/assets/tech/`.

**2. Update `src/components/landing/TrustBar.tsx`**
- Change heading text to "Modernste Tech-Stacks für maximale Performance und Sicherheit"
- Replace the `companies` array with a `techStack` array containing `{ name, icon }` pairs:
  - React, Node.js, Python, PostgreSQL, PHP, HTML5, CSS3, Next.js, C# / .NET
- Update `LogoItem` to render the actual SVG icon (imported as image) instead of the placeholder letter-in-box
- Each item shows the SVG icon (~32px) + technology name
- Keep the existing marquee animation and fade edges

