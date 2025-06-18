"use client";
import { useEffect } from "react";
import {
  EdgeMouseHandler,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import {
  DEFAULT_EDGE_OPTIONS,
  EDGE_TYPES,
  NODE_TYPES,
} from "@/constants/reactFlowSettings";
import { useMembers } from "@/hooks/useMembers";
import { DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH } from "@/libs/dagreGraph";
import {
  getLayoutedElements,
  transformMembersToFlowValues,
} from "@/libs/reactFlow";
import Member from "@/models/Member";
import type { Member as MemberType } from "@/types";
import Drawer from "./drawer/Drawer";
import MemberInfo from "./drawer/MemberInfo";
import Sidebar from "./sidebar/Sidebar";

import "@xyflow/react/dist/style.css";
import "./react-flow-styles.css";

interface Props {
  members: MemberType[];
}

const Flow = ({ members }: Readonly<Props>) => {
  const memberInstances = members.map((member) => new Member(member));
  const {
    membersTree,
    setMembers,
    flatMembersList,
    selectedMember,
    setSelectedMember,
  } = useMembers();

  useEffect(() => {
    if (!membersTree) {
      setMembers(members);
    }
  }, [membersTree, setMembers, members]);

  const { nodes: tNodes, edges: tEdges } =
    transformMembersToFlowValues(memberInstances);
  const { layoutedNodes, layoutedEdges } = getLayoutedElements(tNodes, tEdges);

  const { setCenter } = useReactFlow();
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

  const handleEdgeDoubleClick: EdgeMouseHandler = (event, edge) => {
    event.preventDefault();
    if (nodes.length > 0) {
      const node = nodes.find((node) => node.id === edge.source)!;

      const x = node.position.x + DEFAULT_NODE_WIDTH / 2;
      const y = node.position.y + DEFAULT_NODE_HEIGHT / 2;
      const zoom = 2;

      setCenter(x, y, { zoom, duration: 100 });
    }
  };

  const handleInfoDrawerClose = () => setSelectedMember(null);

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={NODE_TYPES}
      edges={edges}
      edgeTypes={EDGE_TYPES}
      defaultEdgeOptions={DEFAULT_EDGE_OPTIONS}
      fitView
      maxZoom={2}
      minZoom={0.1}
      onEdgeDoubleClick={handleEdgeDoubleClick}
      nodesDraggable={false}
      nodesConnectable={false}
      id="flow"
    >
      <Sidebar />
      <Drawer
        headerTitle="Інфо"
        onClose={handleInfoDrawerClose}
        isOpen={!!selectedMember}
        className="z-10"
      >
        {!!selectedMember && <MemberInfo member={selectedMember} />}
      </Drawer>
    </ReactFlow>
  );
};

export default Flow;
