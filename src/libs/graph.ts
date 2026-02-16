import {
  ElkExtendedEdge,
  ElkNode,
  LayoutOptions as ElkLayoutOptions,
} from "elkjs/lib/elk.bundled.js";
import Member from "@/models/Member";
import { type Edge, type Node } from "@xyflow/react";
import { Position } from "@/types";
import elk, { DEFAULT_POSITION, FLOW_VIEWPORT_DIRECTION } from "./elk";
import { NODE_HEIGHT, NODE_WIDTH } from "@/constants/pixi";
import { Direction, MemberNode } from "@/types/reactFlow";

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
): { nodes: MemberNode[]; edges: Edge[] } => {
  const nodes: MemberNode[] = [];
  const edges: Edge[] = [];

  members.forEach((member, index) => {
    const mentorId = member.mentorId;
    nodes.push({
      id: member.id,
      type: "member",
      data: { member },
      position: DEFAULT_POSITION,
      // mentor-index - the index of the row where the parent node is located
      // node-index - the position index of the node within the parent's children
      style: {
        "--parent-row-index": parentRowIndex,
        "--node-index": index,
      } as React.CSSProperties,
    });

    if (mentorId) {
      edges.push({
        id: `E_${mentorId}->${member.id}`,
        type: "simpleBezier",
        source: mentorId,
        target: member.id,
        focusable: false,
        reconnectable: false,
        selected: false,
        style: {
          "--parent-row-index": parentRowIndex,
          // edge-index -  the position index of the edge within the edges connected to the node
          "--edge-index": index,
          "--node-edges-count": members.length ?? 0,
          "--random-offset": Math.random() * 3.5,
        } as React.CSSProperties,
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

const getElkGraph = (nodes: Node[], edges: Edge[]): ElkNode => {
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
  nodes: Node[],
  edges: Edge[],
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
