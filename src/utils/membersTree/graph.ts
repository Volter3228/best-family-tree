import {
  ElkExtendedEdge,
  ElkNode,
  LayoutOptions as ElkLayoutOptions,
} from "elkjs/lib/elk.bundled.js";
import elk, { DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION } from "../../libs/elk";
import { Member } from "@/models";
import { TreeEdge, Position, Direction, MemberNode } from "@/types";
import { NODE_HEIGHT, NODE_WIDTH } from "@/constants/canvas";

const getLayoutOptions = (): ElkLayoutOptions => {
  return {
    "elk.algorithm": "mrtree",
    "elk.direction": "DOWN",
    "elk.separateConnectedComponents": "true",
    // Spacing
    "elk.spacing.nodeNode": "100",
    "elk.spacing.componentComponent": "2000",
  };
};

export const transformMembersToFlowValues = (
  members: Member[],
  parentRowIndex: number = 0,
): { nodes: MemberNode[]; edges: TreeEdge[] } => {
  const nodes: MemberNode[] = [];
  const edges: TreeEdge[] = [];

  members.forEach((member) => {
    const mentorId = member.mentorId;
    nodes.push({
      id: member.id,
      type: "member",
      data: { member },
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

export const getLayoutedElements = async (
  nodes: MemberNode[],
  edges: TreeEdge[],
  direction: Direction = FLOW_VIEWPORT_DIRECTION.DESKTOP,
) => {
  // Convert to ELK format
  const elkGraph = getElkGraph(nodes, edges);

  // TODO: Get layout options based on direction for mobile view
  const layoutOptions = getLayoutOptions();

  // Perform layout
  const layoutedGraph = await elk.layout(elkGraph, {
    layoutOptions,
  });

  const [targetPosition, sourcePosition] =
    direction === FLOW_VIEWPORT_DIRECTION.DESKTOP
      ? [Position.Top, Position.Bottom]
      : [Position.Left, Position.Right];

  const layoutedNodes = nodes.map((node, index) => {
    const elkNode = layoutedGraph.children?.[index];
    return {
      ...node,
      targetPosition,
      sourcePosition,
      position: {
        x: elkNode?.x ?? 0,
        y: elkNode?.y ?? 0,
      },
    };
  });

  // Convert back to React Flow format
  return { layoutedNodes, layoutedEdges: edges };
};
