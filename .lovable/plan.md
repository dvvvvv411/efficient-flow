

# Arbeitszeit-Info in Sidebar einfügen

In `src/pages/KarriereDetail.tsx` wird in der Meta-Card (rechte Sidebar) ein drittes Info-Element hinzugefügt — unterhalb von Standort und Arbeitsmodell:

- Icon: `Clock` (bereits importiert, aber ich verwende ein anderes — `Timer` oder wiederverwendet `Clock`)
- Label: "Arbeitszeit"
- Wert: aus einem neuen optionalen Feld `arbeitszeit` im `Stelle`-Interface

**Änderungen:**

1. **`src/data/karriereStellen.ts`**: Neues optionales Feld `arbeitszeit?: string` im Interface + Wert `"Flexibel (ca. 5–30 Std./Woche)"` bei der Onlineprozess-Tester-Stelle setzen.

2. **`src/pages/KarriereDetail.tsx`**: In der Meta-Card nach dem Arbeitsmodell-Block ein drittes Element mit `Clock`-Icon (oder `Briefcase`) für Arbeitszeit rendern — nur wenn `stelle.arbeitszeit` vorhanden ist.

