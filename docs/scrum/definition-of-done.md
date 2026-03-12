# Definition of Done (DoD)

A Product Backlog Item is considered **Done** when all of the following criteria are met:

## Criteria

1. **Code complete** - All acceptance criteria of the user story are implemented
2. **Code review** - Code has been reviewed by at least one other person (or pair programming)
3. **Unit tests** - Relevant unit tests are written and passing (Vitest)
4. **No linting errors** - ESLint and Prettier report no errors (`npm run lint` is green)
5. **Build successful** - `npm run build` runs without errors
6. **TypeScript strict** - No TypeScript errors, no `any` types without justification
7. **Browser test** - Feature has been manually tested in Chrome and Safari
8. **Tablet test** - Feature has been tested on a tablet viewport (from Sprint 2 onward)
9. **Performance** - No noticeable stuttering or lag during interaction (>30 FPS)
10. **Accessibility** - Text is easily readable, contrast is sufficient, buttons are large enough
11. **Documentation** - Complex logic is explained with comments in the code
12. **Integration** - Feature is merged into the main branch and deployed
