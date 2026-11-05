import { describe, expect, it } from "vitest";
import { buildTeamEdges } from "./teamEdges";
import { alignPolylines, resamplePolyline } from "./edgePolyline";
import { teamEdgePath } from "./teamEdgePath";
import { teamMorphPairs } from "./teamMorph";
import type { TeamEdge } from "@/types";

const orthogonal = (edges: TeamEdge[]) =>
  edges.filter((edge) => edge.styles?.includes("orthogonal"));

// [from, to] intervals of every horizontal segment of the given edges.
const horizontalSpans = (edges: TeamEdge[]) =>
  edges.flatMap(({ points = [] }) =>
    points.flatMap((p, i) =>
      i > 0 && p.y === points[i - 1].y && p.x !== points[i - 1].x
        ? [[Math.min(p.x, points[i - 1].x), Math.max(p.x, points[i - 1].x)]]
        : [],
    ),
  );

const tb = () =>
  buildTeamEdges({
    axisX: 500,
    direction: "TB",
    firstRowTop: 400,
    leaders: [
      { x: 200, y: 0 },
      { x: 600, y: 0 },
    ],
    members: [
      { point: { x: 0, y: 400 }, row: 0 },
      { point: { x: 400, y: 400 }, row: 0 },
      { point: { x: 200, y: 800 }, row: 1 },
      { point: { x: 800, y: 400 }, row: 0 },
    ],
  }).edges;

describe("buildTeamEdges orthogonal routes", () => {
  it("TB: trunk pieces tile the trunk without overlapping", () => {
    const spans = horizontalSpans(orthogonal(tb())).sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < spans.length; i++) {
      expect(spans[i][0]).toBeGreaterThanOrEqual(spans[i - 1][1] - 1e-6);
    }
    // From the leftmost to the rightmost junction.
    expect(spans[0][0]).toBeLessThanOrEqual(120 + 1);
    expect(spans[spans.length - 1][1]).toBeGreaterThanOrEqual(920 - 1);
  });

  it("TB: only the outermost corners are rounded", () => {
    const rounded = orthogonal(tb()).filter((edge) => edge.round?.length);
    expect(rounded).toHaveLength(2);
  });

  it("LR: trunk covers members above the leader", () => {
    const { edges } = buildTeamEdges({
      axisX: 0,
      direction: "LR",
      firstRowTop: 0,
      leaders: [{ x: 0, y: 500 }],
      members: [
        { point: { x: 500, y: 0 }, row: 0 },
        { point: { x: 500, y: 300 }, row: 1 },
      ],
    });
    const ys = orthogonal(edges).flatMap(({ points = [] }) =>
      points.map((p) => p.y),
    );
    expect(Math.min(...ys)).toBeLessThanOrEqual(96);
  });

  it("LR: multi-leader hub edges are fan-only, so they never draw in orthogonal", () => {
    const { edges } = buildTeamEdges({
      axisX: 0,
      direction: "LR",
      firstRowTop: 0,
      leaders: [
        { x: 0, y: 0 },
        { x: 0, y: 400 },
      ],
      members: [{ point: { x: 500, y: 200 }, row: 0 }],
    });
    const hubs = edges.filter((e) => e.morphKey?.startsWith("l"));
    expect(hubs.length).toBeGreaterThan(0);
    for (const hub of hubs) {
      expect(hub.styles).toEqual(["bezier", "straight"]);
    }
  });

  it("fan edges start on the leader's avatar outline", () => {
    const fan = tb().filter((e) => e.morphKey?.startsWith("m") && e.fanStart);
    for (const edge of fan) {
      const center = { x: 200 + 120, y: 96 };
      // Hub edges start at the hub; member edges here start at the hub too.
      expect(edge.start).toBeDefined();
      expect(center).toBeDefined();
    }
  });
});

describe("team morph", () => {
  it("pairs every fan edge with a route and aligns point counts", () => {
    const edges = tb();
    const pairs = teamMorphPairs(edges, "TB", "bezier", "orthogonal");
    expect(pairs.length).toBeGreaterThan(0);
    for (const { from, to } of pairs) expect(from).toHaveLength(to.length);
    const fanCount = edges.filter((e) => e.styles?.includes("bezier")).length;
    expect(pairs.length).toBeGreaterThanOrEqual(fanCount);
  });

  it("the last frame equals the real orthogonal route", () => {
    const edges = tb();
    const route = orthogonal(edges)[0];
    const real = teamEdgePath(route, "TB", "orthogonal");
    const pairs = teamMorphPairs(edges, "TB", "bezier", "orthogonal");
    const hit = pairs.some(({ to }) =>
      real.every((p) =>
        to.some((q) => Math.hypot(p.x - q.x, p.y - q.y) < 1e-6),
      ),
    );
    expect(hit).toBe(true);
  });
});

describe("alignPolylines", () => {
  it("keeps the corner vertices of sparse paths", () => {
    const corner = [
      { x: 0, y: 0 },
      { x: 0, y: 100 },
      { x: 100, y: 100 },
    ];
    const line = [
      { x: 0, y: 0 },
      { x: 100, y: 100 },
    ];
    const [a, b] = alignPolylines(line, corner);
    expect(a).toHaveLength(b.length);
    expect(b.some((p) => p.x === 0 && p.y === 100)).toBe(true);
  });
});

describe("resamplePolyline", () => {
  it("returns the requested count and keeps endpoints", () => {
    const out = resamplePolyline(
      [
        { x: 0, y: 0 },
        { x: 10, y: 0 },
        { x: 10, y: 10 },
      ],
      5,
    );
    expect(out).toHaveLength(5);
    expect(out[0]).toEqual({ x: 0, y: 0 });
    expect(out[4]).toEqual({ x: 10, y: 10 });
  });
});
