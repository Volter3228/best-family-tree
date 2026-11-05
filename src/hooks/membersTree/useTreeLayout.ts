import { useEffect, useRef } from "react";
import { useMembersStore } from "@/store/membersStore";
import { useFiltersStore } from "@/store/filtersStore";
import { useTreeStore } from "@/store/treeStore";
import { useSceneTransition } from "./useSceneTransition";
import { useResolvedDirection } from "./useTreeDirection";
import { getFitViewTargetScale, useViewportAnimation } from "./animations";
import type { MemberNode, TeamFrame } from "@/types";
import {
  applyTeamLayout,
  toTeamLayoutInputs,
  refreshNodeMembers,
} from "@/utils";
import { requestLayout } from "@/libs/layoutClient";
import {
  computeGridLayout,
  reorderEdgesForLineageCentering,
  alignLineageLayout,
  applyElkPositions,
} from "@/utils/membersTree/layout";
import { buildLayoutGraph } from "@/utils/membersTree/layoutGraph";
import { GRID_GAP_X, GRID_LR_COLUMNS } from "@/constants/canvas";

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
  const setLayoutDirection = useTreeStore((s) => s.setLayoutDirection);
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
  const direction = useResolvedDirection();

  const hasInitialFitView = useRef(false);
  const prevFilterVersionRef = useRef(filterVersion);
  const pendingFitViewRef = useRef(false);
  const layoutRequestRef = useRef(0);
  const prevTreeModeRef = useRef(treeMode);
  const prevDirectionRef = useRef(direction);
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

    // Build the unfiltered graph for the selected layout mode, then keep
    // only the nodes matching the current filters.
    const { nodes: finalNodes, edges } = buildLayoutGraph({
      treeMode,
      members,
      index: { byId: membersMap, childrenOf, rootIds },
      appliedFilters,
      filteredMemberIds,
    });
    let finalEdges = edges;

    // Edits that land while a layout is pending must not be overwritten.
    const withLatestMembers = (layoutedNodes: MemberNode[]) =>
      refreshNodeMembers(layoutedNodes, useMembersStore.getState().byId);

    // Newer runs invalidate older (async or fading) ones.
    const requestId = ++layoutRequestRef.current;

    // Switching tree mode or direction cross-fades the scene instead of
    // popping. The committed layoutDirection lags the setting so edges keep
    // their old shape until the fade-out finishes (same trick as layoutMode).
    const directionChanged =
      hasInitialFitView.current && prevDirectionRef.current !== direction;
    const modeChanged =
      hasInitialFitView.current &&
      (prevTreeModeRef.current !== treeMode || directionChanged);
    prevTreeModeRef.current = treeMode;
    prevDirectionRef.current = direction;
    const commit = (apply: () => void) => {
      const guarded = () => {
        if (requestId !== layoutRequestRef.current) return;
        setLayoutMode(treeMode);
        setLayoutDirection(direction);
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
      setLayoutDirection(direction);
      return;
    }

    // Track filter and direction changes for deferred fit-view
    const filterChanged =
      hasInitialFitView.current &&
      prevFilterVersionRef.current !== filterVersion;
    prevFilterVersionRef.current = filterVersion;
    if (filterChanged || directionChanged) {
      pendingFitViewRef.current = true;
    }

    // Flat grid layout — no tree, no edges. The mobile (LR) layout packs
    // fewer columns so the grid stays narrow on portrait screens.
    if (treeMode === "grid") {
      const layoutedNodes = computeGridLayout(
        finalNodes,
        GRID_GAP_X,
        direction === "LR" ? GRID_LR_COLUMNS : Number.POSITIVE_INFINITY,
      );
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
      requestLayout("team", {
        nodes: toTeamLayoutInputs(finalNodes),
        direction,
      })
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
      direction,
    })
      .then((positions) => {
        if (requestId !== layoutRequestRef.current) return;

        const positioned = applyElkPositions(finalNodes, positions, direction);
        const layoutedNodes = lineageMemberId
          ? alignLineageLayout(
            positioned,
            lineageMemberId,
            membersMap,
            childrenOf,
            direction,
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
    direction,
    appliedFilters,
    setTeamFrames,
    setLayoutMode,
    setLayoutDirection,
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
