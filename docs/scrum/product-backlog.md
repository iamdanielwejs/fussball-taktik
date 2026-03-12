# Product Backlog

**Gesamt: 113 Story Points** | **20 Product Backlog Items**

---

## PBI-01: Projekt-Setup

**Story Points:** 3 | **Prioritaet:** Hoechste | **Sprint:** 1

> Als Entwickler moechte ich ein vollstaendig konfiguriertes Projekt mit Build-Pipeline,
> damit ich sofort mit der Feature-Entwicklung beginnen kann.

### Akzeptanzkriterien
- [ ] Vite + React + TypeScript Projekt ist initialisiert
- [ ] TailwindCSS ist konfiguriert und funktioniert
- [ ] ESLint und Prettier sind konfiguriert mit einheitlichen Regeln
- [ ] Vitest ist eingerichtet mit einem Beispiel-Test
- [ ] `npm run dev`, `npm run build`, `npm run test` funktionieren fehlerfrei
- [ ] Ordnerstruktur entspricht der Architektur-Dokumentation

---

## PBI-02: Spielfeld-Darstellung

**Story Points:** 5 | **Prioritaet:** Hoechste | **Sprint:** 1

> Als Kind moechte ich ein gruenes Fussballfeld sehen mit allen Linien,
> damit ich weiss, wo auf dem Spielfeld ich mich befinde.

### Akzeptanzkriterien
- [ ] Spielfeld wird als 2D-Draufsicht mit Konva Canvas gerendert
- [ ] Mittellinie, Mittelkreis, Strafraum, Torraum und Eckfahnen sind sichtbar
- [ ] Spielfeld nutzt normalisiertes Koordinatensystem (0-100)
- [ ] Spielfeld skaliert korrekt bei Fenstergroessenaenderung
- [ ] Gruener Rasen-Hintergrund mit weissen Linien
- [ ] Mindestens ein Unit-Test fuer die Koordinaten-Transformation

---

## PBI-03: Spieler-Figuren

**Story Points:** 5 | **Prioritaet:** Hoechste | **Sprint:** 1

> Als Kind moechte ich Spieler als farbige Figuren auf dem Feld sehen,
> damit ich die beiden Teams unterscheiden kann.

### Akzeptanzkriterien
- [ ] Spieler werden als farbige Kreise mit Rueckennummer dargestellt
- [ ] Zwei Teams sind farblich unterscheidbar (Standard: Rot und Blau)
- [ ] Jeder Spieler hat eine sichtbare Rueckennummer (1-11)
- [ ] Spieler-Komponente ist als wiederverwendbare Konva-Komponente implementiert
- [ ] Spieler-Groesse ist proportional zum Spielfeld
- [ ] Torwart ist visuell vom Feldspieler unterscheidbar

---

## PBI-04: Drag-and-Drop fuer Spieler

**Story Points:** 8 | **Prioritaet:** Hoechste | **Sprint:** 1

> Als Kind moechte ich Spieler mit der Maus oder dem Finger verschieben koennen,
> damit ich eigene Aufstellungen ausprobieren kann.

### Akzeptanzkriterien
- [ ] Spieler lassen sich per Maus (Desktop) ziehen
- [ ] Spieler lassen sich per Touch (Tablet) ziehen
- [ ] Waehrend des Ziehens wird der Spieler visuell hervorgehoben
- [ ] Spieler koennen nicht ausserhalb des Spielfelds platziert werden
- [ ] Position wird nach dem Loslassen im Store aktualisiert
- [ ] Drag-and-Drop funktioniert fluessig (>30 FPS)
- [ ] Visuelles Feedback beim Aufnehmen und Ablegen (z.B. Schatten, Groessenaenderung)

---

## PBI-05: Zustand State Management

**Story Points:** 5 | **Prioritaet:** Hoechste | **Sprint:** 1

> Als Entwickler moechte ich einen zentralen State Store,
> damit alle Komponenten konsistent auf den Spielzustand zugreifen koennen.

