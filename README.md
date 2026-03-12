# Fussball-Taktik

A browser-based interactive simulation that teaches children (ages 7-12) football/soccer tactical concepts like man-marking, zone defense, and shifting towards the ball.

## Features

- **Interactive football pitch** — drag and drop players on a 2D top-down view
- **Formations** — switch between 4-4-2, 4-3-3, 3-5-2 with animated transitions
- **Man-marking** — visualize how defenders follow assigned attackers
- **Zone defense** — see colored zones and how defenders guard areas instead of players
- **Shifting** — watch the team compact towards the ball
- **Learning mode** — step-by-step guided explanations for each tactic
- **Comparison view** — side-by-side tactic comparison
- **Kid-friendly** — large buttons, bright colors, sound effects, no registration required

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite 8 | Build tool & dev server |
| React Konva | 2D canvas rendering |
| TailwindCSS 4 | Styling |
| Zustand | State management |
| React Router 7 | Client-side routing |
| Vitest | Unit testing |

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
git clone https://github.com/<your-username>/fussball-taktik.git
cd fussball-taktik
npm install
```

### Development

```bash
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Production build
npm run test       # Run tests
npm run test:watch # Run tests in watch mode
npm run lint       # Lint with ESLint
npm run format     # Format with Prettier
```

## Project Structure

```
src/
├── components/        # React components
│   ├── field/         #   Football pitch, players, ball
│   ├── tactics/       #   Tactic visualizations
│   ├── ui/            #   Buttons, pickers, popups
│   └── learning/      #   Step-by-step lesson views
├── store/             # Zustand state management
├── engine/            # Pure logic (formations, tactics, coordinates)
├── data/              # Static config (formations, lessons, glossary)
├── services/          # LocalStorage, audio, image export
├── hooks/             # Custom React hooks
├── pages/             # Route-level page components
├── types/             # TypeScript type definitions
└── utils/             # Helper functions
```

## Architecture

- **Normalized coordinates** — all positions stored as 0-100, scaled to any screen size
- **Konva layer strategy** — separate layers for background, lines, zones, connections, players, and ball for optimal rendering performance
- **Tactic engine** — pure functions for all tactic calculations, fully testable and UI-independent
- **Data-driven config** — formations, lessons, and glossary defined as JSON, not hardcoded

See [docs/architecture/technical-architecture.md](docs/architecture/technical-architecture.md) for full details.

## Roadmap

The project is organized in 4 sprints (see [docs/scrum/](docs/scrum/) for full Scrum artifacts):

| Sprint | Goal | Status |
|--------|------|--------|
| 1 | Pitch, players, drag & drop | In progress |
| 2 | Formations, man-marking, zone defense | Planned |
| 3 | Shifting, learning mode, comparison view | Planned |
| 4 | Save/load, sounds, responsive, tutorial | Planned |

## Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.
