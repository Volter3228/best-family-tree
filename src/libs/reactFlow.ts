import { type Node, type Edge } from "@xyflow/react";
import dagre from "@dagrejs/dagre";
import dagreGraph, {
  DEFAULT_NODE_HEIGHT,
  DEFAULT_NODE_WIDTH,
} from "./dagreGraph";
import { Member, Mentor, Position } from "@/types";
import { isMentor } from "@/server/src/utils";

// const DEFAULT_EDGE_TYPE = "bezier";
const DEFAULT_POSITION = { x: 0, y: 0 };

export const transformMembersToFlowValues = (
  members: (Member | Mentor)[],
  parentRowIndex: number = 0
): { nodes: Node[]; edges: Edge[] } => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  members.forEach((member, index) => {
    nodes.push({
      id: member.id,
      type: "member",
      data: { ...member, mentees: undefined },
      position: DEFAULT_POSITION,
      connectable: false,
      draggable: false,
      // mentor-index - the index of the row where the parent node is located
      // node-index - the position index of the node within the parent's children
      style: {
        "--parent-row-index": parentRowIndex,
        "--node-index": index,
      } as React.CSSProperties,
    });

    const mentorId = member.mentorId;
    if (mentorId) {
      edges.push({
        id: `E_${mentorId}->${member.id}`,
        source: mentorId,
        target: member.id,
        focusable: false,
        reconnectable: false,
        style: {
          "--parent-row-index": parentRowIndex,
          // edge-index -  the position index of the edge within the edges connected to the node
          "--edge-index": index,
        } as React.CSSProperties,
      });
    }

    if (isMentor(member)) {
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

export const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      height: DEFAULT_NODE_HEIGHT,
      width: DEFAULT_NODE_WIDTH,
    });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const newNode: Node = {
      ...node,
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      // Shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      position: {
        x: nodeWithPosition.x - DEFAULT_NODE_WIDTH / 2,
        y: nodeWithPosition.y - DEFAULT_NODE_HEIGHT / 2,
      },
    };

    return newNode;
  });

  return { layoutedNodes, layoutedEdges: edges };
};