### Akzeptanzkriterien
- [ ] Zustand Store verwaltet Spieler-Positionen beider Teams
- [ ] Store verwaltet aktive Formation pro Team
- [ ] Store verwaltet aktiven Taktik-Modus
- [ ] Store verwaltet Ball-Position
- [ ] Zustandsaenderungen loesen Re-Rendering nur der betroffenen Komponenten aus
- [ ] Store-Logik ist durch Unit-Tests abgedeckt

---

## PBI-06: Formationen-Auswahl

**Story Points:** 8 | **Prioritaet:** Hoch | **Sprint:** 2

> Als Kind moechte ich aus verschiedenen Formationen auswaehlen koennen (z.B. 4-4-2),
> damit die Spieler automatisch in die richtige Aufstellung springen.

### Akzeptanzkriterien
- [ ] Mindestens 3 Formationen sind verfuegbar: 4-4-2, 4-3-3, 3-5-2
- [ ] Formationen sind als Daten-Konfiguration definiert (nicht hardcoded in UI)
- [ ] Auswahl ueber kindgerechte Buttons/Karten mit visueller Vorschau
- [ ] Spieler bewegen sich animiert in die neue Formation
- [ ] Animation dauert 500-800ms mit Easing
- [ ] Fuer jedes Team separat waehlbar
- [ ] Aktive Formation ist visuell hervorgehoben

---

## PBI-07: Manndeckung-Visualisierung

**Story Points:** 8 | **Prioritaet:** Hoch | **Sprint:** 2

> Als Kind moechte ich sehen, wie Manndeckung funktioniert,
> damit ich verstehe, dass jeder Verteidiger einen bestimmten Gegenspieler bewacht.

### Akzeptanzkriterien
- [ ] Im Manndeckungs-Modus wird jedem Verteidiger ein Gegenspieler zugeordnet
- [ ] Zuordnung wird durch farbige Verbindungslinien dargestellt
- [ ] Wenn ein Angreifer verschoben wird, folgt der zugeordnete Verteidiger
- [ ] Follow-Bewegung ist animiert (nicht teleportierend)
- [ ] Abstand zwischen Verteidiger und Angreifer ist konfigurierbar
- [ ] Erklaertext beschreibt, was Manndeckung bedeutet
- [ ] Mindestens ein Test fuer die Zuordnungslogik

---

## PBI-08: Raumdeckung-Visualisierung

**Story Points:** 8 | **Prioritaet:** Hoch | **Sprint:** 2

> Als Kind moechte ich sehen, wie Raumdeckung funktioniert,
> damit ich verstehe, dass Verteidiger feste Zonen bewachen statt einzelne Gegenspieler.

### Akzeptanzkriterien
- [ ] Spielfeld ist in farbige Zonen unterteilt (halbtransparent)
- [ ] Jeder Verteidiger ist einer Zone zugeordnet
- [ ] Zonen sind visuell dem jeweiligen Verteidiger zugeordnet (gleiche Farbe/Markierung)
- [ ] Verteidiger bleiben in ihrer Zone, auch wenn Angreifer verschoben werden
- [ ] Erklaertext beschreibt, was Raumdeckung bedeutet
- [ ] Unterschied zur Manndeckung wird visuell deutlich
- [ ] Mindestens ein Test fuer die Zonen-Logik

---

## PBI-09: Verschieben zum Ball

**Story Points:** 8 | **Prioritaet:** Hoch | **Sprint:** 3

> Als Kind moechte ich sehen, wie sich das Team zum Ball verschiebt,
> damit ich verstehe, warum die Spieler immer in Ballnaehe zusammenruecken.

### Akzeptanzkriterien
- [ ] Ball kann auf dem Spielfeld platziert/verschoben werden
- [ ] Im Verschieben-Modus bewegen sich alle Verteidiger Richtung Ballseite
- [ ] Kompaktheit des Teams ist visuell erkennbar
- [ ] Verschiebung wird animiert dargestellt
- [ ] Pfeile oder Linien zeigen die Verschiebungsrichtung an
- [ ] Erklaertext beschreibt das Konzept des Verschiebens
- [ ] Unterschied zu Manndeckung und Raumdeckung ist erkennbar

---

## PBI-10: Navigation und Hauptmenue

**Story Points:** 5 | **Prioritaet:** Hoch | **Sprint:** 2

> Als Kind moechte ich ein einfaches Menue sehen,
> damit ich zwischen den verschiedenen Taktik-Ansichten wechseln kann.

