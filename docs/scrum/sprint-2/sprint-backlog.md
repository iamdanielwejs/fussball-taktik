# Sprint 2 Backlog: "Taktik erwacht"

**Sprint Goal:** Formationen, Manndeckung, Raumdeckung und Navigation
**Kapazitaet:** 32 Story Points

## Items

| PBI | Titel | SP | Status |
|-----|-------|---:|--------|
| PBI-06 | Formationen-Auswahl | 8 | To Do |
| PBI-07 | Manndeckung-Visualisierung | 8 | To Do |
| PBI-08 | Raumdeckung-Visualisierung | 8 | To Do |
| PBI-10 | Navigation/Hauptmenue | 5 | To Do |
| PBI-13 | Animierter Ball | 3 | To Do |

## Abhaengigkeiten

```
PBI-10 (Navigation)     PBI-13 (Ball)
  └── PBI-06 (Formationen)
        ├── PBI-07 (Manndeckung)
        └── PBI-08 (Raumdeckung)
```

## Tasks (Aufteilung)

### PBI-06: Formationen-Auswahl (8 SP)
- [ ] Formationen-Datenkonfiguration (4-4-2, 4-3-3, 3-5-2)
- [ ] Formations-Auswahl UI (Buttons mit Vorschau)
- [ ] Animations-System fuer Spieler-Bewegung
- [ ] Easing-Funktionen (500-800ms)
- [ ] Separate Auswahl pro Team
- [ ] Tests fuer Formationsdaten

### PBI-07: Manndeckung (8 SP)
- [ ] Zuordnungsalgorithmus (naechster Gegenspieler)
- [ ] Verbindungslinien-Rendering (Konva Lines)
- [ ] Follow-Logik bei Drag eines Angreifers
- [ ] Animierte Verteidiger-Bewegung
- [ ] Erklaertext-Komponente
- [ ] Tests fuer Zuordnungslogik

### PBI-08: Raumdeckung (8 SP)
- [ ] Zonen-Definition (Daten-Konfiguration)
- [ ] Halbtransparente Zonen-Visualisierung
- [ ] Zonen-Verteidiger-Zuordnung
- [ ] Verteidiger-Verhalten (Zone nicht verlassen)
- [ ] Erklaertext-Komponente
- [ ] Tests fuer Zonen-Logik

### PBI-10: Navigation/Hauptmenue (5 SP)
- [ ] React Router Setup
- [ ] Hauptmenue-Layout mit grossen Buttons
- [ ] Routing zu Taktik-Ansichten
- [ ] Zurueck-Button
- [ ] Kindgerechte Icons

### PBI-13: Animierter Ball (3 SP)
- [ ] Ball-Konva-Komponente (Fussball-Optik)
- [ ] Ball Drag-and-Drop
- [ ] Ball-Position im Store
- [ ] Boundary-Check
