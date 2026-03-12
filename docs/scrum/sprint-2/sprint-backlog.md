# Sprint 2 Backlog: "Tactics Come Alive"

**Sprint Goal:** Formations, man-marking, zonal marking, and navigation
**Capacity:** 32 Story Points

## Items

| PBI | Title | SP | Status |
|-----|-------|---:|--------|
| PBI-06 | Formation Selection | 8 | To Do |
| PBI-07 | Man-Marking Visualization | 8 | To Do |
| PBI-08 | Zonal Marking Visualization | 8 | To Do |
| PBI-10 | Navigation/Main Menu | 5 | To Do |
| PBI-13 | Animated Ball | 3 | To Do |

## Dependencies

```
PBI-10 (Navigation)     PBI-13 (Ball)
  └── PBI-06 (Formations)
        ├── PBI-07 (Man-Marking)
        └── PBI-08 (Zonal Marking)
```

## Tasks (Breakdown)

### PBI-06: Formation Selection (8 SP)
- [ ] Formation data configuration (4-4-2, 4-3-3, 3-5-2)
- [ ] Formation selection UI (buttons with preview)
- [ ] Animation system for player movement
- [ ] Easing functions (500-800ms)
- [ ] Separate selection per team
- [ ] Tests for formation data

### PBI-07: Man-Marking (8 SP)
- [ ] Assignment algorithm (nearest opponent)
- [ ] Connection line rendering (Konva Lines)
- [ ] Follow logic when dragging an attacker
- [ ] Animated defender movement
- [ ] Explanation text component
- [ ] Tests for assignment logic

### PBI-08: Zonal Marking (8 SP)
- [ ] Zone definition (data configuration)
- [ ] Semi-transparent zone visualization
- [ ] Zone-defender assignment
- [ ] Defender behavior (stay within zone)
- [ ] Explanation text component
- [ ] Tests for zone logic

### PBI-10: Navigation/Main Menu (5 SP)
- [ ] React Router setup
- [ ] Main menu layout with large buttons
- [ ] Routing to tactical views
- [ ] Back button
- [ ] Child-friendly icons

### PBI-13: Animated Ball (3 SP)
- [ ] Ball Konva component (football look)
- [ ] Ball drag-and-drop
- [ ] Ball position in store
- [ ] Boundary check
