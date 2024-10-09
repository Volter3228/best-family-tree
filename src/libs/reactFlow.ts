import { type Node, type Edge } from "@xyflow/react";
import dagre from "@dagrejs/dagre";
import dagreGraph, {
  DEFAULT_NODE_HEIGHT,
  DEFAULT_NODE_WIDTH,
} from "./dagreGraph";
import { Member, Mentor } from "@/types";
import { isMentor } from "@/server/src/utils";

const DEFAULT_EDGE_TYPE = "smoothstep";
const DEFAULT_POSITION = { x: 0, y: 0 };

export const transformMembersToFlowValues = (
  members: (Member | Mentor)[],
): { nodes: Node[]; edges: Edge[] } => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  members.forEach((member) => {
    const nodeType = !member.mentorId
      ? "input"
      : !isMentor(member)
        ? "output"
        : undefined;

    nodes.push({
      id: member.id,
      type: nodeType,
      data: { label: member.name },
      position: DEFAULT_POSITION,
      connectable: false,
    });

    const mentorId = member.mentorId;
    if (mentorId) {
      edges.push({
        id: `E_${mentorId}->${member.id}`,
        source: mentorId,
        target: member.id,
        type: DEFAULT_EDGE_TYPE,
        selectable: false,
      });
    }

    if (isMentor(member) && member.mentees && member.mentees.length) {
      const { nodes: transformedNodes, edges: transformedEdges } =
        transformMembersToFlowValues(member.mentees);

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

    // ts-ignores added due to react-flow types incompatibility with SSR
    const newNode: Node = {
      ...node,
      // @ts-expect-error @ts-ignore
      targetPosition: "top",
      // @ts-expect-error @ts-ignore
      sourcePosition: "bottom",
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
