

# Stundenlohn in die Meta-Card einbauen

## Änderungen

1. **`src/data/karriereStellen.ts`**: Optionales Feld `stundenlohn?: string` zum Interface `Stelle` hinzufügen. Beim Eintrag `onlineprozess-tester` den Wert `"29 €"` setzen.

2. **`src/pages/KarriereDetail.tsx`**: Nach dem Arbeitszeit-Block einen analogen Block für `stelle.stundenlohn` einfügen — mit `Euro`-Icon (oder `Banknote` aus lucide-react), Label "Stundenlohn" und dem Wert. Gleiche Darstellung wie Standort/Arbeitsmodell/Arbeitszeit.

