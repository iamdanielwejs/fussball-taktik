# Sprint 4 Backlog: "Polieren und Ausliefern"

**Sprint Goal:** Speichern, Sounds, Responsive, Popups, Export und Tutorial
**Kapazitaet:** 24 Story Points

## Items

| PBI | Titel | SP | Status |
|-----|-------|---:|--------|
| PBI-15 | Speichern/Laden | 5 | To Do |
| PBI-16 | Sound-Effekte | 3 | To Do |
| PBI-17 | Responsive Tablets | 5 | To Do |
| PBI-18 | Erklaer-Popups | 3 | To Do |
| PBI-19 | Export als Bild | 3 | To Do |
| PBI-20 | Willkommens-Tutorial | 5 | To Do |

## Abhaengigkeiten

```
PBI-15 (Speichern)     PBI-16 (Sounds)     PBI-17 (Responsive)
PBI-18 (Popups)        PBI-19 (Export)
  └── alle unabhaengig voneinander ──┐
                                     └── PBI-20 (Tutorial) als letztes
```

## Tasks (Aufteilung)

### PBI-15: Speichern/Laden (5 SP)
- [ ] LocalStorage-Service implementieren
- [ ] Speichern-Dialog mit Namenseingabe
- [ ] Liste gespeicherter Aufstellungen
- [ ] Laden-Funktion (Positionen, Formation, Taktik)
- [ ] Loeschen einzelner Eintraege
- [ ] Limit auf 10 Aufstellungen

### PBI-16: Sound-Effekte (3 SP)
- [ ] Sound-Assets beschaffen/erstellen
- [ ] Audio-Service mit Play/Mute
- [ ] Sound-Trigger bei Drag-Start, Drag-End, Formationswechsel
- [ ] Mute-Toggle im UI
- [ ] Browser-Autoplay-Policy beachten

### PBI-17: Responsive Tablets (5 SP)
- [ ] Breakpoint-System (768px, 1024px)
- [ ] Spielfeld-Skalierung fuer Tablet-Viewports
- [ ] Touch-Ziele pruefen (min. 44x44px)
- [ ] Menue-Anpassung fuer Hoch-/Querformat
- [ ] Cross-Browser Testing (Safari iOS, Chrome Android)

### PBI-18: Erklaer-Popups (3 SP)
- [ ] Popup-Komponente (Tooltip-Stil)
- [ ] Glossar mit mindestens 10 Fachbegriffen
- [ ] Klickbare Begriffe im UI markieren
- [ ] Schliessen bei Klick ausserhalb

### PBI-19: Export als Bild (3 SP)
- [ ] Konva Stage als PNG exportieren (toDataURL)
- [ ] Download-Trigger im Browser
- [ ] Dateiname mit Datum und Formation
- [ ] Export-Button im UI

### PBI-20: Willkommens-Tutorial (5 SP)
- [ ] Tutorial-Schritt-Datenstruktur
- [ ] 5 Tutorial-Schritte definieren
- [ ] Spotlight-Overlay-Komponente
- [ ] Schritt-Navigation
- [ ] Skip-Button
- [ ] LocalStorage-Flag fuer "bereits gesehen"
- [ ] Menue-Eintrag zum erneuten Starten
