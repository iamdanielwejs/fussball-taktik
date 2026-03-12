import type { Position } from "../types/player";

/**
 * Konvertiert normalisierte Koordinaten (0-100) in Pixel-Koordinaten.
 */
export function toPixel(pos: Position, width: number, height: number): Position {
  return {
    x: (pos.x / 100) * width,
    y: (pos.y / 100) * height,
  };
}

/**
 * Konvertiert Pixel-Koordinaten in normalisierte Koordinaten (0-100).
 */
export function toNormalized(pos: Position, width: number, height: number): Position {
  return {
    x: (pos.x / width) * 100,
    y: (pos.y / height) * 100,
  };
}

/**
 * Begrenzt eine Position auf den Bereich 0-100.
 */
export function clampPosition(pos: Position): Position {
  return {
    x: Math.max(0, Math.min(100, pos.x)),
    y: Math.max(0, Math.min(100, pos.y)),
  };
}
