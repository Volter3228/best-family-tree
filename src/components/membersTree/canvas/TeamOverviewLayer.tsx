import { memo } from "react";
import type { TeamFrame } from "@/types";
import TeamOverviewLabel from "./TeamOverviewLabel";

interface Props {
  frames: TeamFrame[];
  onFrameClick: (frame: TeamFrame) => void;
}

const TeamOverviewLayer = ({ frames, onFrameClick }: Props) => (
  <pixiContainer sortableChildren>
    {frames.map((frame) => (
      <TeamOverviewLabel
        key={frame.teamId}
        frame={frame}
        onFrameClick={onFrameClick}
      />
    ))}
  </pixiContainer>
);

export default memo(TeamOverviewLayer);
