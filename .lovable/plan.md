

# Änderungen

## 1. Hero Section (HeroSection.tsx)
- **Headline ersetzen**: "Effizienz. Digitalisiert." → Neue, stärkere Headline, z.B. "Wir machen Unternehmen schneller." mit Gradient auf "schneller" — oder "Ihre Prozesse. Neu gedacht." — etwas das mehr Impact hat
- **Email-Input komplett entfernen**: Stattdessen zwei klare CTA-Buttons wie vorher ("Projekt starten" filled + "Leistungen entdecken" outline)
- **Mehr Abstand oben**: `pt-20` → `pt-32` damit mehr Platz zwischen Navbar und Badge ist

## 2. Problem Section – Scrolling Text entfernen (ProblemSolution.tsx)
- Die gesamte Marquee-Animation (Zeilen 17-29, der `animate-scroll-text` Block) entfernen
- Rest der Sektion (Heading + Pain-Point Tags) bleibt bestehen

## 3. Stats – Größere Zahlen (Stats.tsx)
- Werte erhöhen: 50→150+ Projekte, 30→80+ Kunden, 40→47% Effizienz, 3→5+ Jahre Erfahrung
- Realistisch aber beeindruckender

## 4. Services "Vier Säulen" – Visual Side verbessern (ServicesGrid.tsx)
- Die rechte Seite jeder Card (aktuell nur graue Placeholder-Balken) mit aussagekräftigeren Mock-UIs füllen:
  - Consulting: Mini-Flowchart/Prozessdiagramm
  - Digitalisierung: Before/After Vergleich
  - Software-Entwicklung: Code-Editor + Dashboard Preview
  - Prozessoptimierung: KPI-Dashboard mit Graphen
- Jedes Visual individuell und passend zum Service

