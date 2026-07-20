import { useEffect, useRef } from "react";
import { useMembersTree } from "./useMembersTree";
import { useMembers } from "../useMembers";
import { useFilters } from "./useFilters";
import { useViewportAnimation } from "./animations";
import { transformMembersToFlowValues, getLayoutedElements } from "@/utils";
import {
  reconnectEdgesToVisibleAncestors,
  computeGridLayout,
  reorderEdgesForLineageCentering,
  alignLineageLayout,
} from "@/utils/membersTree/layout";

/**
 * Orchestrates tree layout computation: transforms members into nodes/edges,
 * applies filters, computes ELK layout (or grid), and triggers fit-view
 * after layout changes.
 */
export const useTreeLayout = () => {
  const { nodes, setNodes, setEdges } = useMembersTree();
  const { membersTree, membersMap } = useMembers();
  const { filteredMemberIds, filterVersion, appliedFilters } = useFilters();
  const { fitView } = useViewportAnimation();

  const lineageMemberId = appliedFilters.lineageMemberId;
  const showTree = appliedFilters.showTree;

  const hasInitialFitView = useRef(false);
  const prevFilterVersionRef = useRef(filterVersion);
  const pendingFitViewRef = useRef(false);

  // Layout computation
  useEffect(() => {
    if (membersTree.length === 0) return;

    const { nodes: allNodes, edges: allEdges } =
      transformMembersToFlowValues(membersTree);

    let finalNodes = allNodes;
    let finalEdges = allEdges;

    // Filter to visible nodes and reconnect edges
    if (filteredMemberIds) {
      finalNodes = allNodes.filter((n) => filteredMemberIds.has(n.id));
      finalEdges = reconnectEdgesToVisibleAncestors(finalNodes, membersMap);
    }

    if (finalNodes.length === 0) {
      setNodes([]);
      setEdges([]);
      return;
    }

    // Track filter changes for deferred fit-view
    const filterChanged =
      hasInitialFitView.current &&
      prevFilterVersionRef.current !== filterVersion;
    prevFilterVersionRef.current = filterVersion;
    if (filterChanged) {
      pendingFitViewRef.current = true;
    }

    // Flat grid layout — no tree, no edges
    if (!showTree) {
      setNodes(computeGridLayout(finalNodes));
      setEdges([]);
      return;
    }

    // Reorder edges so lineage member is centered among siblings
    if (lineageMemberId) {
      finalEdges = reorderEdgesForLineageCentering(
        finalEdges,
        lineageMemberId,
        membersMap,
      );
    }

    getLayoutedElements(finalNodes, finalEdges).then((res) => {
      const layoutedNodes = lineageMemberId
        ? alignLineageLayout(res.layoutedNodes, lineageMemberId, membersMap)
        : res.layoutedNodes;

      setNodes(layoutedNodes);
      setEdges(res.layoutedEdges);
    });
  }, [
    membersTree,
    filteredMemberIds,
    membersMap,
    filterVersion,
    lineageMemberId,
    showTree,
  ]);

  // Initial fit-view + deferred filter fit-view
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (nodes.length > 0 && !hasInitialFitView.current) {
      timer = setTimeout(() => {
        fitView(2);
        hasInitialFitView.current = true;
      }, 200);
    } else if (nodes.length > 0 && pendingFitViewRef.current) {
      pendingFitViewRef.current = false;
      timer = setTimeout(() => fitView(1), 120);
    }
    return () => clearTimeout(timer);
  }, [nodes, fitView]);
};
