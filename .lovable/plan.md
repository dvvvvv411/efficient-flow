

# KarriereDetail — 2-Spalten Layout wie Referenz

## Änderung — `src/pages/KarriereDetail.tsx`

Kompletter Umbau des Layouts nach dem Vorbild im Screenshot: **2-Spalten-Layout** (main content links, sticky Sidebar rechts).

### Linke Spalte (ca. 2/3 Breite)
- **"Über die Position"** — Card mit Beschreibungstext
- **"Deine Aufgaben"** — Card mit Checkmark-Icon-Liste
- **"Dein Profil"** (Was du mitbringst) — Card mit Checkmark-Icon-Liste
- **"Was wir bieten"** — Card mit Checkmark-Icon-Liste

Jede Sektion in einer eigenen Card (rounded-2xl, border, bg-card, p-8).

### Rechte Spalte (ca. 1/3 Breite, sticky)
- **"Interessiert?"** Card mit kurzer Beschreibung + "Jetzt bewerben" Button (gradient-blue, full-width)
- **Meta-Infos** Card darunter: Standort, Arbeitsmodell als Label-Value Paare (wie im Screenshot)
- **"Fragen zur Stelle?"** Card mit "Kontakt aufnehmen" Button → Link zu `/kontakt`

### Responsive
- Auf Mobile: Spalten stacken (Sidebar unter Content), Sidebar nicht sticky

### Beibehalten
- PageHero, Navbar, Footer, ScrollAnimation, Breadcrumb bleiben gleich

