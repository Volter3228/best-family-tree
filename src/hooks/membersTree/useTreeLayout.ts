import { useEffect, useRef } from "react";
import { useMembersTree } from "./useMembersTree";
import { useMembers } from "../data/useMembers";
import { useFilters } from "./useFilters";
import { useSceneTransition } from "./useSceneTransition";
import { getFitViewTargetScale, useViewportAnimation } from "./animations";
import type { MemberNode, TeamFrame, TreeEdge } from "@/types";
import {
  layoutTeamFrames,
  transformMembersToFlowValues,
  transformMembersToTeamTreeValues,
  getLayoutedElements,
} from "@/utils";
import {
  reconnectEdgesToVisibleAncestors,
  isDetachedAlumnus,
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
    setTeamFrames,
    setLayoutMode,
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
  const prevTreeModeRef = useRef(treeMode);
  const transitionScene = useSceneTransition();

  const prepareFitView = (
    layoutedNodes: MemberNode[],
    frames: TeamFrame[] = [],
  ) => {
    if (!hasInitialFitView.current || pendingFitViewRef.current) {
      setFitViewTargetScale(
        getFitViewTargetScale(
          layoutedNodes,
          window.innerWidth,
          window.innerHeight,
          frames,
        ),
      );
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
    const { nodes: allNodes, edges: allEdges }: {
      nodes: MemberNode[];
      edges: TreeEdge[];
    } =
      treeMode === "team"
        ? {
          nodes: transformMembersToTeamTreeValues(
            flatMembersList,
            appliedFilters,
          ),
          edges: [],
        }
        : transformMembersToFlowValues(membersTree);

    let finalNodes =
      treeMode === "team"
        ? allNodes
        : allNodes.filter((node) => !isDetachedAlumnus(node.data.member));
    let finalEdges = allEdges;

    // Keep only nodes matching the current filters.
    if (filteredMemberIds) {
      finalNodes = allNodes.filter((node) =>
        treeMode === "team"
          ? filteredMemberIds.has(node.data.member.id)
          : filteredMemberIds.has(node.id),
      );
      // Family edges reconnect children to their nearest visible ancestor
      // (team view has no edge list: its edges come from the frame layout).
      if (treeMode !== "team") {
        finalEdges = reconnectEdgesToVisibleAncestors(finalNodes, membersMap);
      }
    }

    // Newer runs invalidate older (async or fading) ones.
    const requestId = ++layoutRequestRef.current;

    // Switching tree mode cross-fades the scene instead of popping.
    const modeChanged =
      hasInitialFitView.current && prevTreeModeRef.current !== treeMode;
    prevTreeModeRef.current = treeMode;
    const commit = (apply: () => void) => {
      const guarded = () => {
        if (requestId !== layoutRequestRef.current) return;
        setLayoutMode(treeMode);
        apply();
      };
      if (modeChanged) transitionScene(guarded);
      else guarded();
    };

    if (finalNodes.length === 0) {
      setIsFitViewAnimating(false);
      setFitViewTargetScale(null);
      setNodes([]);
      setEdges([]);
      setTeamFrames([]);
      setLayoutMode(treeMode);
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
    if (treeMode === "grid") {
      const layoutedNodes = computeGridLayout(finalNodes);
      commit(() => {
        prepareFitView(layoutedNodes);
        setNodes(layoutedNodes);
        setEdges([]);
        setTeamFrames([]);
      });
      return;
    }

    // Team view: custom framed layout, no ELK
    if (treeMode === "team") {
      const { nodes: layoutedNodes, frames } = layoutTeamFrames(finalNodes);
      commit(() => {
        prepareFitView(layoutedNodes, frames);
        setNodes(layoutedNodes);
        setEdges([]);
        setTeamFrames(frames);
      });
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
      if (requestId !== layoutRequestRef.current) return;

      const layoutedNodes = lineageMemberId
        ? alignLineageLayout(res.layoutedNodes, lineageMemberId, membersMap)
        : res.layoutedNodes;

      commit(() => {
        prepareFitView(layoutedNodes);
        setNodes(layoutedNodes);
        setEdges(res.layoutedEdges);
        setTeamFrames([]);
      });
    });
  }, [
    membersTree,
    flatMembersList,
    filteredMemberIds,
    membersMap,
    filterVersion,
    lineageMemberId,
    treeMode,
    appliedFilters,
    setTeamFrames,
    setLayoutMode,
    transitionScene,
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
