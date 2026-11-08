import { describe, expect, it } from "vitest";
import { packLanes } from "./teamPacking";

const tall = (n: number) =>
  Array.from({ length: n }, (_, i) => ({ width: 700, height: 1500 + i * 50 }));

describe("packLanes", () => {
  it("TB: fills rows left to right, then moves down", () => {
    const spots = packLanes([tall(12)], "TB");
    for (let i = 1; i < spots.length; i++) {
      const [prev, cur] = [spots[i - 1], spots[i]];
      expect(cur.y > prev.y || (cur.y === prev.y && cur.x > prev.x)).toBe(true);
    }
    expect(new Set(spots.map((s) => s.y)).size).toBeGreaterThan(1);
  });

  it("LR: fills columns top to bottom, then moves right", () => {
    const spots = packLanes([tall(12)], "LR");
    for (let i = 1; i < spots.length; i++) {
      const [prev, cur] = [spots[i - 1], spots[i]];
      expect(cur.x > prev.x || (cur.x === prev.x && cur.y > prev.y)).toBe(true);
    }
    expect(new Set(spots.map((s) => s.x)).size).toBeGreaterThan(1);
  });

  it("LR: keeps the order across lanes and never overlaps frames", () => {
    const lanes = [tall(3), tall(4), tall(2)];
    const sizes = lanes.flat();
    const spots = packLanes(lanes, "LR");
    expect(spots).toHaveLength(sizes.length);
    for (let i = 0; i < spots.length; i++) {
      for (let j = i + 1; j < spots.length; j++) {
        const [a, b] = [spots[i], spots[j]];
        const apart =
          a.x + sizes[i].width <= b.x ||
          b.x + sizes[j].width <= a.x ||
          a.y + sizes[i].height <= b.y ||
          b.y + sizes[j].height <= a.y;
        expect(apart).toBe(true);
      }
    }
  });

  it("does not reuse a cached packing across directions", () => {
    const lanes = [tall(12)];
    const tb = packLanes(lanes, "TB");
    const lr = packLanes(lanes, "LR");
    expect(lr).not.toEqual(tb);
    expect(packLanes(lanes, "TB")).toEqual(tb);
  });
});
