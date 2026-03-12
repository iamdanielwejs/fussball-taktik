# Technische Architektur

## Tech Stack

| Technologie | Zweck | Version |
|-------------|-------|---------|
| React | UI-Framework | 19.x |
| TypeScript | Typsicherheit | 5.x |
| Vite | Build Tool & Dev Server | 6.x |
| React Konva | 2D Canvas Rendering (Spielfeld) | 18.x |
| TailwindCSS | Utility-first CSS | 4.x |
| Zustand | State Management | 5.x |
| React Router | Client-side Routing | 7.x |
| Vitest | Unit Testing | 3.x |
| ESLint | Linting | 9.x |
| Prettier | Code Formatting | 3.x |

## Ordnerstruktur

```
src/
├── main.tsx                    # Entry Point
├── App.tsx                     # Root-Komponente mit Router
├── index.css                   # Tailwind Imports
│
├── components/                 # React-Komponenten
│   ├── field/                  # Spielfeld-Komponenten
│   │   ├── Field.tsx           # Konva Stage & Layer Setup
│   │   ├── Pitch.tsx           # Spielfeld-Linien & Markierungen
│   │   ├── Player.tsx          # Einzelner Spieler (Konva Circle + Text)
│   │   ├── Ball.tsx            # Fussball-Objekt
│   │   └── ZoneOverlay.tsx     # Raumdeckungs-Zonen
│   │
│   ├── tactics/                # Taktik-Visualisierungen
│   │   ├── ManMarkingLines.tsx # Manndeckungs-Verbindungslinien
│   │   ├── ZoneDefense.tsx     # Raumdeckungs-Darstellung
│   │   ├── Shifting.tsx        # Verschieben-zum-Ball-Visualisierung
│   │   └── CompareView.tsx     # Split-Screen Vergleich
│   │
│   ├── ui/                     # Allgemeine UI-Komponenten
│   │   ├── Button.tsx          # Kindgerechter Button
│   │   ├── FormationPicker.tsx # Formations-Auswahl
│   │   ├── ColorPicker.tsx     # Team-Farbauswahl
│   │   ├── Popup.tsx           # Erklaer-Popup
│   │   ├── Tutorial.tsx        # Willkommens-Tutorial
│   │   └── ProgressBar.tsx     # Fortschrittsanzeige
│   │
│   └── learning/               # Lern-Modus
│       ├── LessonView.tsx      # Schritt-fuer-Schritt Ansicht
│       ├── StepNavigation.tsx  # Weiter/Zurueck Buttons
│       └── StepContent.tsx     # Einzelner Lernschritt
│
├── store/                      # Zustand State Management
│   ├── useGameStore.ts         # Haupt-Store (Spieler, Ball, Taktik)
│   ├── useUIStore.ts           # UI-State (Navigation, Modals)
│   └── useLearningStore.ts     # Lern-Modus State
│
├── engine/                     # Taktik-Berechnungen (reine Logik)
│   ├── formations.ts           # Formationsdaten & Positionsberechnung
│   ├── manMarking.ts           # Manndeckungs-Zuordnung
│   ├── zoneDefense.ts          # Raumdeckungs-Zonen & Zuordnung
│   ├── shifting.ts             # Verschiebungslogik
│   └── coordinates.ts          # Normalisiertes Koordinatensystem
│
├── data/                       # Statische Konfigurationsdaten
│   ├── formations.json         # Formationsdefinitionen (4-4-2, etc.)
│   ├── lessons/                # Lernschritt-Definitionen
│   │   ├── man-marking.json
│   │   ├── zone-defense.json
│   │   └── shifting.json
│   ├── glossary.json           # Fachbegriffe & Erklaerungen
│   └── teamColors.json         # Vordefinierte Farbkombinationen
│
├── services/                   # Infrastruktur-Services
│   ├── storage.ts              # LocalStorage Speichern/Laden
│   ├── audio.ts                # Sound-Effekte
│   └── export.ts               # Bild-Export
│
├── hooks/                      # Custom React Hooks
│   ├── useDragAndDrop.ts       # Drag-and-Drop Logik
│   ├── useFieldScale.ts        # Spielfeld-Skalierung
│   └── useAnimation.ts         # Animations-Utilities
│
├── pages/                      # Seiten-Komponenten (Routes)
│   ├── Home.tsx                # Hauptmenue
│   ├── FreeMode.tsx            # Freies Aufstellen
│   ├── ManMarkingPage.tsx      # Manndeckungs-Ansicht
│   ├── ZoneDefensePage.tsx     # Raumdeckungs-Ansicht
│   ├── ShiftingPage.tsx        # Verschieben-Ansicht
│   ├── ComparePage.tsx         # Vergleichsansicht
│   └── LearningPage.tsx        # Lern-Modus
│
├── types/                      # TypeScript Typ-Definitionen
│   ├── player.ts               # Player, Team, Position
│   ├── tactics.ts              # TacticMode, Zone, Formation
│   └── learning.ts             # LessonStep, Lesson
│
└── utils/                      # Hilfsfunktionen
    ├── math.ts                 # Geometrische Berechnungen
    └── colors.ts               # Farbkontrast-Pruefung
```

