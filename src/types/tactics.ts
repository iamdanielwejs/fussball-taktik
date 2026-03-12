import type { Position } from "./player";

export type TacticMode = "free" | "man-marking" | "zone-defense" | "shifting";

export interface Formation {
  name: string;
  label: string;
  positions: Position[]; // 10 Feldspieler-Positionen (ohne Torwart)
}

export interface Zone {
  id: string;
  bounds: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
  assignedPlayerId: string;
  color: string;
}

export interface Assignment {
  defenderId: string;
  attackerId: string;
}
