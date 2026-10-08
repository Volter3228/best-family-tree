import {
  NODE_WIDTH,
  TEAM_EDGE_DROP,
  TEAM_EDGE_SPREAD_STEP,
  TEAM_EDGE_SPREAD_WIDTH,
  TEAM_EDGE_START_Y,
  TEAM_HUB_OFFSET,
  TEAM_NODE_VISUAL_HEIGHT,
} from "@/constants/canvas";
import type { Point, TeamEdge, TeamFrame } from "@/types";

interface Input {
  axisX: number;
  // Top-left corners of the leader nodes (one row) and of every member node.
  leaders: Point[];
  members: { point: Point; row: number }[];
  firstRowTop: number;
}

type Result = Pick<TeamFrame, "edges">;
type Member = Input["members"][number];

/**
 * Edges from the leader(s) to the members.
 * - Edges start under the leader's card, so the card (drawn above the edges)
 *   hides their origin; starts are spread left to right in the order of their
 *   targets, so edges never cross.
 * - Edges to lower rows reach their column above the first row and drop
 *   straight through the gap between its nodes.
 * - With several leaders every leader links to one shared hub point and all
 *   member edges leave that point at different angles.
 */
export const buildTeamEdges = ({
  axisX,
  leaders,
  members,
  firstRowTop,
}: Input): Result => {
  if (leaders.length === 0 || members.length === 0) {
    return { edges: [] };
  }

  const sorted = [...members].sort((a, b) => a.point.x - b.point.x);
  const count = sorted.length;
  const step =
    count > 1
      ? Math.min(TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH / (count - 1))
      : 0;

  const leaderStart = (leader: Point, dx = 0): Point => ({
    x: leader.x + NODE_WIDTH / 2 + dx,
    y: leader.y + TEAM_EDGE_START_Y,
  });
  const toMember = (member: Member, start: Point, fanStart = false): TeamEdge => ({
    start,
    end: { x: member.point.x + NODE_WIDTH / 2, y: member.point.y },
    bendY: member.row > 0 ? firstRowTop - TEAM_EDGE_DROP : undefined,
    fanStart,
  });

  if (leaders.length === 1) {
    return {
      edges: sorted.map((member, i) =>
        toMember(member, leaderStart(leaders[0], (i - (count - 1) / 2) * step)),
      ),
    };
  }

  const hub: Point = {
    x: axisX,
    y:
      Math.max(...leaders.map((leader) => leader.y)) +
      TEAM_NODE_VISUAL_HEIGHT +
      TEAM_HUB_OFFSET,
  };

  return {
    edges: [
      ...leaders.map(
        (leader): TeamEdge => ({
          start: leaderStart(leader),
          end: hub,
          fanEnd: true,
        }),
      ),
      ...sorted.map((member) => toMember(member, hub, true)),
    ],
  };
};
