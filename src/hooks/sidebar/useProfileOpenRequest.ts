import { useEffect } from "react";
import type { SidebarMode, TeamFrame } from "@/types";
import { getMemberById } from "@/store/membersStore";
import { useProfileStore } from "@/store/profileStore";
import { canEdit, useSessionStore } from "@/store/sessionStore";
import { useTreeStore } from "@/store/treeStore";

interface Options {
  openInMode: (
    memberId: string,
    mode: SidebarMode,
    minimized?: boolean,
  ) => void;
  openTeam: (teamId: string) => void;
  closeTeam: () => void;
  focusNode: (memberId: string) => void;
  focusFrame: (frame: TeamFrame) => void;
  rememberTeamFor: (memberId: string) => void;
  isTeamView: boolean;
}

// Other panels (account, suggestions) ask the tree to open a member or a team:
// select it, focus the camera and show the requested mode. A mode the viewer
// may not use falls back to the nearest one they may.
export const useProfileOpenRequest = ({
  openInMode,
  openTeam,
  closeTeam,
  focusNode,
  focusFrame,
  rememberTeamFor,
  isTeamView,
}: Options) => {
  const request = useProfileStore((s) => s.request);
  const teamRequest = useProfileStore((s) => s.teamRequest);

  useEffect(() => {
    if (!request) return;
    useProfileStore.getState().clear();
    const { memberId, mode, minimized } = request;
    if (!getMemberById(memberId)) return;

    const session = useSessionStore.getState().session;
    const editable = canEdit(session, memberId);
    const canSuggest = !!session && session.method !== "QUESTIONS";
    let nextMode: SidebarMode = "info";
    if (mode === "edit" && editable) nextMode = "edit";
    else if (mode === "suggest") {
      if (editable) nextMode = "edit";
      else if (canSuggest) nextMode = "suggest";
    }

    closeTeam();
    // Only the info card can collapse.
    openInMode(memberId, nextMode, minimized && nextMode === "info");
    rememberTeamFor(memberId);
    focusNode(memberId);
  }, [request, openInMode, closeTeam, focusNode, rememberTeamFor]);

  useEffect(() => {
    if (!teamRequest) return;
    useProfileStore.getState().clearTeam();
    const { teamId } = teamRequest;
    openTeam(teamId);
    if (!isTeamView) return;
    const frame = useTreeStore
      .getState()
      .teamFrames.find((item) => item.teamId === teamId);
    if (frame) focusFrame(frame);
  }, [teamRequest, openTeam, focusFrame, isTeamView]);
};
