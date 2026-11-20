import { useCallback, useState } from "react";
import { useFiltersStore } from "@/store/filtersStore";
import type { TeamFrame } from "@/types";
import type { useTeamInfoSidebar } from "./useTeamInfoSidebar";

interface Options {
  teamInfo: ReturnType<typeof useTeamInfoSidebar>;
  selectedId: string | null;
  isTeamView: boolean;
  teamFrames: TeamFrame[];
  canSelectMember: (memberId: string) => boolean;
  selectMember: (memberId: string) => void;
  focusMemberInTeam: (teamId: string, memberId: string) => void;
}

/**
 * One-step back navigation between the two sidebars:
 * grid/family view: member -> position badge -> team, back to the member;
 * team view: team -> roster row -> member, back to the team.
 * The arrow only shows while its target is still on the canvas.
 */
export const useSidebarBack = ({
  teamInfo,
  selectedId,
  isTeamView,
  teamFrames,
  canSelectMember,
  selectMember,
  focusMemberInTeam,
}: Options) => {
  const filteredMemberIds = useFiltersStore((s) => s.filteredMemberIds);
  const { open: openTeam, close: closeTeam, returnMemberId } = teamInfo;

  const openTeamFromMember = useCallback(
    (teamId: string) => openTeam(teamId, selectedId),
    [openTeam, selectedId],
  );

  const canBackToMember =
    !!returnMemberId &&
    !isTeamView &&
    canSelectMember(returnMemberId) &&
    (!filteredMemberIds || filteredMemberIds.has(returnMemberId));

  const backToMember = useCallback(() => {
    if (!returnMemberId) return;
    // Close first: selecting cancels the deselect that closing schedules.
    closeTeam();
    selectMember(returnMemberId);
  }, [returnMemberId, selectMember, closeTeam]);

  // Team the selected member was opened from (team view roster).
  const [returnTeam, setReturnTeam] = useState<{
    teamId: string;
    memberId: string;
  } | null>(null);

  // Selecting someone else (or closing the card) drops the way back.
  const [prevSelectedId, setPrevSelectedId] = useState(selectedId);
  if (prevSelectedId !== selectedId) {
    setPrevSelectedId(selectedId);
    if (returnTeam && returnTeam.memberId !== selectedId) setReturnTeam(null);
  }

  const focusMemberFromTeam = useCallback(
    (teamId: string, memberId: string) => {
      focusMemberInTeam(teamId, memberId);
      setReturnTeam(isTeamView ? { teamId, memberId } : null);
    },
    [focusMemberInTeam, isTeamView],
  );

  const backTeamId =
    returnTeam &&
    isTeamView &&
    returnTeam.memberId === selectedId &&
    teamFrames.some((frame) => frame.teamId === returnTeam.teamId)
      ? returnTeam.teamId
      : null;

  const backToTeam = useCallback(() => {
    if (backTeamId) openTeam(backTeamId);
  }, [backTeamId, openTeam]);

  return {
    openTeamFromMember,
    canBackToMember,
    backToMember,
    focusMemberFromTeam,
    canBackToTeam: !!backTeamId,
    backToTeam,
  };
};
