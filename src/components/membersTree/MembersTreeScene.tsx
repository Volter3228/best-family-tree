import { memo, type RefObject } from "react";
import type { Container } from "pixi.js";
import { isZoomedOut as getIsZoomedOut } from "@/utils";
import {
  TEAM_OVERVIEW_EDGE_ALPHA,
  TEAM_OVERVIEW_NODE_ALPHA,
} from "@/constants/canvas";
import { Member } from "@/models";
import type {
  Direction,
  EdgeStyle,
  MemberNode,
  NodePositions,
  TeamFrame,
  TreeEdge,
  TreeMode,
} from "@/types";
import {
  NodesLayer,
  TeamEdgesLayer,
  TeamFramesLayer,
  TeamOverviewLayer,
  ZoomFadeContainer,
  EdgesLayer,
  LineageEdge,
} from "./canvas";

interface Props {
  sceneRef: RefObject<Container | null>;
  treeMode: TreeMode;
  direction: Direction;
  edgeStyle: EdgeStyle;
  scale: number;
  nodes: MemberNode[];
  edges: TreeEdge[];
  teamFrames: TeamFrame[];
  nodePositions: NodePositions;
  selectedId: string | null;
  selectedTeamId: string | null;
  onNodeClick: (member: Member, teamId?: string) => void;
  // Badge click only opens the team info (no fit-to-view).
  onBadgeClick: (frame: TeamFrame) => void;
  // Overview card / toolbar click fits the team in view and opens its info.
  onFrameClick: (frame: TeamFrame) => void;
}

// Everything drawn inside the viewport. The root container is faded by
// `useSceneTransition` when the tree mode changes.
const MembersTreeScene = ({
  sceneRef,
  treeMode,
  direction,
  edgeStyle,
  scale,
  nodes,
  edges,
  teamFrames,
  nodePositions,
  selectedId,
  selectedTeamId,
  onNodeClick,
  onBadgeClick,
  onFrameClick,
}: Props) => {
  const isZoomedOut = getIsZoomedOut(scale);
  const showTree = treeMode !== "grid";
  const isTeamView = treeMode === "team";

  return (
    <pixiContainer ref={sceneRef}>
      {isTeamView && (
        <TeamFramesLayer
          frames={teamFrames}
          selectedTeamId={selectedTeamId}
          pixelLine={isZoomedOut}
          onBadgeClick={onBadgeClick}
        />
      )}
      {isTeamView ? (
        <ZoomFadeContainer enabled minAlpha={TEAM_OVERVIEW_EDGE_ALPHA}>
          <TeamEdgesLayer
            frames={teamFrames}
            pixelLine={isZoomedOut}
            direction={direction}
            edgeStyle={edgeStyle}
          />
        </ZoomFadeContainer>
      ) : (
        showTree && (
          <EdgesLayer
            edges={edges}
            nodePositions={nodePositions}
            pixelLine={isZoomedOut}
            direction={direction}
            edgeStyle={edgeStyle}
          />
        )
      )}
      {treeMode === "family" && (
        <LineageEdge
          selectedId={selectedId}
          nodePositions={nodePositions}
          pixelLine={isZoomedOut}
          direction={direction}
          edgeStyle={edgeStyle}
        />
      )}
      <ZoomFadeContainer
        enabled={isTeamView}
        minAlpha={TEAM_OVERVIEW_NODE_ALPHA}
      >
        <NodesLayer
          nodes={nodes}
          selectedId={selectedId}
          selectedTeamId={selectedTeamId}
          isTeamView={isTeamView}
          onNodeClick={onNodeClick}
        />
      </ZoomFadeContainer>
      {isTeamView && (
        <TeamOverviewLayer frames={teamFrames} onFrameClick={onFrameClick} />
      )}
    </pixiContainer>
  );
};

export default memo(MembersTreeScene);
