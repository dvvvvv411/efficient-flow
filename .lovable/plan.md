

# Neue Unterseiten + Kontaktseite

## Übersicht

Erstelle 4 neue Unterseiten passend zu den Landingpage-Sektionen plus eine Kontaktseite. Alle im bestehenden Design-System (Light Mode, Blau-Gradient, Inter Font, gleiche Komponenten-Patterns).

## Neue Seiten

### 1. `/leistungen` — Leistungen-Detailseite
- Hero-Banner mit Titel + Beschreibung
- Die 4 Services (Consulting, Digitalisierung, Software-Entwicklung, Prozessoptimierung) als ausführliche Sektionen mit mehr Text, erweiterten Feature-Listen und den bestehenden Visuals
- CTA-Sektion am Ende

### 2. `/software` — Software-Detailseite
- Hero-Banner
- Detaillierte Beschreibung der Software-Entwicklungsleistungen
- Tech-Stack Übersicht (nutzt bestehende SVG-Assets)
- Beispiel-Projekte/Use-Cases (Platzhalter)
- CTA am Ende

### 3. `/methodik` — Methodik-Detailseite
- Hero-Banner
- Die 3 Schritte (Analyse, Konzept, Umsetzung) mit deutlich mehr Details pro Schritt
- Vorteile/Prinzipien der Arbeitsweise
- CTA am Ende

### 4. `/kontakt` — Kontaktseite
- Hero-Banner
- Kontaktformular (Name, E-Mail, Telefon, Betreff, Nachricht) — ohne Backend-Funktion
- Platzhalter-Kontaktdaten:
  - Telefon: +49 (0) 123 456 789
  - E-Mail: info@efficientflow.de
  - Adresse: Musterstraße 42, 80331 München
- Karte-Platzhalter oder Standort-Info
- Öffnungszeiten (Platzhalter)

## Shared Components

### `PageHero.tsx` — Wiederverwendbarer Seiten-Hero
- Titel, Untertitel, optionaler Breadcrumb
- Gleicher Gradient-Hintergrund wie Landing-Hero (Orbs)
- Kompakter als Landing-Hero (kein Dashboard-Mockup)

## Routing & Navigation

### `App.tsx`
- Neue Routes: `/leistungen`, `/software`, `/methodik`, `/kontakt`

### `Navbar.tsx`
- Links von `#leistungen` etc. zu `/leistungen` etc. ändern
- `Link` aus react-router-dom verwenden statt Anchor-Tags
- Logo verlinkt auf `/`

### `Footer.tsx`
- Navigation-Links ebenfalls auf die neuen Routes aktualisieren

## Technische Details

- Alle Seiten nutzen `useScrollAnimation` für Scroll-Animationen
- Kontaktformular mit lokalem State (`useState`), kein Submit-Handler
- Bestehende UI-Komponenten (Input, Textarea, Button, Card) werden wiederverwendet
- ScrollToTop-Verhalten beim Seitenwechsel (useEffect mit window.scrollTo)

