# Sprint 1 Backlog: "Das Spielfeld steht"

**Sprint Goal:** Lauffaehige App mit Spielfeld, Spielern und Drag-and-Drop
**Kapazitaet:** 26 Story Points

## Items

| PBI | Titel | SP | Status |
|-----|-------|---:|--------|
| PBI-01 | Projekt-Setup | 3 | To Do |
| PBI-02 | Spielfeld-Darstellung | 5 | To Do |
| PBI-03 | Spieler-Figuren | 5 | To Do |
| PBI-04 | Drag-and-Drop fuer Spieler | 8 | To Do |
| PBI-05 | Zustand State Management | 5 | To Do |

## Abhaengigkeiten

```
PBI-01 (Setup)
  └── PBI-02 (Spielfeld) + PBI-05 (Store)
        └── PBI-03 (Spieler)
              └── PBI-04 (Drag-and-Drop)
```

## Tasks (Aufteilung)

### PBI-01: Projekt-Setup (3 SP)
- [ ] Vite + React + TypeScript initialisieren
- [ ] TailwindCSS einrichten
- [ ] ESLint + Prettier konfigurieren
- [ ] Vitest einrichten
- [ ] Ordnerstruktur anlegen
- [ ] CI-Skripte in package.json definieren

### PBI-02: Spielfeld-Darstellung (5 SP)
- [ ] React Konva integrieren
- [ ] Spielfeld-Komponente mit Rasen-Hintergrund
- [ ] Linien zeichnen (Mittellinie, Strafraum, Torraum, Mittelkreis)
- [ ] Normalisiertes Koordinatensystem implementieren (0-100 → Pixel)
- [ ] Responsive Skalierung
- [ ] Unit-Tests fuer Koordinaten-Transformation

### PBI-03: Spieler-Figuren (5 SP)
- [ ] Player-Komponente (Kreis + Nummer)
- [ ] Team-Farben-Props
- [ ] Torwart-Variante
- [ ] 11 Spieler pro Team rendern
- [ ] Initiale Positionen definieren

### PBI-04: Drag-and-Drop (8 SP)
- [ ] Maus-Drag implementieren
- [ ] Touch-Drag implementieren
- [ ] Boundary-Check (Spielfeldrand)
- [ ] Visuelles Feedback (Schatten, Hervorhebung)
- [ ] Position-Update im Store
- [ ] Performance-Optimierung

### PBI-05: Zustand Store (5 SP)
- [ ] Store-Struktur definieren (Teams, Spieler, Positionen)
- [ ] Actions: movePlayer, setFormation, setTacticMode
- [ ] Selektoren fuer performantes Re-Rendering
- [ ] Unit-Tests fuer Store-Actions
