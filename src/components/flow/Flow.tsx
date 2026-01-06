"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Edge,
  EdgeMouseHandler,
  Node,
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
import { useMembers } from "@/hooks";
import { DEFAULT_NODE_HEIGHT, DEFAULT_NODE_WIDTH } from "@/libs/graph";
import {
  getLayoutedElements,
  transformMembersToFlowValues,
} from "@/libs/reactFlow";
import type { Member as MemberType } from "@/types";
import Drawer from "../drawer/Drawer";
import MemberInfo from "../drawer/info/MemberInfo";
import Sidebar from "../sidebar/Sidebar";

import "@xyflow/react/dist/style.css";
import "./react-flow-styles.css";

interface Props {
  members: MemberType[];
}

const Flow = ({ members }: Props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [isInfoDrawerOpen, setIsInfoDrawerOpen] = useState(false);
  const { setCenter } = useReactFlow();

  const {
    membersTree,
    setMembers,
    flatMembersList,
    selectedMember,
    setSelectedMember,
  } = useMembers();

  useEffect(() => {
    if (!membersTree.length) {
      setMembers(members);
    }
  }, [membersTree, setMembers, members]);

  useEffect(() => {
    if (membersTree.length > 0) {
      const { nodes: newNodes, edges: newEdges } =
        transformMembersToFlowValues(membersTree);

      getLayoutedElements(newNodes, newEdges).then((res) => {
        const {
          layoutedNodes: newLayoutedNodes,
          layoutedEdges: newLayoutedEdges,
        } = res;

        setNodes(newLayoutedNodes);
        setEdges(newLayoutedEdges);
      });
    }
  }, [membersTree, flatMembersList, setEdges, setNodes]);

  useEffect(() => {
    if (selectedMember) {
      setIsInfoDrawerOpen(true);
    }
  }, [selectedMember]);

  const handleEdgeDoubleClick: EdgeMouseHandler = (event, edge) => {
    event.preventDefault();
    if (nodes.length > 0) {
      const node = nodes.find((node) => node.id === edge.source)!;

      const x = node.position.x + DEFAULT_NODE_WIDTH / 2;
      const y = node.position.y + DEFAULT_NODE_HEIGHT / 2;
      const zoom = 1.5;

      setCenter(x, y, { zoom, duration: 100 });
    }
  };

  const handleInfoDrawerClose = () => {
    setIsInfoDrawerOpen(false);
    setTimeout(() => {
      setSelectedMember(null);
    }, 300);
  };

  return (
    <ReactFlow
      id="flow"
      defaultEdgeOptions={DEFAULT_EDGE_OPTIONS}
      edges={edges}
      edgeTypes={EDGE_TYPES}
      nodes={nodes}
      nodeTypes={NODE_TYPES}
      maxZoom={3}
      minZoom={0.025}
      onEdgeDoubleClick={handleEdgeDoubleClick}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodesDraggable={false}
      nodesConnectable={false}
      onlyRenderVisibleElements
      fitView
    >
      <Sidebar />
      <Drawer
        headerTitle="Інфо"
        onClose={handleInfoDrawerClose}
        isOpen={isInfoDrawerOpen}
        className="z-10"
      >
        {!!selectedMember && <MemberInfo member={selectedMember} />}
      </Drawer>
    </ReactFlow>
  );
};

export default Flow;
