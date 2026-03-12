# Product Backlog

**Total: 113 Story Points** | **20 Product Backlog Items**

---

## PBI-01: Project Setup

**Story Points:** 3 | **Priority:** Highest | **Sprint:** 1

> As a developer, I want a fully configured project with a build pipeline,
> so that I can start feature development right away.

### Acceptance Criteria
- [x] Vite + React + TypeScript project is initialized
- [x] TailwindCSS is configured and working
- [x] ESLint and Prettier are configured with consistent rules
- [x] Vitest is set up with a sample test
- [x] `npm run dev`, `npm run build`, `npm run test` run without errors
- [x] Folder structure matches the architecture documentation

---

## PBI-02: Pitch Rendering

**Story Points:** 5 | **Priority:** Highest | **Sprint:** 1

> As a child, I want to see a green football pitch with all the lines,
> so that I know where on the field I am.

### Acceptance Criteria
- [ ] Pitch is rendered as a 2D top-down view using Konva Canvas
- [ ] Halfway line, center circle, penalty area, goal area, and corner flags are visible
- [ ] Pitch uses a normalized coordinate system (0-100)
- [ ] Pitch scales correctly on window resize
- [ ] Green grass background with white lines
- [ ] At least one unit test for the coordinate transformation

---

## PBI-03: Player Figures

**Story Points:** 5 | **Priority:** Highest | **Sprint:** 1

> As a child, I want to see players as colored figures on the pitch,
> so that I can tell the two teams apart.

### Acceptance Criteria
- [ ] Players are displayed as colored circles with a jersey number
- [ ] Two teams are visually distinguishable (default: red and blue)
- [ ] Each player has a visible jersey number (1-11)
- [ ] Player component is implemented as a reusable Konva component
- [ ] Player size is proportional to the pitch
- [ ] Goalkeeper is visually distinguishable from outfield players

---

## PBI-04: Drag-and-Drop for Players

**Story Points:** 8 | **Priority:** Highest | **Sprint:** 1

> As a child, I want to move players with the mouse or my finger,
> so that I can try out my own formations.

### Acceptance Criteria
- [ ] Players can be dragged with the mouse (desktop)
- [ ] Players can be dragged with touch (tablet)
- [ ] While dragging, the player is visually highlighted
- [ ] Players cannot be placed outside the pitch
- [ ] Position is updated in the store after release
- [ ] Drag-and-drop runs smoothly (>30 FPS)
- [ ] Visual feedback on pick-up and drop (e.g., shadow, size change)

---

## PBI-05: Zustand State Management

**Story Points:** 5 | **Priority:** Highest | **Sprint:** 1

> As a developer, I want a centralized state store,
> so that all components can access the game state consistently.

### Acceptance Criteria
- [ ] Zustand store manages player positions for both teams
- [ ] Store manages the active formation per team
- [ ] Store manages the active tactic mode
- [ ] Store manages the ball position
- [ ] State changes trigger re-rendering only of affected components
- [ ] Store logic is covered by unit tests

---

## PBI-06: Formation Selection

**Story Points:** 8 | **Priority:** High | **Sprint:** 2

> As a child, I want to choose from different formations (e.g., 4-4-2),
> so that the players automatically move into the correct positions.

### Acceptance Criteria
- [ ] At least 3 formations are available: 4-4-2, 4-3-3, 3-5-2
- [ ] Formations are defined as data configuration (not hardcoded in the UI)
- [ ] Selection via child-friendly buttons/cards with a visual preview
- [ ] Players move to the new formation with animation
- [ ] Animation lasts 500-800ms with easing
- [ ] Selectable separately for each team
- [ ] Active formation is visually highlighted

---

## PBI-07: Man-Marking Visualization

**Story Points:** 8 | **Priority:** High | **Sprint:** 2

> As a child, I want to see how man-marking works,
> so that I understand that each defender guards a specific opponent.

### Acceptance Criteria
- [ ] In man-marking mode, each defender is assigned to an opponent
- [ ] Assignments are shown as colored connecting lines
- [ ] When an attacker is moved, the assigned defender follows
- [ ] The follow movement is animated (not teleporting)
- [ ] Distance between defender and attacker is configurable
- [ ] Explanatory text describes what man-marking means
- [ ] At least one test for the assignment logic

---

## PBI-08: Zone Defense Visualization

**Story Points:** 8 | **Priority:** High | **Sprint:** 2

> As a child, I want to see how zone defense works,
> so that I understand that defenders guard fixed zones instead of individual opponents.

### Acceptance Criteria
- [ ] Pitch is divided into colored zones (semi-transparent)
- [ ] Each defender is assigned to a zone
- [ ] Zones are visually linked to their respective defender (same color/marker)
- [ ] Defenders stay in their zone even when attackers are moved
- [ ] Explanatory text describes what zone defense means
- [ ] The difference from man-marking is visually clear
- [ ] At least one test for the zone logic

---

## PBI-09: Shifting Toward the Ball

**Story Points:** 8 | **Priority:** High | **Sprint:** 3

> As a child, I want to see how the team shifts toward the ball,
> so that I understand why players always move closer to where the ball is.

### Acceptance Criteria
- [ ] Ball can be placed/moved on the pitch
- [ ] In shifting mode, all defenders move toward the ball side
- [ ] Team compactness is visually recognizable
- [ ] Shifting is displayed with animation
- [ ] Arrows or lines indicate the direction of the shift
- [ ] Explanatory text describes the concept of shifting
- [ ] The difference from man-marking and zone defense is apparent

---

## PBI-10: Navigation and Main Menu

**Story Points:** 5 | **Priority:** High | **Sprint:** 2

> As a child, I want to see a simple menu,
> so that I can switch between the different tactic views.

