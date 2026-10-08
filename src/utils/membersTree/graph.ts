import {
  ElkExtendedEdge,
  ElkNode,
  LayoutOptions as ElkLayoutOptions,
} from "elkjs/lib/elk.bundled.js";
import elk, { DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION } from "../../libs/elk";
import { Member } from "@/models";
import {
  type TreeEdge,
  type Direction,
  type MemberNode,
  type Point,
  Position,
} from "@/types";
import { NODE_HEIGHT, NODE_WIDTH } from "@/constants/canvas";
import { hashString } from "../strings";

const PRIMARY_COLOR_COUNT = 3;

// Return ELK settings shared by all tree layouts.
const getLayoutOptions = (): ElkLayoutOptions => {
  return {
    "elk.algorithm": "mrtree",
    "elk.direction": "DOWN",
    "elk.separateConnectedComponents": "true",
    // Spacing
    "elk.spacing.nodeNode": "80",
    "elk.spacing.componentComponent": "2000",
  };
};

// Convert the mentor tree into canvas nodes and edges.
export const transformMembersToFlowValues = (
  members: Member[],
  parentRowIndex: number = 0,
): { nodes: MemberNode[]; edges: TreeEdge[] } => {
  const nodes: MemberNode[] = [];
  const edges: TreeEdge[] = [];

  const groupSeed = members[0]?.mentorId ?? "root";
  const startColorIdx = hashString(groupSeed) % PRIMARY_COLOR_COUNT;

  members.forEach((member, index) => {
    const placeholderColorIndex = (startColorIdx + index) % PRIMARY_COLOR_COUNT;
    const mentorId = member.mentorId;
    nodes.push({
      id: member.id,
      type: "member",
      data: { member, placeholderColorIndex },
      position: DEFAULT_POSITION,
      style: {} as React.CSSProperties,
    });

    if (mentorId) {
      edges.push({
        id: `E_${mentorId}->${member.id}`,
        source: mentorId,
        target: member.id,
        style: {} as React.CSSProperties,
      });
    }

    if (member.mentees.length > 0) {
      const { nodes: transformedNodes, edges: transformedEdges } =
        transformMembersToFlowValues(member.mentees, parentRowIndex + 1);

      nodes.push(...transformedNodes);
      edges.push(...transformedEdges);
    }
  });

  return {
    nodes,
    edges,
  };
};

// Build the unique node ID for one member in one team.
export const getTeamNodeId = (teamId: string, memberId: string) =>
  `team:${teamId}:member:${memberId}`;

// Extract team and member IDs from a team-view node ID.
export const parseTeamNodeId = (nodeId: string) => {
  const [, teamId, , memberId] = nodeId.split(":");
  return { teamId, memberId };
};

// Adapt internal nodes and edges to the graph shape expected by ELK.
const getElkGraph = (nodes: MemberNode[], edges: TreeEdge[]): ElkNode => {
  const elkNodes: ElkNode[] = nodes.map((node) => ({
    ...node,
    width: NODE_WIDTH,
    height: NODE_HEIGHT + 240, // Additional space between node layers
  }));

  const elkEdges: ElkExtendedEdge[] = edges.map((edge) => ({
    ...edge,
    sources: [edge.source],
    targets: [edge.target],
  }));

  return {
    id: "root",
    children: elkNodes,
    edges: elkEdges,
  };
};

// ELK only sees ids and edges (node sizes are constant), so the same structure
// always lays out the same way. Edits that keep the tree's shape (names,
// photos, positions) reuse the previous result instead of running ELK again.
let lastLayout: { key: string; positions: Point[] } | null = null;

// Run ELK and map computed coordinates back onto member nodes.
export const getLayoutedElements = async (
  nodes: MemberNode[],
  edges: TreeEdge[],
  direction: Direction = FLOW_VIEWPORT_DIRECTION.DESKTOP,
) => {
  const key =
    direction +
    "|" +
    nodes.map((node) => node.id).join(",") +
    "|" +
    edges.map((edge) => edge.id).join(",");

  let positions = lastLayout?.key === key ? lastLayout.positions : null;
  if (!positions) {
    // TODO: Get layout options based on direction for mobile view
    const layoutedGraph = await elk.layout(getElkGraph(nodes, edges), {
      layoutOptions: getLayoutOptions(),
    });
    positions = nodes.map((_, index) => ({
      x: layoutedGraph.children?.[index]?.x ?? 0,
      y: layoutedGraph.children?.[index]?.y ?? 0,
    }));
    lastLayout = { key, positions };
  }

  const [targetPosition, sourcePosition] =
    direction === FLOW_VIEWPORT_DIRECTION.DESKTOP
      ? [Position.Top, Position.Bottom]
      : [Position.Left, Position.Right];

  const layoutedNodes = nodes.map((node, index) => ({
    ...node,
    targetPosition,
    sourcePosition,
    position: positions[index],
  }));

  // Convert back to React Flow format
  return { layoutedNodes, layoutedEdges: edges };
};
