

# Navbar & Footer Logo-Anpassungen

## Navbar (`src/components/landing/Navbar.tsx`)

**Logo aus der Navbar herauslösen**: Das Logo wird aus dem `<nav>`-Element herausgenommen und als eigenständiges, größeres Element links neben der Navbar positioniert. Die Struktur wird:

```text
<div className="fixed ...">
  <div className="max-w-5xl mx-auto flex items-center gap-4">
    <!-- Logo: freistehend, größer, hover:scale -->
    <Link to="/">
      <img className="h-10 hover:scale-105 transition-transform" />
    </Link>
    <!-- Nav: nur Links + CTA, flex-1 -->
    <nav className="flex-1 rounded-full border px-8 h-16 ...">
      <!-- Links -->
      <!-- CTA -->
      <!-- Mobile Toggle -->
    </nav>
  </div>
</div>
```

- Logo `h-10` (statt `h-7`), freistehend außerhalb der pill-Navbar
- `hover:scale-105 transition-transform duration-200` auf dem Logo-img

## Footer (`src/components/landing/Footer.tsx`)

- Logo von `h-6` auf `h-8` vergrößern
- `hover:scale-105 transition-transform duration-200` auf dem Logo-img hinzufügen

## Mobile

- Auf Mobile bleibt das Logo links neben dem Hamburger-Menü sichtbar, Navbar-Pill enthält nur die Navigation