### Acceptance Criteria
- [ ] Main menu with large, colorful buttons for each tactic
- [ ] Navigation between menu and tactic views
- [ ] Back button on every page
- [ ] Active page is visually highlighted
- [ ] Menu is easy to use on tablets (large tap targets)
- [ ] Child-friendly icons or illustrations on the menu items

---

## PBI-11: Tactic Comparison View

**Story Points:** 5 | **Priority:** Medium | **Sprint:** 3

> As a child, I want to compare two tactics side by side,
> so that I can better understand the differences.

### Acceptance Criteria
- [ ] Split-screen with two pitches side by side
- [ ] Each pitch shows a different tactic (e.g., man-marking vs. zone defense)
- [ ] Both pitches are synchronized (same attacker positions)
- [ ] Selection of tactics to compare via dropdown/buttons
- [ ] Works on tablets in landscape orientation

---

## PBI-12: Learning Mode with Step-by-Step Explanations

**Story Points:** 13 | **Priority:** Medium | **Sprint:** 3

> As a child, I want to go through a guided explanation step by step,
> so that I can understand each tactic at my own pace.

### Acceptance Criteria
- [ ] Each tactic has a step-by-step sequence (at least 5 steps)
- [ ] Steps are navigated using Next/Back buttons
- [ ] Each step has a short, child-friendly explanatory text
- [ ] Relevant players/zones are highlighted in the respective step
- [ ] Progress indicator (e.g., "Step 3 of 7")
- [ ] Animations accompany the explanations
- [ ] A brief summary is shown at the end of each lesson
- [ ] Learning steps are defined as data configuration (not hardcoded)

---

## PBI-13: Animated Ball

**Story Points:** 3 | **Priority:** Medium | **Sprint:** 2

> As a child, I want to see a ball on the pitch and be able to move it,
> so that the tactic visualizations feel more realistic.

### Acceptance Criteria
- [ ] Ball is displayed as a round object with a football look
- [ ] Ball can be moved via drag-and-drop
- [ ] Ball position is managed in the store
- [ ] Ball reacts to the tactic mode (e.g., shifting toward the ball)
- [ ] Ball cannot be placed outside the pitch

---

## PBI-14: Customize Team Colors

**Story Points:** 5 | **Priority:** Medium | **Sprint:** 3

> As a child, I want to change the colors of my teams,
> so that they look like my favorite club.

### Acceptance Criteria
- [ ] Color selection panel for each team
- [ ] At least 8 predefined color combinations
- [ ] Color changes are immediately visible on the pitch
- [ ] Selected colors are saved in the store
- [ ] Contrast check: teams must be visually distinguishable
- [ ] Predefined club colors as quick selection (e.g., "Bayern", "Dortmund")

---

## PBI-15: Save and Load Formations

**Story Points:** 5 | **Priority:** Medium | **Sprint:** 4

> As a child, I want to save my formation and load it again later,
> so that I don't lose my work.

### Acceptance Criteria
- [ ] Save button stores the current formation in LocalStorage
- [ ] Saved formations are displayed in a list
- [ ] Formations can be named
- [ ] Loading restores player positions, formation, and tactic mode
- [ ] Individual saved formations can be deleted
- [ ] Maximum of 10 saved formations

---

## PBI-16: Sound Effects

**Story Points:** 3 | **Priority:** Low | **Sprint:** 4

> As a child, I want to hear fun sounds when I move players,
> so that the app feels more lively.

### Acceptance Criteria
- [ ] Sound when picking up a player
- [ ] Sound when dropping a player
- [ ] Sound when switching formations
- [ ] Sound effects can be toggled on/off
- [ ] Volume is appropriate and not startling
- [ ] Sounds work on desktop and tablet

---

## PBI-17: Responsive Design for Tablets

**Story Points:** 5 | **Priority:** Low | **Sprint:** 4

> As a child, I want to use the app comfortably on my tablet,
> so that I can learn with it anywhere.

### Acceptance Criteria
- [ ] Layout adapts to tablet screen sizes (768px-1024px)
- [ ] Touch targets are at least 44x44px
- [ ] Pitch uses available space optimally
- [ ] Menu is usable in landscape and portrait orientation
- [ ] No horizontal scrollbars
- [ ] Tested on iPad and Android tablet viewports

---

## PBI-18: Explanation Popups

**Story Points:** 3 | **Priority:** Low | **Sprint:** 4

> As a child, I want to tap on terms and see an explanation,
> so that I can understand new words right away.

### Acceptance Criteria
- [ ] Technical terms in the UI are marked as tappable elements
- [ ] Popup shows a child-friendly explanation of the term
- [ ] Popup closes when tapping outside of it
- [ ] Explanations are a maximum of 2-3 sentences long
- [ ] At least 10 terms have explanations

---

## PBI-19: Export as Image

**Story Points:** 3 | **Priority:** Low | **Sprint:** 4

> As a child, I want to save my formation as an image,
> so that I can show it to my coach or friends.

### Acceptance Criteria
- [ ] Export button generates a PNG image of the current pitch
- [ ] Image includes the pitch, players, and the active tactic visualization
- [ ] Download is triggered automatically in the browser
- [ ] Image quality is sufficient for on-screen display
- [ ] File name includes the date and formation

---

## PBI-20: Welcome Tutorial

**Story Points:** 5 | **Priority:** Low | **Sprint:** 4

> As a child opening the app for the first time, I want to see a short introduction,
> so that I know what I can do here and how everything works.

### Acceptance Criteria
- [ ] Tutorial starts automatically on the first visit
- [ ] Maximum of 5 steps with large images and short text
- [ ] Each step highlights an area of the app (spotlight effect)
- [ ] Skip button is always visible
- [ ] Tutorial can be restarted from the menu
- [ ] Tutorial status is saved in LocalStorage