## Architekturentscheidungen

### 1. Konva Layer-Strategie

Das Spielfeld verwendet mehrere Konva-Layer fuer optimale Performance:

```
Stage
├── Layer: Background     (Rasen, statisch, selten re-rendered)
├── Layer: Pitch Lines    (Linien, statisch)
├── Layer: Zones          (Raumdeckungs-Zonen, halbtransparent)
├── Layer: Connections    (Manndeckungs-Linien, Verschiebungspfeile)
├── Layer: Players        (Spieler-Figuren, haeufig re-rendered)
└── Layer: Ball           (Ball-Objekt, haeufig re-rendered)
```

**Begruendung:** Durch Layer-Trennung muss nur der Layer neu gerendert werden, der sich aendert. Statische Elemente (Rasen, Linien) werden einmal gezeichnet und gecacht.

### 2. Normalisiertes Koordinatensystem

Alle Spieler-Positionen werden in normalisierten Koordinaten (0-100) gespeichert:

```typescript
// Normalisierte Position (gespeichert im Store)
{ x: 50, y: 25 }  // Mitte des Feldes, oberes Viertel

// Pixel-Position (berechnet beim Rendern)
{ x: 500, y: 175 } // bei einem 1000x700 Canvas
```

**Begruendung:** Ermoeglicht saubere Skalierung auf verschiedene Bildschirmgroessen und vereinfacht die Taktik-Berechnungen (Zonen, Abstande).

### 3. Taktik-Engine Pattern

Die Taktik-Logik ist strikt von der UI getrennt:

```
UI-Komponente → ruft Engine-Funktion → berechnet neue Positionen → Store-Update → Re-Render
```

Engine-Funktionen sind pure Functions ohne Side Effects:

```typescript
// engine/manMarking.ts
function assignMarkers(defenders: Player[], attackers: Player[]): Assignment[]
function calculateFollowPosition(attacker: Position, offset: number): Position

// engine/zoneDefense.ts
function defineZones(formation: Formation): Zone[]
function isInZone(position: Position, zone: Zone): boolean

// engine/shifting.ts
function calculateShift(players: Player[], ballPosition: Position): Position[]
```

**Begruendung:** Pure Functions sind einfach zu testen, wiederverwendbar und unabhaengig vom UI-Framework.

### 4. State-Architektur (Zustand)

Drei separate Stores fuer klare Verantwortlichkeiten:

- **useGameStore**: Spielzustand (Spieler, Ball, Formation, Taktik-Modus)
- **useUIStore**: UI-Zustand (aktive Seite, Modals, Sound-Einstellungen)
- **useLearningStore**: Lern-Modus (aktuelle Lektion, Schritt, Fortschritt)

**Begruendung:** Trennung verhindert unnoetige Re-Renders. Aenderungen am UI-State (z.B. Modal oeffnen) loesen kein Re-Rendering der Spielfeld-Komponenten aus.

### 5. Datengetriebene Konfiguration

Formationen, Lernschritte und Glossar werden als JSON-Dateien definiert, nicht im Code hardcoded. Das ermoeglicht:
- Einfaches Hinzufuegen neuer Formationen/Lektionen ohne Code-Aenderungen
- Klare Trennung von Inhalt und Logik
- Potentiell spaeteres Laden von externen Quellen
