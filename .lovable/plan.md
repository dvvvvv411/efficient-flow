

# Navbar: Logo-Fix & nicht-sticky machen

## Änderungen in `src/components/landing/Navbar.tsx`

1. **Logo verschwommen → Fix**: Das PNG wird bei `h-10` (~40px) hochskaliert und durch `backdrop-blur` der Navbar unscharf. Fix: Explizite Bildschärfe mit `image-rendering: auto` und größere native Größe nutzen indem wir `h-10` beibehalten aber `w-auto` sicherstellen. Zusätzlich das Logo **nicht** innerhalb eines `backdrop-blur`-Containers rendern — es ist bereits freistehend, also muss nur sichergestellt werden dass kein Blur vom Parent auf das Logo wirkt. Evtl. das Logo mit `will