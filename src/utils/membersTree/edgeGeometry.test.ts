import { describe, expect, it } from "vitest";
import {
  NODE_AVATAR_RADIUS,
  NODE_HEIGHT,
  NODE_WIDTH,
} from "@/constants/canvas";
import { edgeGeometry } from "./edgeGeometry";

const source = { x: 0, y: 0 };
const target = { x: 300, y: 500 };

describe("edgeGeometry", () => {
  it("connects bottom-center to top-center in TB", () => {
    const { start, end } = edgeGeometry(source, target, "TB", "straight");
    expect(start).toEqual({ x: NODE_WIDTH / 2, y: NODE_HEIGHT });
    expect(end).toEqual({ x: target.x + NODE_WIDTH / 2, y: target.y });
  });

  it("connects right-center to left-center of the avatar in LR", () => {
    const { start, end } = edgeGeometry(source, target, "LR", "straight");
    expect(start).toEqual({
      x: NODE_WIDTH / 2 + NODE_AVATAR_RADIUS,
      y: NODE_HEIGHT / 2,
    });
    expect(end).toEqual({
      x: target.x + NODE_WIDTH / 2 - NODE_AVATAR_RADIUS,
      y: target.y + NODE_HEIGHT / 2,
    });
  });

  it("places bezier control points halfway along the flow axis in TB", () => {
    const { start, end, cp1, cp2 } = edgeGeometry(
      source,
      target,
      "TB",
      "bezier",
    );
    const offset = Math.abs(end.y - start.y) * 0.5;
    expect(cp1).toEqual({ x: start.x, y: start.y + offset });
    expect(cp2).toEqual({ x: end.x, y: end.y - offset });
  });

  it("places bezier control points halfway along the flow axis in LR", () => {
    const { start, end, cp1, cp2 } = edgeGeometry(
      source,
      target,
      "LR",
      "bezier",
    );
    const offset = Math.abs(end.x - start.x) * 0.5;
    expect(cp1).toEqual({ x: start.x + offset, y: start.y });
    expect(cp2).toEqual({ x: end.x - offset, y: end.y });
  });

  it("returns no control points for straight edges", () => {
    const geo = edgeGeometry(source, target, "TB", "straight");
    expect(geo.cp1).toBeUndefined();
    expect(geo.cp2).toBeUndefined();
    expect(geo.elbows).toBeUndefined();
  });

  it("bends orthogonal edges at the flow-axis midpoint", () => {
    const tb = edgeGeometry(source, target, "TB", "orthogonal");
    const midY = (tb.start.y + tb.end.y) / 2;
    expect(tb.elbows).toEqual([
      { x: tb.start.x, y: midY },
      { x: tb.end.x, y: midY },
    ]);

    const lr = edgeGeometry(source, target, "LR", "orthogonal");
    const midX = (lr.start.x + lr.end.x) / 2;
    expect(lr.elbows).toEqual([
      { x: midX, y: lr.start.y },
      { x: midX, y: lr.end.y },
    ]);
  });
});
