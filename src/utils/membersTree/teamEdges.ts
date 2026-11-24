import {
  NODE_WIDTH,
  TEAM_EDGE_DROP,
  TEAM_EDGE_SPREAD_STEP,
  TEAM_EDGE_SPREAD_WIDTH,
  TEAM_HUB_OFFSET,
  TEAM_NODE_VISUAL_HEIGHT,
} from "@/constants/canvas";
import {
  arc,
  AVATAR_CENTER_X,
  AVATAR_CENTER_Y,
  nearestKey,
  START_INSET,
  type TeamMember,
} from "./teamEdgeAnchors";
import { buildLRTeamEdges } from "./teamEdgesLR";
import { trunkRoutes } from "./teamTrunk";
import type { Direction, Point, TeamEdge, TeamFrame } from "@/types";

interface Input {
  axisX: number;
  // Top-left corners of the leader nodes and of every member node.
  leaders: Point[];
  members: TeamMember[];
  firstRowTop: number;
  direction: Direction;
}

type Result = Pick<TeamFrame, "edges">;
type Member = TeamMember;

/**
 * Edges from the leader(s) to the members. Two families of edges are emitted
 * side by side and filtered by line style when drawn, so the style can switch
 * (and morph) without relayout:
 * - fan edges (bezier/straight): one per member; they start on the leader's
 *   avatar outline, spread in the order of their targets so they never cross;
 * - orthogonal routes: one trunk with a branch per member/leader (see
 *   trunkRoutes), paired with the fan edges through `morphKey`.
 * Edges to lower rows reach their column above the first row and drop
 * straight through the gap between its nodes. With several leaders every
 * leader links to one shared hub point. LR blocks: see buildLRTeamEdges.
 */
export const buildTeamEdges = ({
  axisX,
  leaders,
  members,
  firstRowTop,
  direction,
}: Input): Result => {
  if (leaders.length === 0 || members.length === 0) {
    return { edges: [] };
  }

  if (direction === "LR") {
    return { edges: buildLRTeamEdges(leaders, members) };
  }

  const fan = ["bezier", "straight"] as TeamEdge["styles"];

  const sorted = [...members].sort((a, b) => a.point.x - b.point.x);
  const count = sorted.length;
  const step =
    count > 1
      ? Math.min(TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH / (count - 1))
      : 0;
  const memberCx = (member: Member) => member.point.x + NODE_WIDTH / 2;

  // Where an edge leaves a leader: on the avatar's lower arc, `dx` aside.
  const leaderStart = (leader: Point, dx = 0): Point => ({
    x: leader.x + AVATAR_CENTER_X + dx,
    y: leader.y + AVATAR_CENTER_Y + arc(dx) - START_INSET,
  });

  // Fan routes: one edge per member, for bezier and straight styles.
  const toMember = (member: Member, start: Point, i: number): TeamEdge => ({
    start,
    end: { x: memberCx(member), y: member.point.y },
    bendY: member.row > 0 ? firstRowTop - TEAM_EDGE_DROP : undefined,
    fanStart: true,
    endsOnAvatar: true,
    morphKey: `m${i}`,
    styles: fan,
  });

  // Orthogonal route: a stub from every leader down to one shared horizontal
  // trunk above the first row — a single horizontal line — and a drop from
  // the trunk to each member, no matter which row it sits in.
  const trunkEdges = (): TeamEdge[] => {
    const xs = sorted.map(memberCx);
    return trunkRoutes(true, firstRowTop - TEAM_EDGE_DROP, [
      ...sorted.map((member, i) => ({
        along: xs[i],
        far: { x: xs[i], y: member.point.y },
        morphKey: `m${i}`,
      })),
      ...leaders.map((leader, j) => {
        const start = leaderStart(leader);
        return {
          along: start.x,
          far: start,
          morphKey: leaders.length > 1 ? `l${j}` : nearestKey(start.x, xs),
          reverse: true,
        };
      }),
    ]);
  };

  if (leaders.length === 1) {
    return {
      edges: [
        ...sorted.map((member, i) =>
          toMember(
            member,
            leaderStart(leaders[0], (i - (count - 1) / 2) * step),
            i,
          ),
        ),
        ...trunkEdges(),
      ],
    };
  }

  const h: Point = {
    x: axisX,
    y:
      Math.max(...leaders.map((leader) => leader.y)) +
      TEAM_NODE_VISUAL_HEIGHT +
      TEAM_HUB_OFFSET,
  };

  return {
    edges: [
      ...leaders.map((leader, j): TeamEdge => ({
        start: leaderStart(leader),
        end: h,
        fanEnd: true,
        morphKey: `l${j}`,
        styles: fan,
      })),
      ...sorted.map((member, i) => toMember(member, h, i)),
      ...trunkEdges(),
    ],
  };
};
