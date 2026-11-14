import { describe, expect, it } from "vitest";
import {
  BAKE_SCALE,
  CONIC_LAYERS,
  cssAngleToCanvasRadians,
  getBakeFilter,
  getBakePadding,
  getBlurPaddingPx,
  getBakeSize,
  getLayerStops,
} from "./bakeParams";

describe("aurora bake params", () => {
  it("sizes the bake for a layer twice the container, scaled down", () => {
    expect(getBakeSize(412, 915)).toEqual({
      width: Math.round((412 * 2) / BAKE_SCALE),
      height: Math.round((915 * 2) / BAKE_SCALE),
    });
  });

  it("never bakes a degenerate canvas", () => {
    expect(getBakeSize(0, 0)).toEqual({ width: 16, height: 16 });
  });

  it("scales the blur radius with the image", () => {
    expect(getBakeFilter(80, 1.4)).toBe("blur(10px) saturate(1.4)");
  });

  it("keeps a margin for the blur spill", () => {
    expect(getBlurPaddingPx(60)).toBe(180);
    expect(getBakePadding(60)).toBe(Math.ceil(180 / BAKE_SCALE));
  });

  it("converts CSS conic angles to canvas angles", () => {
    expect(cssAngleToCanvasRadians(90)).toBeCloseTo(0);
    expect(cssAngleToCanvasRadians(0)).toBeCloseTo(-Math.PI / 2);
  });

  it("closes the gradient loop on the first color", () => {
    const stops = getLayerStops(CONIC_LAYERS[1], ["b", "g", "o"]);
    expect(stops.map(([, color]) => color)).toEqual(["g", "o", "b", "g"]);
    expect(stops.map(([offset]) => offset)).toEqual([0, 1 / 3, 2 / 3, 1]);
  });
});