### Akzeptanzkriterien
- [ ] Hauptmenue mit grossen, farbigen Buttons fuer jede Taktik
- [ ] Navigation zwischen Menue und Taktik-Ansichten
- [ ] Zurueck-Button auf jeder Seite
- [ ] Aktive Seite ist visuell hervorgehoben
- [ ] Menue ist auch auf Tablets gut bedienbar (grosse Klickflaechen)
- [ ] Kindgerechte Icons oder Illustrationen bei den Menue-Punkten

---

## PBI-11: Taktik-Vergleichsansicht

**Story Points:** 5 | **Prioritaet:** Mittel | **Sprint:** 3

> Als Kind moechte ich zwei Taktiken nebeneinander vergleichen koennen,
> damit ich die Unterschiede besser verstehe.

### Akzeptanzkriterien
- [ ] Split-Screen mit zwei Spielfeldern nebeneinander
- [ ] Jedes Feld zeigt eine andere Taktik (z.B. Manndeckung vs. Raumdeckung)
- [ ] Beide Felder sind synchronisiert (gleiche Angreifer-Positionen)
- [ ] Auswahl der zu vergleichenden Taktiken ueber Dropdown/Buttons
- [ ] Funktioniert auf Tablets im Querformat

---

## PBI-12: Lern-Modus mit Schritt-fuer-Schritt-Erklaerungen

**Story Points:** 13 | **Prioritaet:** Mittel | **Sprint:** 3

> Als Kind moechte ich eine gefuehrte Erklaerung Schritt fuer Schritt durchgehen,
> damit ich jede Taktik in meinem eigenen Tempo verstehen kann.

### Akzeptanzkriterien
- [ ] Jede Taktik hat eine Schritt-fuer-Schritt-Sequenz (mindestens 5 Schritte)
- [ ] Schritte werden durch Weiter/Zurueck-Buttons navigiert
- [ ] Jeder Schritt hat einen kurzen, kindgerechten Erklaertext
- [ ] Relevante Spieler/Zonen werden im jeweiligen Schritt hervorgehoben
- [ ] Fortschrittsanzeige (z.B. "Schritt 3 von 7")
- [ ] Animationen begleiten die Erklaerungen
- [ ] Am Ende jeder Lektion gibt es eine kurze Zusammenfassung
- [ ] Lern-Schritte sind als Daten-Konfiguration definiert (nicht hardcoded)

---

## PBI-13: Animierter Ball

**Story Points:** 3 | **Prioritaet:** Mittel | **Sprint:** 2

> Als Kind moechte ich einen Ball auf dem Feld sehen und bewegen koennen,
> damit die Taktik-Visualisierungen realistischer wirken.

### Akzeptanzkriterien
- [ ] Ball wird als rundes Objekt mit Fussball-Optik dargestellt
- [ ] Ball kann per Drag-and-Drop verschoben werden
- [ ] Ball-Position wird im Store verwaltet
- [ ] Ball reagiert auf Taktik-Modus (z.B. Verschieben zum Ball)
- [ ] Ball kann nicht ausserhalb des Feldes platziert werden

---

## PBI-14: Team-Farben anpassen

**Story Points:** 5 | **Prioritaet:** Mittel | **Sprint:** 3

> Als Kind moechte ich die Farben meiner Teams aendern koennen,
> damit sie wie mein Lieblingsverein aussehen.

### Akzeptanzkriterien
- [ ] Farbauswahl-Panel fuer jedes Team
- [ ] Mindestens 8 vordefinierte Farbkombinationen
- [ ] Farbaenderung wird sofort auf dem Spielfeld sichtbar
- [ ] Ausgewaehlte Farben werden im Store gespeichert
- [ ] Kontrastpruefung: Teams muessen sich farblich unterscheiden
- [ ] Vordefinierte Vereinsfarben als Schnellauswahl (z.B. "Bayern", "Dortmund")

---

## PBI-15: Speichern und Laden von Aufstellungen

**Story Points:** 5 | **Prioritaet:** Mittel | **Sprint:** 4

> Als Kind moechte ich meine Aufstellung speichern und spaeter wieder laden,
> damit ich meine Arbeit nicht verliere.

