# Technical Architecture

## Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI Framework | 19.x |
| TypeScript | Type Safety | 5.x |
| Vite | Build Tool & Dev Server | 6.x |
| React Konva | 2D Canvas Rendering (Pitch) | 18.x |
| TailwindCSS | Utility-first CSS | 4.x |
| Zustand | State Management | 5.x |
| React Router | Client-side Routing | 7.x |
| Vitest | Unit Testing | 3.x |
| ESLint | Linting | 9.x |
| Prettier | Code Formatting | 3.x |

## Folder Structure

```
src/
├── main.tsx                    # Entry Point
├── App.tsx                     # Root component with Router
├── index.css                   # Tailwind Imports
│
├── components/                 # React Components
│   ├── field/                  # Pitch Components
│   │   ├── Field.tsx           # Konva Stage & Layer Setup
│   │   ├── Pitch.tsx           # Pitch lines & markings
│   │   ├── Player.tsx          # Individual player (Konva Circle + Text)
│   │   ├── Ball.tsx            # Football object
│   │   └── ZoneOverlay.tsx     # Zonal marking zones
│   │
│   ├── tactics/                # Tactics Visualizations
│   │   ├── ManMarkingLines.tsx # Man-marking connection lines
│   │   ├── ZoneDefense.tsx     # Zonal marking display
│   │   ├── Shifting.tsx        # Shifting-to-ball visualization
│   │   └── CompareView.tsx     # Split-screen comparison
│   │
│   ├── ui/                     # General UI Components
│   │   ├── Button.tsx          # Child-friendly button
│   │   ├── FormationPicker.tsx # Formation selector
│   │   ├── ColorPicker.tsx     # Team color selector
│   │   ├── Popup.tsx           # Explanation popup
│   │   ├── Tutorial.tsx        # Welcome tutorial
│   │   └── ProgressBar.tsx     # Progress indicator
│   │
│   └── learning/               # Learning Mode
│       ├── LessonView.tsx      # Step-by-step view
│       ├── StepNavigation.tsx  # Next/Back buttons
│       └── StepContent.tsx     # Individual learning step
│
├── store/                      # Zustand State Management
│   ├── useGameStore.ts         # Main store (players, ball, tactics)
│   ├── useUIStore.ts           # UI state (navigation, modals)
│   └── useLearningStore.ts     # Learning mode state
│
├── engine/                     # Tactics Calculations (pure logic)
│   ├── formations.ts           # Formation data & position calculation
│   ├── manMarking.ts           # Man-marking assignment
│   ├── zoneDefense.ts          # Zonal marking zones & assignment
│   ├── shifting.ts             # Shifting logic
│   └── coordinates.ts          # Normalized coordinate system
│
├── data/                       # Static Configuration Data
│   ├── formations.json         # Formation definitions (4-4-2, etc.)
│   ├── lessons/                # Learning step definitions
│   │   ├── man-marking.json
│   │   ├── zone-defense.json
│   │   └── shifting.json
│   ├── glossary.json           # Technical terms & explanations
│   └── teamColors.json         # Predefined color combinations
│
├── services/                   # Infrastructure Services
│   ├── storage.ts              # LocalStorage save/load
│   ├── audio.ts                # Sound effects
│   └── export.ts               # Image export
│
├── hooks/                      # Custom React Hooks
│   ├── useDragAndDrop.ts       # Drag-and-drop logic
│   ├── useFieldScale.ts        # Pitch scaling
│   └── useAnimation.ts         # Animation utilities
│
├── pages/                      # Page Components (Routes)
│   ├── Home.tsx                # Main menu
│   ├── FreeMode.tsx            # Free positioning
│   ├── ManMarkingPage.tsx      # Man-marking view
│   ├── ZoneDefensePage.tsx     # Zonal marking view
│   ├── ShiftingPage.tsx        # Shifting view
│   ├── ComparePage.tsx         # Comparison view
│   └── LearningPage.tsx        # Learning mode
│
├── types/                      # TypeScript Type Definitions
│   ├── player.ts               # Player, Team, Position
│   ├── tactics.ts              # TacticMode, Zone, Formation
│   └── learning.ts             # LessonStep, Lesson
│
└── utils/                      # Utility Functions
    ├── math.ts                 # Geometric calculations
    └── colors.ts               # Color contrast checking
```

## Architecture Decisions

### 1. Konva Layer Strategy

The pitch uses multiple Konva layers for optimal performance:

```
Stage
├── Layer: Background     (Grass, static, rarely re-rendered)
├── Layer: Pitch Lines    (Lines, static)
├── Layer: Zones          (Zonal marking zones, semi-transparent)
├── Layer: Connections    (Man-marking lines, shifting arrows)
├── Layer: Players        (Player figures, frequently re-rendered)
└── Layer: Ball           (Ball object, frequently re-rendered)
```

**Rationale:** By separating layers, only the layer that changes needs to be re-rendered. Static elements (grass, lines) are drawn once and cached.

### 2. Normalized Coordinate System

All player positions are stored in normalized coordinates (0-100):

```typescript
// Normalized position (stored in the store)
{ x: 50, y: 25 }  // Center of the pitch, upper quarter

// Pixel position (calculated during rendering)
{ x: 500, y: 175 } // for a 1000x700 canvas
```

**Rationale:** Enables clean scaling across different screen sizes and simplifies tactics calculations (zones, distances).

### 3. Tactics Engine Pattern

The tactics logic is strictly separated from the UI:

```
UI Component → calls Engine function → calculates new positions → Store update → Re-render
```

Engine functions are pure functions without side effects:

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

**Rationale:** Pure functions are easy to test, reusable, and independent of the UI framework.

### 4. State Architecture (Zustand)

Three separate stores for clear separation of concerns:

- **useGameStore**: Game state (players, ball, formation, tactics mode)
- **useUIStore**: UI state (active page, modals, sound settings)
- **useLearningStore**: Learning mode (current lesson, step, progress)

**Rationale:** Separation prevents unnecessary re-renders. Changes to UI state (e.g., opening a modal) do not trigger re-rendering of pitch components.

### 5. Data-Driven Configuration

Formations, learning steps, and the glossary are defined as JSON files rather than being hardcoded. This enables:
- Easy addition of new formations/lessons without code changes
- Clear separation of content and logic
- Potential future loading from external sources
