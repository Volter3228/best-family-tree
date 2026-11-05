import {
  NODE_AVATAR_RADIUS,
  NODE_HEIGHT,
  NODE_WIDTH,
  TEAM_EDGE_DROP,
  TEAM_EDGE_SPREAD_STEP,
  TEAM_EDGE_SPREAD_WIDTH,
  TEAM_EDGE_STUB,
  TEAM_HUB_OFFSET,
  TEAM_NODE_VISUAL_HEIGHT,
} from "@/constants/canvas";
import { trunkRoutes } from "./teamTrunk";
import type { Direction, Point, TeamEdge, TeamFrame } from "@/types";

interface Input {
  axisX: number;
  // Top-left corners of the leader nodes and of every member node.
  leaders: Point[];
  members: { point: Point; row: number }[];
  firstRowTop: number;
  direction: Direction;
}

type Result = Pick<TeamFrame, "edges">;
type Member = Input["members"][number];

const AVATAR_CENTER_X = NODE_WIDTH / 2;
const AVATAR_CENTER_Y = NODE_HEIGHT / 2;
// Edges start this far inside the avatar outline, so no gap shows.
const START_INSET = 2;

// Half-chord of the avatar circle at `offset` from its centre line.
const arc = (offset: number) =>
  Math.sqrt(Math.max(0, NODE_AVATAR_RADIUS ** 2 - offset ** 2));

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
 * leader links to one shared hub point. LR blocks put leaders in a left
 * column and members in a right one; edges run avatar-right to avatar-left.
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

  const fan = ["bezier", "straight"] as TeamEdge["styles"];
  const nearestKey = (value: number, positions: number[]) => {
    let best = 0;
    positions.forEach((p, i) => {
      if (Math.abs(p - value) < Math.abs(positions[best] - value)) best = i;
    });
    return `m${best}`;
  };

  // Left column of leaders, right column of members.
  if (direction === "LR") {
    const multi = leaders.length > 1;
    // Member anchor: the avatar circle's left point (as in LR family edges).
    const memberEnd = (member: Member): Point => ({
      x: member.point.x + AVATAR_CENTER_X - NODE_AVATAR_RADIUS,
      y: member.point.y + AVATAR_CENTER_Y,
    });
    const memberMidY = (member: Member) => member.point.y + AVATAR_CENTER_Y;
    const mids = members.map(memberMidY);

    const edges: TeamEdge[] = [];
    let root: Point;
    if (multi) {
      // Hub centred in the gap between the columns, at the member span's
      // vertical middle.
      const leaderColRight =
        Math.max(...leaders.map((leader) => leader.x)) + NODE_WIDTH;
      const memberColLeft = Math.min(
        ...members.map((member) => member.point.x),
      );
      root = {
        x:
          (leaderColRight + memberColLeft - NODE_AVATAR_RADIUS) / 2 +
          TEAM_HUB_OFFSET,
        y: (mids[0] + mids[mids.length - 1]) / 2,
      };
      leaders.forEach((leader, j) =>
        edges.push({
          start: {
            x: leader.x + AVATAR_CENTER_X + NODE_AVATAR_RADIUS - START_INSET,
            y: leader.y + AVATAR_CENTER_Y,
          },
          end: root,
          fanEnd: true,
          morphKey: `l${j}`,
          styles: fan,
        }),
      );
    } else {
      root = {
        x: leaders[0].x + AVATAR_CENTER_X + NODE_AVATAR_RADIUS,
        y: leaders[0].y + AVATAR_CENTER_Y,
      };
    }

    // Fan routes. A lone leader's edges start on its avatar's right arc.
    const count = members.length;
    const step =
      count > 1 && !multi
        ? Math.min(TEAM_EDGE_SPREAD_STEP, TEAM_EDGE_SPREAD_WIDTH / (count - 1))
        : 0;
    members.forEach((member, i) => {
      const dy = (i - (count - 1) / 2) * step;
      edges.push({
        start: multi
          ? root
          : {
              x:
                leaders[0].x + AVATAR_CENTER_X + arc(dy) - START_INSET,
              y: root.y + dy,
            },
        end: memberEnd(member),
        fanStart: multi,
        morphKey: `m${i}`,
        styles: fan,
      });
    });

    // Spine route: one vertical trunk in the column gap; the root's
    // connector and a stub per member leave it sideways.
    const spineX =
      Math.min(...members.map((m) => m.point.x)) +
      AVATAR_CENTER_X -
      NODE_AVATAR_RADIUS -
      TEAM_EDGE_STUB;
    edges.push(
      ...trunkRoutes(false, spineX, [
        ...members.map((member, i) => ({
          along: mids[i],
          far: memberEnd(member),
          morphKey: `m${i}`,
        })),
        {
          along: root.y,
          far: root,
          morphKey: nearestKey(root.y, mids),
          reverse: true,
        },
      ]),
    );

    return { edges };
  }

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
      ...leaders.map(
        (leader, j): TeamEdge => ({
          start: leaderStart(leader),
          end: h,
          fanEnd: true,
          morphKey: `l${j}`,
          styles: fan,
        }),
      ),
      ...sorted.map((member, i) => toMember(member, h, i)),
      ...trunkEdges(),
    ],
  };
};
