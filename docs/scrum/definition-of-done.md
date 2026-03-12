# Definition of Done (DoD)

Ein Product Backlog Item gilt als **Done**, wenn alle folgenden Kriterien erfuellt sind:

## Kriterien

1. **Code vollstaendig** - Alle Akzeptanzkriterien der User Story sind implementiert
2. **Code Review** - Code wurde von mindestens einer weiteren Person reviewed (oder Pair Programming)
3. **Unit Tests** - Relevante Unit Tests sind geschrieben und bestehen (Vitest)
4. **Keine Linting-Fehler** - ESLint und Prettier melden keine Fehler (`npm run lint` ist gruen)
5. **Build erfolgreich** - `npm run build` laeuft fehlerfrei durch
6. **TypeScript strikt** - Keine TypeScript-Fehler, keine `any`-Typen ohne Begruendung
7. **Browser-Test** - Feature wurde manuell in Chrome und Safari getestet
8. **Tablet-Test** - Feature wurde auf Tablet-Viewport getestet (ab Sprint 2)
9. **Performance** - Keine spuerbaren Ruckler oder Lags bei der Interaktion (>30 FPS)
10. **Barrierefreiheit** - Texte sind gut lesbar, Kontraste ausreichend, Buttons gross genug
11. **Dokumentation** - Komplexe Logik ist mit Kommentaren im Code erklaert
12. **Integration** - Feature ist in den Hauptbranch gemerged und deployed
