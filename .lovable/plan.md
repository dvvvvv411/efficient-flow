

# Adressfelder zurück ins Bewerbungsformular

## Änderung: `src/pages/Bewerbung.tsx`

### State erweitern
- `strasse`, `plz`, `stadt` wieder zum `form`-State hinzufügen (default: `''`)
- Beim Reset nach Erfolg ebenfalls zurücksetzen

### Neue Eingabefelder (nach Kontaktdaten, vor Lebenslauf)
- **Straße + Hausnummer** — volle Breite, Pflichtfeld
- **PLZ + Stadt** — 2-spaltig (PLZ schmal, Stadt breit), beide Pflichtfelder

### Validierung
- Client-seitig: `strasse`, `plz`, `stadt` müssen ausgefüllt sein (wie andere Pflichtfelder)
- Werden **nicht** an die API gesendet — rein UI-seitig

**1 Datei, ~20 Zeilen Änderungen.**

