# Sprint 3 Backlog: "Lernen und Verstehen"

**Sprint Goal:** Lern-Modus, Vergleichsansicht, Verschieben und Teamfarben
**Kapazitaet:** 31 Story Points

## Items

| PBI | Titel | SP | Status |
|-----|-------|---:|--------|
| PBI-09 | Verschieben zum Ball | 8 | To Do |
| PBI-11 | Taktik-Vergleichsansicht | 5 | To Do |
| PBI-12 | Lern-Modus | 13 | To Do |
| PBI-14 | Team-Farben anpassen | 5 | To Do |

## Abhaengigkeiten

```
PBI-09 (Verschieben)   PBI-14 (Farben)
  └── PBI-11 (Vergleich)
        └── PBI-12 (Lern-Modus)
```

## Tasks (Aufteilung)

### PBI-09: Verschieben zum Ball (8 SP)
- [ ] Verschiebungs-Algorithmus (Team rueckt zur Ballseite)
- [ ] Kompaktheits-Berechnung
- [ ] Pfeil-/Linien-Visualisierung der Verschiebungsrichtung
- [ ] Animierte Spieler-Bewegung
- [ ] Integration mit Ball-Drag
- [ ] Erklaertext-Komponente
- [ ] Tests fuer Verschiebungslogik

### PBI-11: Taktik-Vergleichsansicht (5 SP)
- [ ] Split-Screen Layout (zwei Spielfelder)
- [ ] Taktik-Auswahl pro Seite
- [ ] Synchronisierung der Angreifer-Positionen
- [ ] Responsive Layout fuer Querformat
- [ ] Navigation zur Vergleichsansicht

### PBI-12: Lern-Modus (13 SP)
- [ ] Schritt-Datenstruktur definieren (JSON-Konfiguration)
- [ ] Lernschritte fuer Manndeckung (5+ Schritte)
- [ ] Lernschritte fuer Raumdeckung (5+ Schritte)
- [ ] Lernschritte fuer Verschieben (5+ Schritte)
- [ ] Schritt-Navigation (Weiter/Zurueck)
- [ ] Fortschrittsanzeige
- [ ] Spotlight/Hervorhebung der relevanten Elemente
- [ ] Begleitende Animationen
- [ ] Zusammenfassung am Ende
- [ ] Tests fuer Schritt-Navigation

### PBI-14: Team-Farben anpassen (5 SP)
- [ ] Farbauswahl-Komponente
- [ ] 8 vordefinierte Farbkombinationen
- [ ] Vereinsfarben-Presets (Bayern, Dortmund, etc.)
- [ ] Kontrastpruefung zwischen Teams
- [ ] Store-Integration
