"use client";
import {
  ReactFlow,
  type Node,
  type Edge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

interface IFlowProps {
  layoutedNodes: Node[];
  layoutedEdges: Edge[];
}

export default function Flow({ layoutedNodes, layoutedEdges }: IFlowProps) {
  console.log({ layoutedNodes, layoutedEdges });
  const [nodes] = useNodesState(layoutedNodes);
  const [edges] = useEdgesState(layoutedEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      className="text-black"
      connectionLineType={ConnectionLineType.SmoothStep}
      fitView
    />
  );
}
