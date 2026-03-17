

# Testimonials aktualisieren

## Änderungen in `src/components/landing/Testimonials.tsx`:

**1. Daten aktualisieren** — Neue echte Kunden mit passenden Rezensionen:

- **Peter Kurt Nowack**, CEO, Gamma Placetel GmbH — Text über Digitalisierung der Kommunikationsinfrastruktur/Prozessoptimierung
- **Lennard Neubauer**, CEO, yourdelivery GmbH — Text über Skalierung der Plattform/Logistikprozesse
- **Dr. Maximilian Bode**, CEO, Vorwerk Deutschland Stiftung & Co. KG — Text über digitale Transformation/Effizienzsteigerung

**2. Avatar entfernen** — Den `div` mit dem runden Initialen-Kreis (Zeilen 49-53) komplett entfernen.

**3. 5 Sterne hinzufügen** — `Star` Icon aus `lucide-react` importieren. Zwischen dem Quote-Text und dem Namen-Block 5 gefüllte Stern-Icons (`fill="currentColor"`) in `text-yellow-400` einfügen, jeweils `size={16}`.

**4. Layout anpassen** — Name und Rolle ohne Avatar, direkt untereinander (kein `flex items-center gap-3` mehr nötig, nur ein einfacher `div`-Block).

