

# Karriere-Bereich: Übersicht, Detailseiten & Bewerbungsformular

## Neue Dateien

### 1. `src/pages/Karriere.tsx` — Stellenübersicht
- PageHero mit Titel "Karriere bei EfficientFlow"
- 5 Stellenanzeigen als Cards im bestehenden Stil (border, rounded-2xl, bg-white)
- Stellen passend zum Unternehmen:
  1. **Senior Software Engineer** — Full-Stack, React/Node
  2. **Prozessberater:in** — Consulting, Analyse
  3. **UX/UI Designer:in** — Design, Prototyping
  4. **DevOps Engineer** — CI/CD, Cloud
  5. **Werkstudent:in Digitalisierung** — Unterstützung im Team
- Jede Card zeigt: Titel, Standort (München), Arbeitsmodell (Remote/Hybrid/Vor Ort), kurze Beschreibung, "Details ansehen"-Link zu `/karriere/:slug`

### 2. `src/pages/KarriereDetail.tsx` — Stellendetails
- Route: `/karriere/:slug`
- Liest den Slug aus der URL, zeigt passende Stelle aus einer gemeinsamen Daten-Datei
- Inhalte: Titel, Beschreibung, Aufgaben-Liste, Voraussetzungen-Liste, Benefits-Liste
- Button "Jetzt bewerben" → Link zu `/karriere/bewerbung?stelle={Stellentitel}`

### 3. `src/pages/Bewerbung.tsx` — Universelles Bewerbungsformular
- Route: `/karriere/bewerbung`
- Liest `?stelle=...` Query-Parameter aus und befüllt ein Select/Input-Feld vor
- Felder: Vorname*, Nachname*, E-Mail*, Telefon*, Straße & Hausnummer*, PLZ*, Stadt*, Stelle (vorausgefüllt), Lebenslauf-Upload (file input, nur UI)
- Submit tut nichts (`e.preventDefault()`)
- Gleicher Stil wie Kontakt-Formular (rounded-2xl Card, gradient Button)

### 4. `src/data/karriereStellen.ts` — Shared Stellendaten
- Array mit 5 Stellen-Objekten (slug, titel, standort, modell, kurzbeschreibung, beschreibung, aufgaben[], voraussetzungen[], benefits[])
- Wird von Karriere.tsx, KarriereDetail.tsx und Bewerbung.tsx importiert

## Bestehende Dateien

### `src/App.tsx`
- 3 neue Routes: `/karriere`, `/karriere/bewerbung`, `/karriere/:slug`
- Bewerbung-Route VOR der :slug-Route (damit sie nicht als Slug gematcht wird)

### `src/components/landing/Navbar.tsx`
- "Karriere" Link in navLinks Array hinzufügen

### `src/components/landing/Footer.tsx`
- "Karriere" in die Navigation-Links aufnehmen

