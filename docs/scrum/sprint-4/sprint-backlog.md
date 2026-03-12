# Sprint 4 Backlog: "Polish and Ship"

**Sprint Goal:** Save/load, sounds, responsive, popups, export, and tutorial
**Capacity:** 24 Story Points

## Items

| PBI | Title | SP | Status |
|-----|-------|---:|--------|
| PBI-15 | Save/Load | 5 | To Do |
| PBI-16 | Sound Effects | 3 | To Do |
| PBI-17 | Responsive Tablets | 5 | To Do |
| PBI-18 | Explanation Popups | 3 | To Do |
| PBI-19 | Export as Image | 3 | To Do |
| PBI-20 | Welcome Tutorial | 5 | To Do |

## Dependencies

```
PBI-15 (Save)     PBI-16 (Sounds)     PBI-17 (Responsive)
PBI-18 (Popups)        PBI-19 (Export)
  └── all independent of each other ──┐
                                      └── PBI-20 (Tutorial) last
```

## Tasks (Breakdown)

### PBI-15: Save/Load (5 SP)
- [ ] Implement LocalStorage service
- [ ] Save dialog with name input
- [ ] List of saved lineups
- [ ] Load function (positions, formation, tactic)
- [ ] Delete individual entries
- [ ] Limit to 10 lineups

### PBI-16: Sound Effects (3 SP)
- [ ] Source/create sound assets
- [ ] Audio service with play/mute
- [ ] Sound triggers on drag-start, drag-end, formation switch
- [ ] Mute toggle in UI
- [ ] Respect browser autoplay policy

### PBI-17: Responsive Tablets (5 SP)
- [ ] Breakpoint system (768px, 1024px)
- [ ] Pitch scaling for tablet viewports
- [ ] Verify touch targets (min. 44x44px)
- [ ] Menu adaptation for portrait/landscape orientation
- [ ] Cross-browser testing (Safari iOS, Chrome Android)

### PBI-18: Explanation Popups (3 SP)
- [ ] Popup component (tooltip style)
- [ ] Glossary with at least 10 technical terms
- [ ] Mark clickable terms in the UI
- [ ] Close on click outside

### PBI-19: Export as Image (3 SP)
- [ ] Export Konva stage as PNG (toDataURL)
- [ ] Download trigger in browser
- [ ] Filename with date and formation
- [ ] Export button in UI

### PBI-20: Welcome Tutorial (5 SP)
- [ ] Tutorial step data structure
- [ ] Define 5 tutorial steps
- [ ] Spotlight overlay component
- [ ] Step navigation
- [ ] Skip button
- [ ] LocalStorage flag for "already seen"
- [ ] Menu entry to restart tutorial
