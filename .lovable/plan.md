

# Efficient Flow Solutions – Landing Page Plan (Light Theme)

## Design-Inspiration
Attendflow.io nutzt: Helles, sauberes Layout, zentrierte Hero-Section mit großer Headline, subtile Gradient-Hintergründe (lila/blau), floating UI-Mockups, Badge oben, abgerundete Navigation. Wir adaptieren diesen Stil mit modernem Blau statt Lila.

## Farbsystem (Hell, Seriös, Modern)
- **Background:** Reines Weiß `#FFFFFF` mit subtilen blauen Gradient-Akzenten
- **Primary Blue:** `#2563EB` (vivid, professionell)
- **Primary Dark:** `#1E40AF` (für Hover/Headings)
- **Accent Light:** `#DBEAFE` (subtile Hintergründe)
- **Gradient:** Blau → Cyan soft gradient für Hero-Hintergrund (ähnlich Attendflow's Lila-Gradient)
- **Text:** `#0F172A` (fast schwarz), `#475569` (Subtext)
- **Border:** `#E2E8F0`

## Typografie
- Inter (bereits verfügbar via Tailwind) – tight tracking für Headlines, normal für Body

## Technische Umsetzung
- **Keine neuen Dependencies** – alles mit Tailwind CSS Animationen + IntersectionObserver Custom Hook
- Custom `useScrollAnimation` Hook für Einblende-Animationen beim Scrollen
- Tailwind keyframes erweitern für fade-up, blur-in, stagger-Effekte
- Jede Sektion als eigene Komponente unter `src/components/landing/`

## Sektionen

### 1. Navbar (fixed, backdrop-blur)
Logo links ("EFS" mit Akzent), Links mittig (Leistungen, Über uns, Methodik, Kontakt – Smooth-Scroll), CTA-Button rechts ("Projekt starten") mit blauem Gradient. Wie Attendflow: abgerundete Pill-Form, leichter Shadow.

### 2. Hero Section
- Kleiner Badge oben: "Beratung & Software für 2026" (wie Attendflow's "Top Lovable App" Badge)
- Große zentrierte Headline: **"Effizienz. Digitalisiert."** mit dem zweiten Wort in Blau-Gradient
- Subtext: Kurze Beschreibung der Dienstleistungen
- Zwei CTA-Buttons: "Projekt starten" (filled) + "Leistungen entdecken" (outline)
- Hintergrund: Subtiler blauer Radial-Gradient (wie Attendflow's lila Gradient, aber in Blau)
- Darunter: Floating Dashboard-Mockup (als CSS/HTML gebaut, nicht als Bild) mit leichtem Shadow und Perspective-Transform
- Animation: Staggered fade-up für alle Elemente

### 3. Trust-Bar / Social Proof
- "Vertraut von führenden Unternehmen" + Placeholder-Logos (graue Silhouetten)
- Horizontal scrollend oder statisch in einer Reihe

### 4. Problem → Solution
- Zweispaltig: Links Icon + Problem-Text, Rechts Icon + Lösung
- 3 Reihen: Legacy-Systeme → Digitale Infrastruktur, Manuelle Prozesse → Automatisierung, Datensilos → Integrierte Plattformen
- Scroll-triggered fade-in

### 5. Leistungen (Bento Grid)
- 2×2 Grid mit Cards (wie Attendflow's Feature-Cards)
- **Consulting**, **Digitalisierung**, **Software-Entwicklung**, **Prozessoptimierung**
- Jede Card: Icon (Lucide), Titel, kurzer Text, subtiler blauer Border-Hover-Glow
- Glasmorphism-Effekt: leichter weißer Hintergrund mit Blur

### 6. Software Showcase
- Nachgebautes Mini-Dashboard als React-Komponente (Sidebar, Chart-Bereich, KPI-Cards)
- In einem Browser-Frame mit Schatten
- Text daneben: "Maßgeschneiderte Software-Lösungen"
- Scroll-triggered slide-in

### 7. Methodik (3 Steps)
- Horizontal: Analyse → Konzept → Umsetzung
- Verbunden durch eine animierte Linie
- Jeder Step mit Nummer, Icon, Titel, Beschreibung
- Staggered fade-in beim Scrollen

### 8. Kennzahlen
- 4 große Zahlen nebeneinander: Projekte, Kunden, Effizienzsteigerung %, Jahre Erfahrung
- Animierter Counter (zählt hoch beim Einblenden)
- Blauer Gradient-Hintergrund

### 9. CTA Section
- Fullwidth mit blauem Gradient-Hintergrund
- Headline: "Bereit für den nächsten Schritt?"
- Subtext + großer CTA-Button
- Subtile Glow-Animation auf dem Button

### 10. Footer
- Dreispaltig: Logo + Tagline, Navigation-Links, Kontaktinfo
- Clean, minimalistisch, subtiler Border oben

## Animationen (alle CSS/Tailwind + IntersectionObserver)
- **Fade-up + blur-dissolve:** Standard-Einblendung für alle Sektionen
- **Staggered delays:** Kinder-Elemente erscheinen nacheinander (80ms Versatz)
- **Counter animation:** requestAnimationFrame-basiert für Zahlen
- **Hover:** Cards scale leicht + shadow vergrößert sich
- **Gradient-Orbs:** Subtile CSS-animierte Kreise im Hero-Hintergrund
- **Dashboard-Mockup:** Leichte floating-Animation (translateY)

## Dateistruktur
```text
src/
├── components/landing/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── TrustBar.tsx
│   ├── ProblemSolution.tsx
│   ├── ServicesGrid.tsx
│   ├── SoftwareShowcase.tsx
│   ├── Methodology.tsx
│   ├── Stats.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── hooks/
│   └── useScrollAnimation.ts
├── pages/
│   └── Index.tsx  (composed from all sections)
├── index.css  (updated with new color variables + keyframes)
└── tailwind.config.ts  (extended with new animations)
```

## Zusammenfassung
12 Dateien: 10 Sektions-Komponenten, 1 Hook, 1 Page. Keine neuen Dependencies nötig. Alles hell, seriös, modern – inspiriert von Attendflow aber mit eigenem blauen Branding und deutschsprachigem Content.

