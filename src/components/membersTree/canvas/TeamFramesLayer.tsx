import { memo } from "react";
import type { TeamFrame as TeamFrameData } from "@/types";
import TeamFrame from "./TeamFrame";

interface Props {
  frames: TeamFrameData[];
  selectedTeamId: string | null;
  pixelLine: boolean;
  onBadgeClick: (frame: TeamFrameData) => void;
}

// "passive": the frames themselves ignore the pointer, only their badges react.
const TeamFramesLayer = ({
  frames,
  selectedTeamId,
  pixelLine,
  onBadgeClick,
}: Props) => (
  <pixiContainer eventMode="passive">
    {frames.map((frame) => (
      <TeamFrame
        key={frame.teamId}
        frame={frame}
        pixelLine={pixelLine}
        isSelected={frame.teamId === selectedTeamId}
        onBadgeClick={onBadgeClick}
      />
    ))}
  </pixiContainer>
);

export default memo(TeamFramesLayer);