### Akzeptanzkriterien
- [ ] Speichern-Button speichert aktuelle Aufstellung in LocalStorage
- [ ] Gespeicherte Aufstellungen werden in einer Liste angezeigt
- [ ] Aufstellungen koennen benannt werden
- [ ] Laden stellt Spieler-Positionen, Formation und Taktik-Modus wieder her
- [ ] Loeschen einzelner gespeicherter Aufstellungen moeglich
- [ ] Maximal 10 gespeicherte Aufstellungen

---

## PBI-16: Sound-Effekte

**Story Points:** 3 | **Prioritaet:** Niedrig | **Sprint:** 4

> Als Kind moechte ich lustige Sounds hoeren, wenn ich Spieler bewege,
> damit die App sich lebendiger anfuehlt.

### Akzeptanzkriterien
- [ ] Sound beim Aufnehmen eines Spielers
- [ ] Sound beim Ablegen eines Spielers
- [ ] Sound beim Wechseln der Formation
- [ ] Sound-Effekte koennen ein-/ausgeschaltet werden
- [ ] Lautstaerke ist angemessen und nicht erschreckend
- [ ] Sounds funktionieren auf Desktop und Tablet

---

## PBI-17: Responsive Design fuer Tablets

**Story Points:** 5 | **Prioritaet:** Niedrig | **Sprint:** 4

> Als Kind moechte ich die App auch auf meinem Tablet gut nutzen koennen,
> damit ich ueberall damit lernen kann.

### Akzeptanzkriterien
- [ ] Layout passt sich an Tablet-Bildschirmgroessen an (768px-1024px)
- [ ] Touch-Ziele sind mindestens 44x44px
- [ ] Spielfeld nutzt verfuegbare Flaeche optimal
- [ ] Menue ist im Querformat und Hochformat nutzbar
- [ ] Keine horizontalen Scrollbalken
- [ ] Getestet auf iPad und Android-Tablet Viewports

---

## PBI-18: Erklaer-Popups

**Story Points:** 3 | **Prioritaet:** Niedrig | **Sprint:** 4

> Als Kind moechte ich auf Begriffe tippen und eine Erklaerung sehen,
> damit ich neue Woerter direkt verstehen kann.

### Akzeptanzkriterien
- [ ] Fachbegriffe im UI sind als klickbare Elemente markiert
- [ ] Popup zeigt kindgerechte Erklaerung des Begriffs
- [ ] Popup schliesst sich beim Klick ausserhalb
- [ ] Erklaerungen sind maximal 2-3 Saetze lang
- [ ] Mindestens 10 Begriffe sind mit Erklaerungen hinterlegt

---

## PBI-19: Export als Bild

**Story Points:** 3 | **Prioritaet:** Niedrig | **Sprint:** 4

> Als Kind moechte ich meine Aufstellung als Bild speichern,
> damit ich sie meinem Trainer oder Freunden zeigen kann.

### Akzeptanzkriterien
- [ ] Export-Button erzeugt ein PNG-Bild des aktuellen Spielfelds
- [ ] Bild enthaelt Spielfeld, Spieler und aktive Taktik-Visualisierung
- [ ] Download wird automatisch im Browser ausgeloest
- [ ] Bildqualitaet ist ausreichend fuer Anzeige auf Bildschirm
- [ ] Dateiname enthaelt Datum und Formation

---

## PBI-20: Willkommens-Tutorial

**Story Points:** 5 | **Prioritaet:** Niedrig | **Sprint:** 4

> Als Kind, das die App zum ersten Mal oeffnet, moechte ich eine kurze Einfuehrung sehen,
> damit ich weiss, was ich hier machen kann und wie alles funktioniert.

### Akzeptanzkriterien
- [ ] Tutorial startet automatisch beim ersten Besuch
- [ ] Maximal 5 Schritte mit grossen Bildern und kurzem Text
- [ ] Jeder Schritt hebt einen Bereich der App hervor (Spotlight-Effekt)
- [ ] Ueberspringen-Button ist immer sichtbar
- [ ] Tutorial kann aus dem Menue erneut gestartet werden
- [ ] Tutorial-Status wird in LocalStorage gespeichert
