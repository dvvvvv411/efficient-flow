

# Neue Unterseite "Unser Team" erstellen

## Überblick

Neue Seite `/team` mit Teamvorstellung, KI-generierte Porträtbilder (via Nano banana 2 / gemini-3.1-flash-image-preview), Verlinkung in der Navbar.

## Team-Mitglieder (10 Personen)

Echte Positionen:
1. **Sarah Meier** — HR Managerin (weiblich)
2. **Michael Fischer** — Projektleiter (männlich)
3. **Jonas Hartmann** — Recruiter (männlich)

Generierte Rollen:
4. **Dr. Thomas Weber** — Geschäftsführer / CEO
5. **Laura Schneider** — Head of Software Engineering
6. **Daniel Krause** — Senior Backend Developer
7. **Anna Hoffmann** — UX/UI Designerin
8. **Markus Bauer** — Data Analyst
9. **Julia Wagner** — Business Consultant
10. **Sebastian Richter** — DevOps Engineer

## Bildgenerierung

Für jedes Teammitglied ein realistisches Business-Porträtfoto über die Nano banana 2 API generieren. Prompt-Stil: "Professional corporate headshot photo of a [age] year old [gender] [German] business professional, wearing business attire, neutral studio background, natural lighting, high quality photograph" — so dass die Bilder nicht nach KI aussehen und über Google Bildersuche nicht auffindbar sind.

Die generierten Base64-Bilder werden direkt als statische Assets (`src/assets/team/`) gespeichert.

## Dateien

**1. Bilder generieren** — 10 Porträtbilder via API erstellen und als PNG in `src/assets/team/` speichern.

**2. `src/pages/Team.tsx`** — Neue Seite nach bestehendem Muster:
- Navbar + PageHero ("Unser" / "Team") + Footer + CTASection
- Grid-Layout (3-4 Spalten) mit Karten pro Teammitglied
- Jede Karte: Porträtbild (rund oder abgerundet), Name, Position, kurzer Einzeiler
- Scroll-Animationen wie auf den anderen Seiten
- Hover-Effekte passend zum bestehenden Design (border-primary/20, shadow)

**3. `src/App.tsx`** — Neue Route `/team` hinzufügen.

**4. `src/components/landing/Navbar.tsx`** — "Team" in `navLinks` einfügen (zwischen Methodik und Karriere).

## Technische Details

- Bilder: ~10 API-Calls an Nano banana 2, Base64 → PNG-Dateien in `src/assets/team/`
- Seitenstruktur identisch zu Leistungen/Karriere (Navbar, PageHero, Content, CTA, Footer)
- Responsive: 1 Spalte mobil, 2 Spalten Tablet, 3-4 Spalten Desktop

