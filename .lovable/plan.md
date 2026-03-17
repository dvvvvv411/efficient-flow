

# Mobile Header: Logo raus aus der Pille

**Aktuell:** Logo + Hamburger sind zusammen in einer Pille (Zeilen 82-103).

**Änderung:** Die mobile Header-Struktur aufteilen:
- **Logo** separat, zentriert, transparent auf dem Hintergrund (außerhalb der Pille)
- **Hamburger-Icon** bekommt eine eigene kleine Pille (rund, links)

**Datei:** `src/components/landing/Navbar.tsx`, Zeilen 82-103

Neue Struktur:
```
<div className="md:hidden flex-1 flex items-center justify-between">
  {/* Hamburger in eigener kleiner Pille */}
  <button className="p-2.5 rounded-full border bg-background/60 backdrop-blur-md ...">
    <Menu />
  </button>

  {/* Logo zentriert, transparent, kein Container */}
  <Link to="/" className="absolute left-1/2 -translate-x-1/2">
    <img src={logo} className="h-8" />
  </Link>

  {/* Spacer */}
  <div className="w-[42px]" />
</div>
```

Die Pille bleibt nur um den Hamburger-Button. Das Logo schwebt frei und transparent über dem Seitenhintergrund.

