"use client";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
} from "@xyflow/react";
import {
  DEFAULT_EDGE_OPTIONS,
  NODE_TYPES,
} from "@/constants/reactFlowSettings";
import "@xyflow/react/dist/style.css";
import "./styles.css";

interface IFlowProps {
  layoutedNodes: Node[];
  layoutedEdges: Edge[];
}

export default function Flow({ layoutedNodes, layoutedEdges }: IFlowProps) {
  const [nodes] = useNodesState(layoutedNodes);
  const [edges] = useEdgesState(layoutedEdges);
  console.log(nodes);

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={NODE_TYPES}
      edges={edges}
      defaultEdgeOptions={DEFAULT_EDGE_OPTIONS}
      fitView
      maxZoom={5}
    />
  );
}
