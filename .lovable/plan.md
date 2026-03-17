

# Navbar: Fixed → Absolute

Eine einzige Änderung in `src/components/landing/Navbar.tsx`:

- Zeile 33: `fixed` durch `absolute` ersetzen.

**Alles andere bleibt exakt gleich** — kein Änderung am Hero-Hintergrund, kein Verschieben von Sektionen, keine Padding/Margin-Anpassungen. Der Hero-Gradient-Background bleibt identisch hinter dem Header wie jetzt. Die Navbar schwebt weiterhin über dem Hero-Hintergrund, scrollt aber mit der Seite nach oben weg statt fixiert zu bleiben.

