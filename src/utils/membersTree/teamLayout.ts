import type { MemberNode, Point, TeamFrame } from "@/types";
import type {
  TeamLayoutInput,
  TeamLayoutRequest,
  TeamLayoutResult,
} from "@/workers/layout/protocol";
import { parseTeamNodeId } from "./teamNodeId";
import { buildTeamBlock } from "./teamBlock";
import type { TeamBlock } from "./teamBlock";
import { packLanes } from "./teamPacking";

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
    points: edge.points?.map((point) => shift(point, frame.x, frame.y)),
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
export const computeTeamLayout = ({
  nodes,
  direction,
}: TeamLayoutRequest): TeamLayoutResult => {
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
      buildTeamBlock(teamId, teamNodes, direction),
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
