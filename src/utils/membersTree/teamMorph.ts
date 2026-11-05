import { alignPolylines } from "./edgePolyline";
import { teamEdgePath } from "./teamEdgePath";
import type { Direction, EdgeStyle, Point, TeamEdge } from "@/types";

export interface MorphPair {
  from: Point[];
  to: Point[];
}

const isOrthogonalOnly = (edge: TeamEdge) =>
  edge.styles?.length === 1 && edge.styles[0] === "orthogonal";
const isFanOnly = (edge: TeamEdge) => !!edge.styles && !edge.styles.includes("orthogonal");

// A route collapsed onto its first point: edges with no counterpart grow
// out of / shrink into it.
const collapsed = (path: Point[]): Point[] => [path[0], path[0]];

/**
 * Morph pairs for a line-style switch of one team's edges. Fan edges and
 * orthogonal routes are matched through `key`, so a fan curve slides into
 * the branch that replaces it (and back); routes without a counterpart grow
 * from or shrink into their first point; edges drawn in every style just
 * change shape.
 */
export const teamMorphPairs = (
  edges: TeamEdge[],
  direction: Direction,
  prev: EdgeStyle,
  next: EdgeStyle,
): MorphPair[] => {
  const pairs: MorphPair[] = [];
  const pair = (from: Point[], to: Point[]) => {
    const [a, b] = alignPolylines(from, to);
    pairs.push({ from: a, to: b });
  };

  const crossesOrthogonal = (prev === "orthogonal") !== (next === "orthogonal");
  const path = (edge: TeamEdge, style: EdgeStyle) =>
    teamEdgePath(edge, direction, style);

  const groups = new Map<string, { fan?: TeamEdge; routes: TeamEdge[] }>();
  for (const edge of edges) {
    if (!isFanOnly(edge) && !isOrthogonalOnly(edge)) {
      pair(path(edge, prev), path(edge, next));
      continue;
    }
    const key = edge.morphKey ?? `${edge.start.x},${edge.start.y}`;
    const group = groups.get(key) ?? { routes: [] };
    if (isFanOnly(edge)) group.fan = edge;
    else group.routes.push(edge);
    groups.set(key, group);
  }

  for (const { fan, routes } of groups.values()) {
    if (!crossesOrthogonal) {
      // bezier <-> straight: only fan edges are drawn.
      if (fan) pair(path(fan, prev), path(fan, next));
      continue;
    }
    const toOrthogonal = next === "orthogonal";
    const [main, ...extras] = routes;
    const orthogonalOf = (edge: TeamEdge) => path(edge, "orthogonal");

    if (fan && main) {
      const fanPath = path(fan, toOrthogonal ? prev : next);
      if (toOrthogonal) pair(fanPath, orthogonalOf(main));
      else pair(orthogonalOf(main), fanPath);
    } else if (fan) {
      const fanPath = path(fan, toOrthogonal ? prev : next);
      if (toOrthogonal) pair(fanPath, collapsed(fanPath));
      else pair(collapsed(fanPath), fanPath);
    } else if (main) {
      extras.unshift(main);
    }
    for (const route of extras) {
      const routePath = orthogonalOf(route);
      if (toOrthogonal) pair(collapsed(routePath), routePath);
      else pair(routePath, collapsed(routePath));
    }
  }
  return pairs;
};
