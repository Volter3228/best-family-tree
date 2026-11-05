import {
  NODE_WIDTH,
  TEAM_COLUMN_GAP,
  TEAM_FRAME_HEADER,
  TEAM_FRAME_MIN_WIDTH,
  TEAM_FRAME_PADDING,
  TEAM_LEADER_GAP,
  TEAM_MULTI_LEADER_EXTRA_GAP,
  TEAM_NODE_VISUAL_HEIGHT,
  TEAM_ROW_GAP,
} from "@/constants/canvas";
import type { Direction, MemberPosition, Point, TeamFrame } from "@/types";
import type { TeamLayoutInput } from "@/workers/layout/protocol";
import { buildTeamEdges } from "./teamEdges";
import { centeredCenters, planMemberRows } from "./teamRows";

export interface TeamBlock {
  frame: TeamFrame;
  offsets: Map<string, Point>;
  // Lower-cased team type ("" when the team has none) and the team's years
  // (-Infinity when unknown, so such teams count as the oldest and come
  // first), which decide where the frame goes.
  teamTypeName: string;
  startYear: number;
  endYear: number;
}

const getTeamPosition = (nodes: TeamLayoutInput[], teamId: string) => {
  let fallback: MemberPosition | undefined;
  for (const node of nodes) {
    for (const position of node.positions) {
      if (position.teamId !== teamId || !position.team) continue;
      if (position.role?.isLeaderPosition) return position;
      fallback ??= position;
    }
  }
  return fallback;
};

const isLeaderOf = (node: TeamLayoutInput, teamId: string) =>
  node.positions.some(
    (position) => position.teamId === teamId && position.role?.isLeaderPosition,
  );

// Pixi can't decode .ico; Cloudinary serves the same asset as PNG.
const getIconUrl = (url?: string | null) =>
  url && url.includes("res.cloudinary.com")
    ? url.replace(/\.ico(\?.*)?$/i, ".png$1")
    : (url ?? null);

// LR block: a column of leaders on the left, a column of members on the
// right — the team subtree reads left to right like the family tree.
const buildLrTeamBlock = (
  leaders: TeamLayoutInput[],
  members: TeamLayoutInput[],
): { offsets: Map<string, Point>; width: number; height: number } => {
  // Two columns only when both sides exist; a lone column is centred.
  const twoColumns = leaders.length > 0 && members.length > 0;
  const columns = twoColumns ? 2 * NODE_WIDTH + TEAM_COLUMN_GAP : NODE_WIDTH;
  const width = Math.max(columns + TEAM_FRAME_PADDING * 2, TEAM_FRAME_MIN_WIDTH);

  const centeredX = (width - NODE_WIDTH) / 2;
  const memberX = twoColumns
    ? width - TEAM_FRAME_PADDING - NODE_WIDTH
    : centeredX;
  const leaderX = twoColumns ? TEAM_FRAME_PADDING : centeredX;

  const memberSpan =
    members.length * TEAM_NODE_VISUAL_HEIGHT +
    (members.length - 1) * TEAM_ROW_GAP;
  const leaderSpan =
    leaders.length * TEAM_NODE_VISUAL_HEIGHT +
    (leaders.length - 1) * TEAM_ROW_GAP;

  const offsets = new Map<string, Point>();
  const memberY = TEAM_FRAME_HEADER;
  members.forEach((node, i) => {
    offsets.set(node.id, {
      x: memberX,
      y: memberY + i * (TEAM_NODE_VISUAL_HEIGHT + TEAM_ROW_GAP),
    });
  });
  // Leaders are centred on the member column's vertical span.
  const leaderY =
    members.length > 0
      ? memberY + Math.max(0, (memberSpan - leaderSpan) / 2)
      : memberY;
  leaders.forEach((node, i) => {
    offsets.set(node.id, {
      x: leaderX,
      y: leaderY + i * (TEAM_NODE_VISUAL_HEIGHT + TEAM_ROW_GAP),
    });
  });

  return {
    offsets,
    width,
    height: memberY + Math.max(memberSpan, leaderSpan) + TEAM_FRAME_PADDING,
  };
};

export const buildTeamBlock = (
  teamId: string,
  nodes: TeamLayoutInput[],
  direction: Direction,
): TeamBlock => {
  const leaders = nodes.filter((node) => isLeaderOf(node, teamId));
  const members = nodes.filter((node) => !isLeaderOf(node, teamId));

  const leaderCenters = centeredCenters(leaders.length);
  const memberCenters = planMemberRows(members.length);
  const half = Math.max(
    NODE_WIDTH / 2,
    ...[leaderCenters, ...memberCenters]
      .flat()
      .map((c) => Math.abs(c) + NODE_WIDTH / 2),
  );
  const width = Math.max(half * 2 + TEAM_FRAME_PADDING * 2, TEAM_FRAME_MIN_WIDTH);
  const axisX = width / 2;

  const lr = direction === "LR" ? buildLrTeamBlock(leaders, members) : null;
  const offsets = lr?.offsets ?? new Map<string, Point>();

  const place = (row: TeamLayoutInput[], centers: number[], y: number) =>
    row.forEach((node, i) =>
      offsets.set(node.id, { x: axisX + centers[i] - NODE_WIDTH / 2, y }),
    );

  let y = TEAM_FRAME_HEADER;
  let bottom = TEAM_FRAME_HEADER;
  if (!lr) {
    if (leaders.length > 0) {
      place(leaders, leaderCenters, y);
      bottom = y + TEAM_NODE_VISUAL_HEIGHT;
      // Several leaders meet at a hub point first, which needs a taller gap.
      y =
        bottom +
        TEAM_LEADER_GAP +
        (leaders.length > 1 ? TEAM_MULTI_LEADER_EXTRA_GAP : 0);
    }
  }

  const firstRowTop = y;
  const memberRows: TeamLayoutInput[][] = [];
  let memberIndex = 0;
  if (!lr) {
    for (const centers of memberCenters) {
      const row = members.slice(memberIndex, memberIndex + centers.length);
      place(row, centers, y);
      memberRows.push(row);
      memberIndex += centers.length;
      bottom = y + TEAM_NODE_VISUAL_HEIGHT;
      y = bottom + TEAM_ROW_GAP;
    }
  } else {
    members.forEach((node) => memberRows.push([node]));
    bottom = lr.height - TEAM_FRAME_PADDING;
  }

  const { edges } = buildTeamEdges({
    axisX,
    firstRowTop,
    leaders: leaders.map((node) => offsets.get(node.id)!),
    members: memberRows.flatMap((row, rowIndex) =>
      row.map((node) => ({ point: offsets.get(node.id)!, row: rowIndex })),
    ),
    direction,
  });

  const position = getTeamPosition(nodes, teamId);
  const teamType = position?.team?.teamType;
  const team = position?.team;

  return {
    offsets,
    teamTypeName: teamType?.name.toLowerCase() ?? "",
    startYear: team?.startYear ?? team?.endYear ?? -Infinity,
    endYear: team?.endYear ?? team?.startYear ?? -Infinity,
    frame: {
      teamId,
      x: 0,
      y: 0,
      width: lr ? lr.width : width,
      height: bottom + TEAM_FRAME_PADDING,
      name: team?.name ?? "",
      teamTypeName: teamType?.name ?? "",
      color: teamType?.color ?? null,
      // The badge always shows the team type's logo, never the team's own photo.
      iconUrl: getIconUrl(teamType?.iconUrl),
      teamTypeId: position?.team?.teamTypeId ?? null,
      nodeIds: nodes.map((node) => node.id),
      edges,
    },
  };
};
