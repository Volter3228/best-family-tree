import { useEffect, useRef } from "react";
import { useMembersStore } from "@/store/membersStore";
import { useFiltersStore } from "@/store/filtersStore";
import { useTreeStore } from "@/store/treeStore";
import { useSceneTransition } from "./useSceneTransition";
import { getFitViewTargetScale, useViewportAnimation } from "./animations";
import type { MemberNode, TeamFrame, TreeEdge } from "@/types";
import {
  applyTeamLayout,
  toTeamLayoutInputs,
  transformMembersToFlowValues,
  transformMembersToTeamTreeValues,
  refreshNodeMembers,
} from "@/utils";
import { requestLayout } from "@/libs/layoutClient";
import {
  reconnectEdgesToVisibleAncestors,
  computeGridLayout,
  reorderEdgesForLineageCentering,
  alignLineageLayout,
  applyElkPositions,
} from "@/utils/membersTree/layout";

/**
 * Orchestrates tree layout computation: transforms members into nodes/edges,
 * applies filters, computes ELK layout (or grid), and triggers fit-view
 * after layout changes.
 */
export const useTreeLayout = () => {
  const nodes = useTreeStore((s) => s.nodes);
  const setNodes = useTreeStore((s) => s.setNodes);
  const setEdges = useTreeStore((s) => s.setEdges);
  const setTeamFrames = useTreeStore((s) => s.setTeamFrames);
  const setLayoutMode = useTreeStore((s) => s.setLayoutMode);
  const setIsFitViewAnimating = useTreeStore((s) => s.setIsFitViewAnimating);
  const setFitViewTargetScale = useTreeStore((s) => s.setFitViewTargetScale);
  const structureVersion = useMembersStore((s) => s.structureVersion);
  const byId = useMembersStore((s) => s.byId);
  const filteredMemberIds = useFiltersStore((s) => s.filteredMemberIds);
  const filterVersion = useFiltersStore((s) => s.filterVersion);
  const appliedFilters = useFiltersStore((s) => s.appliedFilters);
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

  // Edits that keep the tree's shape (names, photos, contacts) only swap the
  // member records inside the existing nodes; positions and ELK stay as is.
  useEffect(() => {
    setNodes((prev) => refreshNodeMembers(prev, byId));
  }, [byId, setNodes]);

  // Layout computation
  useEffect(() => {
    const { members, byId: membersMap, childrenOf, rootIds } =
      useMembersStore.getState();
    if (members.length === 0) return;

    // Build the unfiltered graph for the selected layout mode.
    const { nodes: allNodes, edges: allEdges }: {
      nodes: MemberNode[];
      edges: TreeEdge[];
    } =
      treeMode === "team"
        ? {
          nodes: transformMembersToTeamTreeValues(
            members,
            appliedFilters,
          ),
          edges: [],
        }
        : transformMembersToFlowValues({ byId: membersMap, childrenOf, rootIds });

    let finalNodes = allNodes;
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

    // Edits that land while a layout is pending must not be overwritten.
    const withLatestMembers = (layoutedNodes: MemberNode[]) =>
      refreshNodeMembers(layoutedNodes, useMembersStore.getState().byId);

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
        setNodes(withLatestMembers(layoutedNodes));
        setEdges([]);
        setTeamFrames([]);
      });
      return;
    }

    // Team view: custom framed layout (packing runs in the worker), no ELK
    if (treeMode === "team") {
      requestLayout("team", toTeamLayoutInputs(finalNodes))
        .then(({ positions, frames }) => {
          if (requestId !== layoutRequestRef.current) return;
          const layoutedNodes = applyTeamLayout(finalNodes, positions);
          commit(() => {
            prepareFitView(layoutedNodes, frames);
            setNodes(withLatestMembers(layoutedNodes));
            setEdges([]);
            setTeamFrames(frames);
          });
        })
        .catch((error) => console.error("Team layout failed:", error));
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

    requestLayout("elk", {
      nodeIds: finalNodes.map((node) => node.id),
      edges: finalEdges.map(({ id, source, target }) => ({ id, source, target })),
    })
      .then((positions) => {
        if (requestId !== layoutRequestRef.current) return;

        const positioned = applyElkPositions(finalNodes, positions);
        const layoutedNodes = lineageMemberId
          ? alignLineageLayout(
            positioned,
            lineageMemberId,
            membersMap,
            childrenOf,
          )
          : positioned;

        commit(() => {
          prepareFitView(layoutedNodes);
          setNodes(withLatestMembers(layoutedNodes));
          setEdges(finalEdges);
          setTeamFrames([]);
        });
      })
      .catch((error) => console.error("Tree layout failed:", error));
  }, [
    structureVersion,
    filteredMemberIds,
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
