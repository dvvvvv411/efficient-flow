

# Änderungen: "Efficient Flow" + Team-Umbenennungen

## 1. "EfficientFlow" → "Efficient Flow" (mit Leerzeichen)

Betrifft 11 Dateien, ca. 20 Textstellen (ohne Logo-`alt`-Attribute, die bleiben):

| Datei | Stellen |
|---|---|
| `index.html` | title, og:title |
| `src/pages/Index.tsx` | document.title |
| `src/pages/Leistungen.tsx` | document.title |
| `src/pages/Methodik.tsx` | document.title |
| `src/pages/Team.tsx` | subtitle, Jonas-Beschreibung |
| `src/pages/Karriere.tsx` | highlight-Text |
| `src/components/landing/Testimonials.tsx` | Zitat-Text |
| `src/components/landing/FAQ.tsx` | Frage-Text |
| `src/components/landing/Navbar.tsx` | 3× alt-Attribute |
| `src/components/landing/Footer.tsx` | alt-Attribut |
| `src/components/landing/HeroSection.tsx` | URL-Anzeige (app.efficientflow → ggf. beibehalten als Domain) |

Die HeroSection-URL (`app.efficientflow.solutions/...`) bleibt unverändert, da es sich um eine Domain-Darstellung handelt.

## 2. Team-Seite: Namensänderungen

In `src/pages/Team.tsx`:

- **"Dr. Thomas Weber"** → **"Ulrich Papst"** (Zeile 21), Rolle bleibt "Geschäftsführer / CEO"
- **"Daniel Krause"** → **"Thomas Papst"** (Zeile 45), Rolle ändern zu **"Geschäftsführer / CEO"**, Beschreibung anpassen (nicht mehr Backend Developer)

Neue Beschreibung für Thomas Papst z.B.: "Führt das Unternehmen gemeinsam mit seinem Vater und treibt Innovation und Wachstum voran."

## Zusammenfassung
- ~20 Textersetzungen "EfficientFlow" → "Efficient Flow" in 10 Dateien
- 2 Namens-/Rollenänderungen auf der Team-Seite

