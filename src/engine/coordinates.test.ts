import { describe, it, expect } from "vitest";
import { toPixel, toNormalized, clampPosition } from "./coordinates";

describe("coordinates", () => {
  describe("toPixel", () => {
    it("konvertiert Mitte des Feldes korrekt", () => {
      const result = toPixel({ x: 50, y: 50 }, 1000, 700);
      expect(result).toEqual({ x: 500, y: 350 });
    });

    it("konvertiert Ursprung korrekt", () => {
      const result = toPixel({ x: 0, y: 0 }, 1000, 700);
      expect(result).toEqual({ x: 0, y: 0 });
    });

    it("konvertiert Maximum korrekt", () => {
      const result = toPixel({ x: 100, y: 100 }, 800, 600);
      expect(result).toEqual({ x: 800, y: 600 });
    });
  });

  describe("toNormalized", () => {
    it("konvertiert Pixel zurueck zu normalisiert", () => {
      const result = toNormalized({ x: 500, y: 350 }, 1000, 700);
      expect(result).toEqual({ x: 50, y: 50 });
    });
  });

  describe("clampPosition", () => {
    it("begrenzt negative Werte auf 0", () => {
      const result = clampPosition({ x: -10, y: -5 });
      expect(result).toEqual({ x: 0, y: 0 });
    });

    it("begrenzt Werte ueber 100", () => {
      const result = clampPosition({ x: 110, y: 150 });
      expect(result).toEqual({ x: 100, y: 100 });
    });

    it("laesst gueltige Werte unveraendert", () => {
      const result = clampPosition({ x: 50, y: 75 });
      expect(result).toEqual({ x: 50, y: 75 });
    });
  });
});
