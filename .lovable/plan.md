

# Footer Redesign — Light Theme, professioneller Look

## Änderungen an `src/components/landing/Footer.tsx`

### Layout
- **4-spaltig** statt 3-spaltig: Logo+Tagline | Unternehmen | Leistungen | Kontakt
- Neue "Leistungen"-Spalte (Beratung, Digitalisierung, Software, Automatisierung)
- Mehr Padding (`py-16 sm:py-20`)

### Visuelles Upgrade (helles Theme)
- **Subtiler blauer Gradient-Glow** oben (wie `bg-gradient-blue-subtle`) für visuellen Anker
- Stärkerer oberer Border oder `border-t-2 border-primary/20` statt `border-border/50`
- Logo etwas größer (`h-10`)
- Kontakt-Einträge mit Lucide-Icons (`Mail`, `MapPin`) für professionelleren Look
- Link-Hover: `text-primary` statt nur `text-foreground`
- Bottom-Bar mit dezenter Hintergrund-Abstufung (`bg-muted/30`)

### Technisch
- 1 Datei: `src/components/landing/Footer.tsx`
- Lucide-Icons importieren (`Mail`, `MapPin`)

