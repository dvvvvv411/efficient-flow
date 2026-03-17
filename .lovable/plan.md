

# Impressum, Datenschutz & Daten-Update

## Neue Seiten

### 1. Impressum (`src/pages/Impressum.tsx`)
Seite mit den echten Firmendaten im bestehenden PageHero + Content-Layout:
- Efficient Flow Solutions GmbH
- Marc-Chagall-Str. 142, 40477 Düsseldorf
- Amtsgericht Düsseldorf, HRB 101174
- USt-IdNr.: DE321399565
- Geschäftsführer: Tobias Papst
- E-Mail: info@efficientflow.solutions
- Web: efficientflow.solutions

### 2. Datenschutz (`src/pages/Datenschutz.tsx`)
Standard-DSGVO-Datenschutzerklärung mit Abschnitten: Verantwortlicher, Erhebung personenbezogener Daten, Kontaktformular, Cookies, Hosting, Rechte der Betroffenen, etc. Mit echten Firmendaten.

### 3. Routen in `src/App.tsx`
- `/impressum` → Impressum
- `/datenschutz` → Datenschutz

## Daten-Updates (Mock → Echt)

### Footer (`src/components/landing/Footer.tsx`)
- `info@efficientflow.de` → `info@efficientflow.solutions`
- LinkedIn + GitHub Icons/Links komplett entfernen
- "Efficient Flow Solutions." → "Efficient Flow Solutions GmbH"
- Impressum/Datenschutz Links: `href="#"` → `<Link to="/impressum">` / `<Link to="/datenschutz">`
- Adresse: "Deutschland" → "Düsseldorf, Deutschland"

### Kontaktseite (`src/pages/Kontakt.tsx`)
- Telefon-Eintrag entfernen (keine echte Nummer vorhanden)
- E-Mail: `info@efficientflow.de` → `info@efficientflow.solutions`
- Adresse: `Musterstraße 42, 80331 München` → `Marc-Chagall-Str. 142, 40477 Düsseldorf`

### HeroSection (`src/components/landing/HeroSection.tsx`)
- `app.efficientflow.de` → `app.efficientflow.solutions`

### index.html
- OG-URL und author auf `efficientflow.solutions` aktualisieren

**7 Dateien betroffen, 2 neue Seiten.**

