import { describe, expect, it } from "vitest";
import { stackIsolatedNodes } from "./elkLayout";

const ids = ["a", "b", "c", "i1", "i2", "i3"];
const edges = [
  { id: "e1", source: "a", target: "b" },
  { id: "e2", source: "a", target: "c" },
];
const tree = () => [
  { x: 1000, y: 0 },
  { x: 0, y: 500 },
  { x: 2000, y: 5000 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
];

describe("stackIsolatedNodes", () => {
  it("TB: puts isolated nodes in a row below the trees, left to right", () => {
    const p = tree();
    stackIsolatedNodes(ids, edges, p, "TB");
    const row = p.slice(3);
    expect(new Set(row.map((q) => q.y)).size).toBe(1);
    expect(row[0].y).toBeGreaterThan(5000);
    expect(row[0].x).toBe(0);
    expect(row[1].x).toBeGreaterThan(row[0].x);
    expect(row[2].x).toBeGreaterThan(row[1].x);
  });

  it("LR: puts isolated nodes in a column right of the trees, top to bottom", () => {
    const p = tree();
    stackIsolatedNodes(ids, edges, p, "LR");
    const col = p.slice(3);
    expect(new Set(col.map((q) => q.x)).size).toBe(1);
    expect(col[0].x).toBeGreaterThan(2000);
    expect(col[0].y).toBe(0);
    expect(col[1].y).toBeGreaterThan(col[0].y);
    expect(col[2].y).toBeGreaterThan(col[1].y);
  });
});
