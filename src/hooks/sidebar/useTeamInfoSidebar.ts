import { useCallback, useEffect, useState } from "react";
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

  useEffect(() => {
    if (selectedMember) setIsOpen(false);
  }, [selectedMember]);

  const open = useCallback(
    (nextTeamId: string) => {
      closeMemberSidebar();
      setTeamId(nextTeamId);
      setMode("info");
      setIsOpen(true);
    },
    [closeMemberSidebar],
  );

  const close = useCallback(() => setIsOpen(false), []);

  const startEdit = useCallback(() => setMode("edit"), []);
  const backToInfo = useCallback(() => setMode("info"), []);

  return { teamId, isOpen, mode, open, close, startEdit, backToInfo };
};
