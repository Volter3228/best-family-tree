import Member from "@/models/Member";
import dagre from "@dagrejs/dagre";
import { type Edge, type Node } from "@xyflow/react";
import { Position } from "@/types";
import { DagreDirection } from "@/types/reactFlow";
import dagreGraph, {
  DEFAULT_NODE_HEIGHT,
  DEFAULT_NODE_WIDTH,
  FLOW_DIRECTION,
} from "./dagreGraph";

const DEFAULT_POSITION = { x: 0, y: 0 };

export const transformMembersToFlowValues = (
  members: Member[],
  parentRowIndex: number = 0
): { nodes: Node[]; edges: Edge[] } => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  members.forEach((member, index) => {
    const mentorId = member.mentorId;
    nodes.push({
      id: member.id,
      type: "member",
      data: { member },
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

    if (mentorId) {
      edges.push({
        id: `E_${mentorId}->${member.id}`,
        type: "customEdge",
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

    if (member.isMentor() && member.mentees.length) {
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

export const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction: DagreDirection = FLOW_DIRECTION.DESKTOP
) => {
  dagreGraph.setGraph({
    rankdir: direction,
    ranksep: 300,
    nodesep: 50,
  });

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
      data: { ...node.data, direction },
      targetPosition: direction === "TB" ? Position.Top : Position.Left,
      sourcePosition: direction === "TB" ? Position.Bottom : Position.Right,
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
