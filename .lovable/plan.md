

# Fixes: Datenschutzerklärung Titel + Cookie-Banner

## 1. Datenschutz Seitentitel (`src/pages/Datenschutz.tsx`)
Das Problem: `title="Datenschutz"` und `highlight="erklärung"` werden mit Leerzeichen getrennt dargestellt → "Datenschutz erklärung". 

Fix: `title="Datenschutz­erklärung"` ohne highlight, oder `title=""` mit `highlight="Datenschutzerklärung"` als ein Wort. Sauberste Lösung: `title="Datenschutzerklärung"` und `highlight` weglassen.

## 2. Cookie-Banner aufwerten (`src/components/CookieBanner.tsx`)
Aktuell zu klein und unauffällig. Verbesserungen:
- Breiter machen (`max-w-xl` statt `max-w-lg`)
- Stärkerer Schatten (`shadow-xl`)
- Etwas mehr Padding (`px-6 py-5`)
- Cookie-Icon (🍪) hinzufügen für visuellen Anker
- "Akzeptieren" Button größer/auffälliger mit `bg-gradient-blue` Stil
- "Ablehnen" Button als outline-Variante statt reiner Text-Link
- Etwas größerer Text

**2 Dateien betroffen.**

