import type { RefObject } from "react";
import type { Container } from "pixi.js";
import { isZoomedOut as getIsZoomedOut } from "@/utils";
import {
  BIRTHDAY_ANIMATION_MIN_SCALE,
  TEAM_OVERVIEW_EDGE_ALPHA,
  TEAM_OVERVIEW_NODE_ALPHA,
} from "@/constants/canvas";
import { Member } from "@/models";
import type {
  MemberNode,
  MembersMap,
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
  scale: number;
  nodes: MemberNode[];
  edges: TreeEdge[];
  teamFrames: TeamFrame[];
  nodePositions: NodePositions;
  membersMap: MembersMap;
  selectedMember: Member | null;
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
  scale,
  nodes,
  edges,
  teamFrames,
  nodePositions,
  membersMap,
  selectedMember,
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
          <TeamEdgesLayer frames={teamFrames} pixelLine={isZoomedOut} />
        </ZoomFadeContainer>
      ) : (
        showTree && (
          <EdgesLayer
            edges={edges}
            nodePositions={nodePositions}
            pixelLine={isZoomedOut}
          />
        )
      )}
      {treeMode === "family" && (
        <LineageEdge
          selectedMember={selectedMember}
          membersMap={membersMap}
          nodePositions={nodePositions}
          pixelLine={isZoomedOut}
        />
      )}
      <ZoomFadeContainer
        enabled={isTeamView}
        minAlpha={TEAM_OVERVIEW_NODE_ALPHA}
      >
        <NodesLayer
          nodes={nodes}
          isZoomedOut={isZoomedOut}
          showBirthday={scale >= BIRTHDAY_ANIMATION_MIN_SCALE}
          selectedMember={selectedMember}
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

export default MembersTreeScene;
