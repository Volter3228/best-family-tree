import {
  NODE_WIDTH,
  TEAM_FRAME_HEADER,
  TEAM_FRAME_MIN_WIDTH,
  TEAM_FRAME_PADDING,
  TEAM_LEADER_GAP,
  TEAM_MULTI_LEADER_EXTRA_GAP,
  TEAM_NODE_VISUAL_HEIGHT,
  TEAM_ROW_GAP,
} from "@/constants/canvas";
import type { MemberNode, MemberPosition, Point, TeamFrame } from "@/types";
import type {
  TeamLayoutInput,
  TeamLayoutResult,
} from "@/workers/layout/protocol";
import { parseTeamNodeId } from "./teamNodeId";
import { buildTeamEdges } from "./teamEdges";
import { packLanes } from "./teamPacking";
import { centeredCenters, planMemberRows } from "./teamRows";

interface TeamBlock {
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

const buildTeamBlock = (
  teamId: string,
  nodes: TeamLayoutInput[],
): TeamBlock => {
  const leaders = nodes.filter((node) => isLeaderOf(node, teamId));
  const members = nodes.filter((node) => !isLeaderOf(node, teamId));

  const leaderCenters = centeredCenters(leaders.length);
  const memberCenters = planMemberRows(members.length);
  const half = Math.max(
    NODE_WIDTH / 2,
    ...[leaderCenters, ...memberCenters].flat().map((c) => Math.abs(c) + NODE_WIDTH / 2),
  );
  const width = Math.max(half * 2 + TEAM_FRAME_PADDING * 2, TEAM_FRAME_MIN_WIDTH);
  const axisX = width / 2;

  const offsets = new Map<string, Point>();
  const place = (row: TeamLayoutInput[], centers: number[], y: number) =>
    row.forEach((node, i) =>
      offsets.set(node.id, { x: axisX + centers[i] - NODE_WIDTH / 2, y }),
    );

  let y = TEAM_FRAME_HEADER;
  let bottom = TEAM_FRAME_HEADER;
  if (leaders.length > 0) {
    place(leaders, leaderCenters, y);
    bottom = y + TEAM_NODE_VISUAL_HEIGHT;
    // Several leaders meet at a hub point first, which needs a taller gap.
    y =
      bottom +
      TEAM_LEADER_GAP +
      (leaders.length > 1 ? TEAM_MULTI_LEADER_EXTRA_GAP : 0);
  }

  const firstRowTop = y;
  const memberRows: TeamLayoutInput[][] = [];
  let memberIndex = 0;
  for (const centers of memberCenters) {
    const row = members.slice(memberIndex, memberIndex + centers.length);
    place(row, centers, y);
    memberRows.push(row);
    memberIndex += centers.length;
    bottom = y + TEAM_NODE_VISUAL_HEIGHT;
    y = bottom + TEAM_ROW_GAP;
  }

  const { edges } = buildTeamEdges({
    axisX,
    firstRowTop,
    leaders: leaders.map((node) => offsets.get(node.id)!),
    members: memberRows.flatMap((row, rowIndex) =>
      row.map((node) => ({ point: offsets.get(node.id)!, row: rowIndex })),
    ),
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
      width,
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

const shift = (point: Point, dx: number, dy: number): Point => ({
  x: point.x + dx,
  y: point.y + dy,
});

// Edge geometry is built in frame-local coordinates; move it to the world.
const moveEdgesToWorld = (frame: TeamFrame) => {
  frame.edges = frame.edges.map((edge) => ({
    ...edge,
    start: shift(edge.start, frame.x, frame.y),
    end: shift(edge.end, frame.x, frame.y),
    bendY: edge.bendY === undefined ? undefined : edge.bendY + frame.y,
  }));
};

// One lane per team type (alphabetical, teams without a type last); inside a
// lane teams are in chronological order, so newer teams come later.
const groupIntoLanes = (blocks: TeamBlock[]): TeamBlock[][] => {
  const byType = new Map<string, TeamBlock[]>();
  for (const block of blocks) {
    const lane = byType.get(block.teamTypeName) ?? [];
    lane.push(block);
    byType.set(block.teamTypeName, lane);
  }

  return Array.from(byType)
    .sort(([a], [b]) => (a === "" ? 1 : b === "" ? -1 : a.localeCompare(b, "uk")))
    .map(([, lane]) =>
      lane.sort(
        (a, b) =>
          a.startYear - b.startYear ||
          a.endYear - b.endYear ||
          a.frame.name.localeCompare(b.frame.name, "uk"),
      ),
    );
};

/**
 * Lay out team nodes: each team is a compact block (leaders on top, members
 * below) wrapped in a frame; frames are then laid out in lanes by team type.
 * Returns the position of every node and the frames.
 */
export const computeTeamLayout = (
  nodes: TeamLayoutInput[],
): TeamLayoutResult => {
  const nodesByTeam = new Map<string, TeamLayoutInput[]>();
  for (const node of nodes) {
    const { teamId } = parseTeamNodeId(node.id);
    if (!teamId) continue;
    const teamNodes = nodesByTeam.get(teamId) ?? [];
    teamNodes.push(node);
    nodesByTeam.set(teamId, teamNodes);
  }

  const lanes = groupIntoLanes(
    Array.from(nodesByTeam, ([teamId, teamNodes]) =>
      buildTeamBlock(teamId, teamNodes),
    ),
  );
  const blocks = lanes.flat();
  if (blocks.length === 0) return { positions: new Map(), frames: [] };

  const spots = packLanes(lanes.map((lane) => lane.map(({ frame }) => frame)));
  const positions = new Map<string, Point>();
  blocks.forEach(({ frame, offsets }, i) => {
    frame.x = spots[i].x;
    frame.y = spots[i].y;
    moveEdgesToWorld(frame);
    offsets.forEach((offset, nodeId) =>
      positions.set(nodeId, { x: frame.x + offset.x, y: frame.y + offset.y }),
    );
  });

  return { positions, frames: blocks.map(({ frame }) => frame) };
};

// Only the member's positions in the node's own team matter for the layout.
export const toTeamLayoutInputs = (nodes: MemberNode[]): TeamLayoutInput[] =>
  nodes.map((node) => {
    const { teamId } = parseTeamNodeId(node.id);
    return {
      id: node.id,
      positions: node.data.member.positions.filter(
        (position) => position.teamId === teamId,
      ),
    };
  });

export const applyTeamLayout = (
  nodes: MemberNode[],
  positions: Map<string, Point>,
): MemberNode[] =>
  nodes.map((node) => ({
    ...node,
    position: positions.get(node.id) ?? node.position,
  }));
