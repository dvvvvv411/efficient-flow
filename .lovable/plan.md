

# Domain & E-Mail Update

## Änderungen

Ersetze überall `info@efficientflow.solutions` → `info@efficient-flow.solutions` und `efficientflow.solutions` → `efficient-flow.solutions`.

### Betroffene Dateien (14 Dateien):

**E-Mail & Domain-URLs:**
1. `src/components/landing/Footer.tsx` — mailto + Anzeige-Text
2. `src/pages/Impressum.tsx` — mailto, Anzeige-Text, Website-Link
3. `src/pages/Datenschutz.tsx` — mailto + Anzeige-Text
4. `src/pages/Kontakt.tsx` — value + href

**Nur Brandname "EfficientFlow" (alt-Texte, Titel, Fließtext) — bleibt unverändert**, da das der Firmenname ist, nicht die Domain. Oder sollen diese auch zu "Efficient-Flow" geändert werden?

**Vite Config:**
5. `vite.config.ts` — Domain als `allowedHosts` hinzufügen:
```ts
server: {
  host: "::",
  port: 8080,
  hmr: { overlay: false },
  allowedHosts: ["efficient-flow.solutions", "www.efficient-flow.solutions"],
},
```

**Hinweis:** Um die Domain `efficient-flow.solutions` tatsächlich mit dem Projekt zu verbinden, musst du in den Lovable Project Settings → Domains die Domain hinzufügen und DNS-Records (A-Record → `185.158.133.1`, TXT-Record) bei deinem Registrar setzen.

