

# Navbar: Logo-Fix & nicht mehr sticky

## Änderungen in `src/components/landing/Navbar.tsx`

1. **Logo verschwommen fixen**: Das `backdrop-blur` der Navbar-Pill beeinflusst das dahinterliegende Logo nicht direkt, aber die `hover:scale-105` Transformation auf dem Bild kann Rendering-Unschärfe verursachen. Fix: `will-change-transform` hinzufügen und sicherstellen, dass das Bild mit `image-rendering: auto` scharf bleibt. Außerdem das Logo-img explizit mit `w-auto` versehen, damit der Browser die native Auflösung nutzt.

2. **Header nicht mehr sticky**: `fixed` auf Zeile 30 durch `relative` ersetzen (oder einfach entfernen). Das `top-0 left-0 right-0 z-50` kann ebenfalls entfernt werden. Der Scroll-Listener und `scrolled`-State können entfernt werden, da sie ohne sticky keinen Sinn mehr haben — die Navbar bekommt dann ein festes Styling.

### Konkrete Änderungen:

- **Zeile 15/19-23**: `scrolled`-State und Scroll-Listener entfernen
- **Zeile 30**: `fixed top-0 left-0 right-0 z-50` → `relative z-50` 
- **Zeile 34**: Logo `h-10` → `h-10 w-auto` hinzufügen
- **Zeile 39-43**: Scroll-abhängiges Styling vereinfachen zu einem festen Style: `bg-white/60 backdrop-blur-md border-border/40 shadow-sm`

