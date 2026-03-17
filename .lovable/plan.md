

# Fix: "Projekt starten" Button einzeilig

Der CTA-Button bricht um weil der Text nicht genug Platz hat. Fix: `whitespace-nowrap` zur Button-Klasse hinzufügen (Zeile 73).

**Datei:** `src/components/landing/Navbar.tsx`, Zeile 73
- `whitespace-nowrap` zur className hinzufügen

