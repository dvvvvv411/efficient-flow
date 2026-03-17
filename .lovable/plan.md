

# Bewerbungsformular: Backend-Anbindung + Anstellungsart

## Änderungen an `src/pages/Bewerbung.tsx`

### 1. Neues Dropdown "Anstellungsart"
- Neues Select-Feld mit Optionen: Minijob, Teilzeit, Vollzeit
- Werte: `minijob`, `teilzeit`, `vollzeit`
- Pflichtfeld, platziert nach dem Stelle-Dropdown (Stelle bleibt als UI-Info, wird aber nicht mitgesendet)

### 2. Adressfelder entfernen
Die Edge Function erwartet nur: `first_name`, `last_name`, `email`, `phone`, `employment_type`, `branding_id`, optional `resume`. Die Adressfelder (Straße, PLZ, Stadt) werden entfernt, da sie nicht im API-Schema sind.

**Oder sollen die Adressfelder bleiben als UI-only?** Da die API sie nicht akzeptiert, entferne ich sie. Falls gewünscht, können sie beibehalten werden.

### 3. Submit-Logik
- `FormData` aufbauen mit Mapping: vorname→`first_name`, nachname→`last_name`, email→`email`, telefon→`phone`, anstellungsart→`employment_type`
- `branding_id` fest: `e4f832ef-4f72-4fa3-983e-07b678a698a1`
- Optional: `resume` (Lebenslauf-Datei)
- `stelle` wird NICHT mitgesendet
- POST an `https://luorlnagxpsibarcygjm.supabase.co/functions/v1/submit-application`
- Loading-State während des Sendens (Button disabled + Spinner)
- Erfolg: Toast-Nachricht "Bewerbung erfolgreich gesendet!" + Formular zurücksetzen
- Fehler: Toast-Fehlermeldung
- Client-seitige Validierung: Pflichtfelder prüfen vor Absenden

### 4. State-Anpassung
- `strasse`, `plz`, `stadt` entfernen
- `anstellungsart` hinzufügen (default: `''`)
- `submitting` State hinzufügen

**1 Datei betroffen.**

