import { describe, expect, it } from "vitest";
import { NODE_WIDTH } from "@/constants/canvas";
import type { Direction, Point } from "@/types";
import { arrangeComponents, NODE_EXTENT } from "./arrangeComponents";

// ELK-style strip: `count` mentor→mentee pairs one after another, plus
// `isolated` nodes without links.
const strip = (count: number, isolated: number) => {
  const nodeIds: string[] = [];
  const edges: { id: string; source: string; target: string }[] = [];
  const positions: Point[] = [];
  for (let k = 0; k < count; k++) {
    nodeIds.push(`m${k}`, `c${k}`);
    edges.push({ id: `e${k}`, source: `m${k}`, target: `c${k}` });
    positions.push({ x: 0, y: k * 1000 }, { x: 0, y: k * 1000 + 400 });
  }
  for (let k = 0; k < isolated; k++) {
    nodeIds.push(`i${k}`);
    positions.push({ x: 0, y: 0 });
  }
  return { nodeIds, edges, positions };
};

const bounds = (points: Point[]) => ({
  minX: Math.min(...points.map((p) => p.x)),
  minY: Math.min(...points.map((p) => p.y)),
  maxX: Math.max(...points.map((p) => p.x + NODE_WIDTH)),
  maxY: Math.max(...points.map((p) => p.y + NODE_EXTENT)),
});

const arrange = (count: number, isolated: number, direction: Direction) => {
  const s = strip(count, isolated);
  arrangeComponents(s.nodeIds, s.edges, s.positions, direction);
  return s.positions;
};

describe("arrangeComponents", () => {
  it("keeps each tree's inner layout", () => {
    const p = arrange(30, 0, "TB");
    for (let k = 0; k < 30; k++) {
      expect(p[2 * k + 1].x - p[2 * k].x).toBe(0);
      expect(p[2 * k + 1].y - p[2 * k].y).toBe(400);
    }
  });

  it("never overlaps nodes", () => {
    for (const direction of ["TB", "LR"] as const) {
      const p = arrange(25, 17, direction);
      for (let i = 0; i < p.length; i++) {
        for (let j = i + 1; j < p.length; j++) {
          const apart =
            Math.abs(p[i].x - p[j].x) >= NODE_WIDTH ||
            Math.abs(p[i].y - p[j].y) >= NODE_EXTENT;
          expect(apart).toBe(true);
        }
      }
    }
  });

  it("packs many small trees into a block, not a strip", () => {
    const tb = bounds(arrange(60, 0, "TB"));
    const tbAspect = (tb.maxX - tb.minX) / (tb.maxY - tb.minY);
    expect(tbAspect).toBeGreaterThan(1);
    expect(tbAspect).toBeLessThan(4);

    const lr = bounds(arrange(60, 0, "LR"));
    const lrAspect = (lr.maxY - lr.minY) / (lr.maxX - lr.minX);
    expect(lrAspect).toBeGreaterThan(1);
    expect(lrAspect).toBeLessThan(4);
  });

  it("TB: puts isolated nodes in a grid below the trees", () => {
    const p = arrange(5, 40, "TB");
    const trees = bounds(p.slice(0, 10));
    const grid = p.slice(10);
    for (const q of grid) expect(q.y).toBeGreaterThan(trees.maxY);
    expect(new Set(grid.map((q) => q.y)).size).toBeGreaterThan(1);
    expect(grid[1].x).toBeGreaterThan(grid[0].x);
  });

  it("LR: puts isolated nodes in a grid right of the trees", () => {
    const p = arrange(5, 40, "LR");
    const trees = bounds(p.slice(0, 10));
    const grid = p.slice(10);
    for (const q of grid) expect(q.x).toBeGreaterThan(trees.maxX);
    expect(new Set(grid.map((q) => q.x)).size).toBeGreaterThan(1);
    expect(grid[1].y).toBeGreaterThan(grid[0].y);
  });

  it("lays out isolated nodes only as a near-square grid", () => {
    const p = arrange(0, 100, "TB");
    expect(new Set(p.map((q) => q.x)).size).toBe(10);
    expect(new Set(p.map((q) => q.y)).size).toBe(10);
  });
});
