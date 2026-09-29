import { useEffect, useRef } from "react";
import { useMembersTree } from "./useMembersTree";
import { useMembers } from "../data/useMembers";
import { useFilters } from "./useFilters";
import { getFitViewTargetScale, useViewportAnimation } from "./animations";
import type { MemberNode } from "@/types";
import {
  transformMembersToFlowValues,
  transformMembersToTeamTreeValues,
  getLayoutedElements,
} from "@/utils";
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
  const {
    nodes,
    setNodes,
    setEdges,
    setIsFitViewAnimating,
    setFitViewTargetScale,
  } = useMembersTree();
  const { membersTree, flatMembersList, membersMap } = useMembers();
  const { filteredMemberIds, filterVersion, appliedFilters } = useFilters();
  const { fitView } = useViewportAnimation();

  const lineageMemberId = appliedFilters.lineageMemberId;
  const treeMode = appliedFilters.treeMode;

  const hasInitialFitView = useRef(false);
  const prevFilterVersionRef = useRef(filterVersion);
  const pendingFitViewRef = useRef(false);
  const layoutRequestRef = useRef(0);

  const prepareFitView = (layoutedNodes: MemberNode[]) => {
    if (!hasInitialFitView.current || pendingFitViewRef.current) {
      setFitViewTargetScale(getFitViewTargetScale(layoutedNodes));
      setIsFitViewAnimating(true);
    }
  };

  // Layout computation
  useEffect(() => {
    if (
      (treeMode === "team" && flatMembersList.length === 0) ||
      (treeMode !== "team" && membersTree.length === 0)
    )
      return;

    // Build the unfiltered graph for the selected layout mode.
    const { nodes: allNodes, edges: allEdges } =
      treeMode === "team"
        ? transformMembersToTeamTreeValues(
          flatMembersList,
          appliedFilters.eventTypeNames,
        )
        : transformMembersToFlowValues(membersTree);

    let finalNodes = allNodes;
    let finalEdges = allEdges;

    // Keep only nodes matching the current filters.
    if (filteredMemberIds) {
      finalNodes = allNodes.filter((node) =>
        treeMode === "team"
          ? filteredMemberIds.has(node.data.member.id)
          : filteredMemberIds.has(node.id),
      );
      if (treeMode === "team") {
        // Team edges only survive when both endpoints remain visible.
        const visibleNodeIds = new Set(finalNodes.map((node) => node.id));
        finalEdges = allEdges.filter(
          (edge) =>
            visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target),
        );
      } else {
        // Family edges reconnect children to their nearest visible ancestor.
        finalEdges = reconnectEdgesToVisibleAncestors(finalNodes, membersMap);
      }
    }

    if (finalNodes.length === 0) {
      setIsFitViewAnimating(false);
      setFitViewTargetScale(null);
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
    if (treeMode === "none") {
      const layoutedNodes = computeGridLayout(finalNodes);
      prepareFitView(layoutedNodes);
      setNodes(layoutedNodes);
      setEdges([]);
      return;
    }

    // Reorder edges so lineage member is centered among siblings
    if (lineageMemberId && treeMode !== "team") {
      finalEdges = reorderEdgesForLineageCentering(
        finalEdges,
        lineageMemberId,
        membersMap,
      );
    }

    const requestId = ++layoutRequestRef.current;
    getLayoutedElements(finalNodes, finalEdges).then((res) => {
      if (requestId !== layoutRequestRef.current) return;

      const layoutedNodes = lineageMemberId
        ? alignLineageLayout(res.layoutedNodes, lineageMemberId, membersMap)
        : res.layoutedNodes;

      prepareFitView(layoutedNodes);
      setNodes(layoutedNodes);
      setEdges(res.layoutedEdges);
    });
  }, [
    membersTree,
    flatMembersList,
    filteredMemberIds,
    membersMap,
    filterVersion,
    lineageMemberId,
    treeMode,
    appliedFilters.eventTypeNames,
    setFitViewTargetScale,
    setIsFitViewAnimating,
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
      timer = setTimeout(() => {
        pendingFitViewRef.current = false;
        fitView(1);
      }, 120);
    }
    return () => clearTimeout(timer);
  }, [nodes, fitView]);
};
