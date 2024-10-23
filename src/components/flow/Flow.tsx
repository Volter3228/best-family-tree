"use client";
import { ReactFlow, useNodesState, useEdgesState } from "@xyflow/react";
import {
  DEFAULT_EDGE_OPTIONS,
  EDGE_TYPES,
  NODE_TYPES,
} from "@/constants/reactFlowSettings";
import type { Member as MemberType } from "@/types";
import Sidebar from "./sidebar/Sidebar";
import "@xyflow/react/dist/style.css";
import "./react-flow-styles.css";
import {
  getLayoutedElements,
  transformMembersToFlowValues,
} from "@/libs/reactFlow";
import Member from "@/models/Member";
import { useMembers } from "@/hooks/useMembers";
import { useEffect } from "react";

interface IProps {
  members: MemberType[];
}

export default function Flow({ members }: IProps) {
  const memberInstances = members.map((member) => new Member(member));
  const { membersTree, setMembers, flatMembersList } = useMembers();

  useEffect(() => {
    if (!membersTree) {
      setMembers(members);
    }
  }, [membersTree, setMembers, members]);

  const { nodes: tNodes, edges: tEdges } =
    transformMembersToFlowValues(memberInstances);
  const { layoutedNodes, layoutedEdges } = getLayoutedElements(tNodes, tEdges);

  const [nodes, setNodes] = useNodesState(layoutedNodes);
  const [edges, setEdges] = useEdgesState(layoutedEdges);

  useEffect(() => {
    if (membersTree) {
      const { nodes: newNodes, edges: newEdges } =
        transformMembersToFlowValues(membersTree);
      const {
        layoutedNodes: newLayoutedNodes,
        layoutedEdges: newLayoutedEdges,
      } = getLayoutedElements(newNodes, newEdges);

      setNodes(newLayoutedNodes);
      setEdges(newLayoutedEdges);
    }
    // Re-transform the members into nodes and edges after any changes
  }, [membersTree, flatMembersList, setEdges, setNodes]);

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={NODE_TYPES}
      edges={edges}
      edgeTypes={EDGE_TYPES}
      defaultEdgeOptions={DEFAULT_EDGE_OPTIONS}
      fitView
      maxZoom={5}
      minZoom={0.1}
    >
      <Sidebar />
    </ReactFlow>
  );
}
