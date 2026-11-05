import { FIXED_EDGE_WIDTH } from "@/constants/canvas";
import type { Point, TeamEdge } from "@/types";

export interface TrunkBranch {
  // Position along the trunk where the branch leaves it.
  along: number;
  // The branch's far end, off the trunk's axis.
  far: Point;
  // Pairs the route with the fan edge it morphs from/to (see TeamEdge.morphKey).
  morphKey: string;
  // Run the route from the far end toward the trunk (leader stubs).
  reverse?: boolean;
}

const HALF = FIXED_EDGE_WIDTH / 2;

/**
 * Orthogonal routing: one trunk with a branch on either side of it.
 *
 * Every branch owns its own branch segment plus the piece of trunk between
 * its junction and the next junction toward the middle, so the routes
 * together cover the trunk exactly once — nothing overlaps, so translucent
 * strokes never show darker dots — yet each branch is a single polyline that
 * can be paired with one fan edge for style morphing.
 * - Outermost junctions fold the branch and the trunk into a rounded corner;
 *   inner junctions are sharp T-joints.
 * - The middle junction owns no trunk; its branches start at the trunk's edge.
 * Draw with butt caps. `horizontal` trunks run along x at y = `at`; vertical
 * ones run along y at x = `at`.
 */
export const trunkRoutes = (
  horizontal: boolean,
  at: number,
  branches: TrunkBranch[],
): TeamEdge[] => {
  const near = (along: number): Point =>
    horizontal ? { x: along, y: at } : { x: at, y: along };
  // The trunk's edge facing a branch's far end.
  const edgeToward = (n: Point, far: Point): Point => {
    const sign = Math.sign(horizontal ? far.y - n.y : far.x - n.x);
    return horizontal
      ? { x: n.x, y: n.y + sign * HALF }
      : { x: n.x + sign * HALF, y: n.y };
  };

  const junctions = [...new Set(branches.map((b) => b.along))].sort(
    (a, b) => a - b,
  );
  const middle = Math.floor((junctions.length - 1) / 2);
  const hasTrunk = junctions.length > 1;

  const toEdge = (
    points: Point[],
    branch: TrunkBranch,
    round: number[] = [],
  ): TeamEdge => {
    const last = points.length - 1;
    const ordered = branch.reverse ? [...points].reverse() : points;
    return {
      start: ordered[0],
      end: ordered[last],
      points: ordered,
      round: branch.reverse ? round.map((i) => last - i) : round,
      morphKey: branch.morphKey,
      styles: ["orthogonal"],
    };
  };

  return branches.map((branch) => {
    const n = near(branch.along);
    if (!hasTrunk) return toEdge([n, branch.far], branch);

    const j = junctions.indexOf(branch.along);
    const primary = branches.find((b) => b.along === branch.along) === branch;
    if (!primary || j === middle) {
      return toEdge([edgeToward(n, branch.far), branch.far], branch);
    }

    const inner = near(junctions[j < middle ? j + 1 : j - 1]);
    // Only a lone branch at an outermost junction turns into a rounded corner.
    const outermost = j === 0 || j === junctions.length - 1;
    const alone = branches.filter((b) => b.along === branch.along).length === 1;
    return toEdge(
      [inner, n, branch.far],
      branch,
      outermost && alone ? [1] : [],
    );
  });
};
