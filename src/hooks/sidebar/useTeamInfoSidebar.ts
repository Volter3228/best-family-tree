import { useCallback, useEffect, useRef, useState } from "react";
import type { SidebarMode } from "@/types";
import { useManageStore } from "@/store/manageStore";

/**
 * The team info sidebar shares its slot with the member sidebar: opening one
 * closes the other. The team id is kept while closing so the content does not
 * vanish during the slide-out animation.
 */
export const useTeamInfoSidebar = (
  isMemberSidebarOpen: boolean,
  closeMemberSidebar: () => void,
  hideMemberSidebar: () => void,
) => {
  const [teamId, setTeamId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<SidebarMode>("info");
  // Mobile only: the card is collapsed to a bar above the toolbar.
  const [isMinimized, setIsMinimized] = useState(false);
  // Member whose sidebar this team was opened from; powers the back arrow.
  const [returnMemberId, setReturnMemberId] = useState<string | null>(null);
  // That member stays selected until this sidebar closes.
  const keepsSelectionRef = useRef(false);

  useEffect(() => {
    if (isMemberSidebarOpen) {
      keepsSelectionRef.current = false;
      setIsOpen(false);
      setReturnMemberId(null);
    }
  }, [isMemberSidebarOpen]);

  const expandTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(expandTimerRef.current), []);

  const open = useCallback(
    (nextTeamId: string, fromMemberId: string | null = null) => {
      clearTimeout(expandTimerRef.current);
      useManageStore.getState().sendBack();
      keepsSelectionRef.current = !!fromMemberId;
      if (fromMemberId) hideMemberSidebar();
      else closeMemberSidebar();
      setTeamId(nextTeamId);
      setReturnMemberId(fromMemberId);
      setMode("info");
      setIsMinimized(false);
      setIsOpen(true);
    },
    [closeMemberSidebar, hideMemberSidebar],
  );

  // Stays minimized while sliding out, then expands once off screen.
  const close = useCallback(() => {
    setIsOpen(false);
    // Drops the selection kept for the member this team was opened from.
    if (keepsSelectionRef.current) {
      keepsSelectionRef.current = false;
      closeMemberSidebar();
    }
    clearTimeout(expandTimerRef.current);
    expandTimerRef.current = setTimeout(() => setIsMinimized(false), 300);
  }, [closeMemberSidebar]);

  const startEdit = useCallback(() => setMode("edit"), []);
  const startSuggest = useCallback(() => setMode("suggest"), []);
  const backToInfo = useCallback(() => setMode("info"), []);

  return {
    teamId,
    returnMemberId,
    isOpen,
    mode,
    isMinimized,
    setMinimized: setIsMinimized,
    open,
    close,
    startEdit,
    startSuggest,
    backToInfo,
  };
};
