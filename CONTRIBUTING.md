# Contributing to Fussball-Taktik

Thanks for your interest in contributing! This project teaches kids football tactics through an interactive browser simulation. Every contribution helps make learning more fun.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/<your-username>/fussball-taktik.git`
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/your-feature-name`
5. Start the dev server: `npm run dev`

## Development Workflow

### Before You Code

- Check the [product backlog](docs/scrum/product-backlog.md) for open items
- Look at existing issues to avoid duplicate work
- For larger changes, open an issue first to discuss the approach

### Code Standards

- **TypeScript** — no `any` types without justification
- **Formatting** — run `npm run format` (Prettier) before committing
- **Linting** — run `npm run lint` (ESLint) and fix all errors
- **Tests** — add unit tests for logic in `src/engine/`. Run with `npm run test`

### Architecture Guidelines

- **Keep tactic logic pure** — functions in `src/engine/` must be pure (no side effects, no React imports)
- **Normalized coordinates** — always store positions as 0-100, convert to pixels only at render time
- **Data-driven content** — formations, lessons, glossary go in `src/data/` as JSON, not hardcoded in components
- **Kid-friendly UI** — buttons must be large (min 44x44px touch target), text must be simple, colors must have sufficient contrast

### Commit Messages

Write clear, concise commit messages:

```
Add zone defense visualization
Fix player drag boundary check on mobile
Update formation animation easing
```

## Pull Request Process

1. Make sure all checks pass:
   ```bash
   npm run lint
   npm run test
   npm run build
   ```
2. Update or add tests if you changed logic in `src/engine/`
3. Open a pull request against `master`
4. Describe what you changed and why
5. Link related issues if applicable

## Project Documentation

- **[Product Backlog](docs/scrum/product-backlog.md)** — all planned features as user stories
- **[Technical Architecture](docs/architecture/technical-architecture.md)** — tech stack, folder structure, design decisions
- **[Definition of Done](docs/scrum/definition-of-done.md)** — when is a feature complete?

## Code of Conduct

Be kind, respectful, and constructive. Remember that this project is built for children — keep that audience in mind in all decisions.

## Questions?

Open an issue or start a discussion. We're happy to help!
