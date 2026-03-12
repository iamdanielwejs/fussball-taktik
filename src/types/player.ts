export interface Position {
  x: number; // 0-100 normalisiert
  y: number; // 0-100 normalisiert
}

export interface Player {
  id: string;
  number: number;
  position: Position;
  isGoalkeeper: boolean;
}

export interface Team {
  id: "home" | "away";
  name: string;
  color: string;
  players: Player[];
}
