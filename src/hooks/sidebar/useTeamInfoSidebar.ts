import { useCallback, useEffect, useRef, useState } from "react";
import { Member } from "@/models";
import type { SidebarMode } from "@/types";

/**
 * The team info sidebar shares its slot with the member sidebar: opening one
 * closes the other. The team id is kept while closing so the content does not
 * vanish during the slide-out animation.
 */
export const useTeamInfoSidebar = (
  selectedMember: Member | null,
  closeMemberSidebar: () => void,
) => {
  const [teamId, setTeamId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<SidebarMode>("info");
  // Mobile only: the card is collapsed to a bar above the toolbar.
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (selectedMember) setIsOpen(false);
  }, [selectedMember]);

  const expandTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(expandTimerRef.current), []);

  const open = useCallback(
    (nextTeamId: string) => {
      clearTimeout(expandTimerRef.current);
      closeMemberSidebar();
      setTeamId(nextTeamId);
      setMode("info");
      setIsMinimized(false);
      setIsOpen(true);
    },
    [closeMemberSidebar],
  );

  // Stays minimized while sliding out, then expands once off screen.
  const close = useCallback(() => {
    setIsOpen(false);
    clearTimeout(expandTimerRef.current);
    expandTimerRef.current = setTimeout(() => setIsMinimized(false), 300);
  }, []);

  const startEdit = useCallback(() => setMode("edit"), []);
  const backToInfo = useCallback(() => setMode("info"), []);

  return {
    teamId,
    isOpen,
    mode,
    isMinimized,
    setMinimized: setIsMinimized,
    open,
    close,
    startEdit,
    backToInfo,
  };
};
