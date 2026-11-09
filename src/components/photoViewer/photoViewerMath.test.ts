import { describe, expect, it } from "vitest";
import {
  MAX_SCALE,
  stepScale,
  clampOffset,
  clampScale,
  coverMorph,
  fitRect,
  viewerFitRect,
  zoomAt,
} from "./photoViewerMath";

describe("clampScale", () => {
  it("limits to the 0.5..6 range", () => {
    expect(clampScale(0.2)).toBe(0.5);
    expect(clampScale(3)).toBe(3);
    expect(clampScale(99)).toBe(MAX_SCALE);
  });
});

describe("zoomAt", () => {
  it("keeps the point under the cursor fixed", () => {
    const state = { scale: 2, x: 30, y: -10 };
    const point = { x: 100, y: 50 };
    const next = zoomAt(state, point, 1.5);
    // image-space coordinate under the point before and after
    const before = {
      x: (point.x - state.x) / state.scale,
      y: (point.y - state.y) / state.scale,
    };
    const after = {
      x: (point.x - next.x) / next.scale,
      y: (point.y - next.y) / next.scale,
    };
    expect(after.x).toBeCloseTo(before.x);
    expect(after.y).toBeCloseTo(before.y);
  });

  it("does not move when the scale is already clamped", () => {
    const state = { scale: 0.5, x: 0, y: 0 };
    expect(zoomAt(state, { x: 40, y: 40 }, 0.5)).toEqual(state);
  });
});

describe("clampOffset", () => {
  const stage = { w: 1000, h: 800 };
  const img = { w: 800, h: 800 };

  it("centers an image smaller than the stage", () => {
    expect(clampOffset({ scale: 1, x: 50, y: 50 }, stage, img)).toEqual({
      x: 0,
      y: 0,
    });
  });

  it("hard clamps to the overflow bound", () => {
    // 800 * 2 = 1600 wide -> bound (1600 - 1000) / 2 = 300
    expect(clampOffset({ scale: 2, x: 500, y: 0 }, stage, img).x).toBe(300);
  });

  it("damps the overflow with resistance", () => {
    expect(clampOffset({ scale: 2, x: 400, y: 0 }, stage, img, 0.5).x).toBe(
      350,
    );
  });
});

describe("fitRect", () => {
  it("fits inside the viewport minus padding, keeping the ratio", () => {
    const r = fitRect({ w: 2000, h: 1000 }, { w: 1032, h: 800 });
    expect(r.w).toBeCloseTo(1000);
    expect(r.h).toBeCloseTo(500);
  });
});

describe("coverMorph", () => {
  it("scales the short side to the thumbnail and crops a centered circle", () => {
    const m = coverMorph(
      { left: 0, top: 0, width: 100, height: 100 },
      { left: 200, top: 100, w: 400, h: 200 },
    );
    expect(m.scale).toBe(0.5);
    expect(m.x).toBe(50 - 400);
    expect(m.y).toBe(50 - 200);
    expect(m.clipPath).toBe("inset(0px 100px 0px 100px round 100px)");
  });
});

describe("stepScale", () => {
  it("moves to the neighbouring preset", () => {
    expect(stepScale(1, -1)).toBe(0.75);
    expect(stepScale(0.75, -1)).toBe(0.5);
    expect(stepScale(0.5, -1)).toBe(0.5);
    expect(stepScale(1.2, 1)).toBe(1.5);
    expect(stepScale(6, 1)).toBe(6);
  });
});

describe("viewerFitRect", () => {
  it("fills small screens and leaves 25% free on large ones", () => {
    const natural = { w: 1000, h: 1000 };
    expect(viewerFitRect(natural, { w: 400, h: 800 }, 0).w).toBeCloseTo(400);
    expect(viewerFitRect(natural, { w: 1600, h: 800 }, 0).h).toBeCloseTo(600);
  });
});
