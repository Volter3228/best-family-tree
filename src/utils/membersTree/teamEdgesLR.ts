import {
  FIXED_EDGE_WIDTH,
  NODE_AVATAR_RADIUS,
  NODE_WIDTH,
  TEAM_EDGE_SPREAD_STEP,
  TEAM_EDGE_SPREAD_WIDTH,
  TEAM_EDGE_STUB,
  TEAM_HUB_OFFSET,
} from "@/constants/canvas";
import {
  arc,
  AVATAR_CENTER_X,
  AVATAR_CENTER_Y,
  nearestKey,
  START_INSET,
  type TeamMember,
} from "./teamEdgeAnchors";
import { trunkRoutes } from "./teamTrunk";
import type { Point, TeamEdge } from "@/types";

/**
 * LR team edges: leaders in a left column, members in a right one; edges run
 * avatar-right to avatar-left. See buildTeamEdges for the two edge families.
 * Orthogonal routes use a vertical member spine in the column gap; with
 * several leaders a second spine at the hub collects the leaders and one
 * connector joins it to the member spine.
 */
export const buildLRTeamEdges = (
  leaders: Point[],
  members: TeamMember[],
): TeamEdge[] => {
  const fan = ["bezier", "straight"] as TeamEdge["styles"];
  const multi = leaders.length > 1;
  // Member anchor: the avatar circle's left point (as in LR family edges).
  const memberEnd = (member: TeamMember): Point => ({
    x: member.point.x + AVATAR_CENTER_X - NODE_AVATAR_RADIUS,
    y: member.point.y + AVATAR_CENTER_Y,
  });
  const mids = members.map((member) => member.point.y + AVATAR_CENTER_Y);
  const leaderStart = (leader: Point): Point => ({
    x: leader.x + AVATAR_CENTER_X + NODE_AVATAR_RADIUS - START_INSET,
    y: leader.y + AVATAR_CENTER_Y,
  });

  const edges: TeamEdge[] = [];
  let root: Point;
  if (multi) {
    // Hub centred in the gap between the columns, at the member span's
    // vertical middle.
    const leaderColRight =
      Math.max(...leaders.map((leader) => leader.x)) + NODE_WIDTH;
    const memberColLeft = Math.min(...members.map((member) => member.point.x));
    root = {
      x:
        (leaderColRight + memberColLeft - NODE_AVATAR_RADIUS) / 2 +
        TEAM_HUB_OFFSET,
      y: (mids[0] + mids[mids.length - 1]) / 2,
    };
    leaders.forEach((leader, j) =>
      edges.push({
        start: leaderStart(leader),
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
            x: leaders[0].x + AVATAR_CENTER_X + arc(dy) - START_INSET,
            y: root.y + dy,
          },
      end: memberEnd(member),
      fanStart: multi,
      morphKey: `m${i}`,
      styles: fan,
    });
  });

  // Member spine in the column gap; a stub per member leaves it sideways.
  const spineX =
    Math.min(...members.map((m) => m.point.x)) +
    AVATAR_CENTER_X -
    NODE_AVATAR_RADIUS -
    TEAM_EDGE_STUB;
  const memberBranches = members.map((member, i) => ({
    along: mids[i],
    far: memberEnd(member),
    morphKey: `m${i}`,
  }));
  const connectorKey = nearestKey(root.y, mids);

  if (!multi) {
    edges.push(
      ...trunkRoutes(false, spineX, [
        ...memberBranches,
        { along: root.y, far: root, morphKey: connectorKey, reverse: true },
      ]),
    );
    return edges;
  }

  // Leader spine at the hub: a stub to every leader and a connector at the
  // hub's height that stops at the member spine's edge, so the two never
  // overlap. root.y lies within the member span, so the member spine passes it.
  const connectorEnd = {
    x: count > 1 ? spineX - FIXED_EDGE_WIDTH / 2 : spineX,
    y: root.y,
  };
  edges.push(
    ...trunkRoutes(false, spineX, memberBranches),
    ...trunkRoutes(false, root.x, [
      ...leaders.map((leader, j) => ({
        along: leaderStart(leader).y,
        far: leaderStart(leader),
        morphKey: `l${j}`,
        reverse: true,
      })),
      { along: root.y, far: connectorEnd, morphKey: connectorKey },
    ]),
  );
  return edges;
};
