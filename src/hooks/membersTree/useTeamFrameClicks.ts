import { useCallback } from "react";
import type { TeamFrame } from "@/types";

interface Options {
  teamFrames: TeamFrame[];
  openTeamId: string | null;
  openTeam: (teamId: string) => void;
  focusFrame: (frame: TeamFrame) => void;
}

// Clicking a team's badge only opens its info (no fit-to-view); clicking its
// square when zoomed out (or via the toolbar) fits it in view and opens info.
export const useTeamFrameClicks = ({
  teamFrames,
  openTeamId,
  openTeam,
  focusFrame,
}: Options) => {
  const handleBadgeClick = useCallback(
    (frame: TeamFrame) => openTeam(frame.teamId),
    [openTeam],
  );

  const handleFrameClick = useCallback(
    (frame: TeamFrame) => {
      focusFrame(frame);
      openTeam(frame.teamId);
    },
    [focusFrame, openTeam],
  );

  // Fits the open team in view (clicking its name in the sidebar).
  const handleTeamTitleClick = useCallback(() => {
    const frame = teamFrames.find((item) => item.teamId === openTeamId);
    if (frame) focusFrame(frame);
  }, [teamFrames, openTeamId, focusFrame]);

  return { handleBadgeClick, handleFrameClick, handleTeamTitleClick };
};
