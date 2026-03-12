# Sprint 1 Backlog: "The Pitch Is Set"

**Sprint Goal:** Working app with pitch, players, and drag-and-drop
**Capacity:** 26 Story Points

## Items

| PBI | Title | SP | Status |
|-----|-------|---:|--------|
| PBI-01 | Project Setup | 3 | To Do |
| PBI-02 | Pitch Rendering | 5 | To Do |
| PBI-03 | Player Figures | 5 | To Do |
| PBI-04 | Drag-and-Drop for Players | 8 | To Do |
| PBI-05 | Zustand State Management | 5 | To Do |

## Dependencies

```
PBI-01 (Setup)
  └── PBI-02 (Pitch) + PBI-05 (Store)
        └── PBI-03 (Players)
              └── PBI-04 (Drag-and-Drop)
```

## Tasks (Breakdown)

### PBI-01: Project Setup (3 SP)
- [ ] Initialize Vite + React + TypeScript
- [ ] Set up TailwindCSS
- [ ] Configure ESLint + Prettier
- [ ] Set up Vitest
- [ ] Create folder structure
- [ ] Define CI scripts in package.json

### PBI-02: Pitch Rendering (5 SP)
- [ ] Integrate React Konva
- [ ] Pitch component with grass background
- [ ] Draw lines (center line, penalty area, goal area, center circle)
- [ ] Implement normalized coordinate system (0-100 → pixels)
- [ ] Responsive scaling
- [ ] Unit tests for coordinate transformation

### PBI-03: Player Figures (5 SP)
- [ ] Player component (circle + number)
- [ ] Team color props
- [ ] Goalkeeper variant
- [ ] Render 11 players per team
- [ ] Define initial positions

### PBI-04: Drag-and-Drop (8 SP)
- [ ] Implement mouse drag
- [ ] Implement touch drag
- [ ] Boundary check (pitch edges)
- [ ] Visual feedback (shadow, highlight)
- [ ] Position update in store
- [ ] Performance optimization

### PBI-05: Zustand Store (5 SP)
- [ ] Define store structure (teams, players, positions)
- [ ] Actions: movePlayer, setFormation, setTacticMode
- [ ] Selectors for performant re-rendering
- [ ] Unit tests for store actions
