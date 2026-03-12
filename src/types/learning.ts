import type { Position } from "./player";

export interface LessonStep {
  title: string;
  description: string;
  highlightPlayerIds?: string[];
  highlightZoneIds?: string[];
  ballPosition?: Position;
  animation?: "move-players" | "show-lines" | "show-zones";
}

export interface Lesson {
  id: string;
  tacticMode: string;
  title: string;
  steps: LessonStep[];
  summary: string;
}
