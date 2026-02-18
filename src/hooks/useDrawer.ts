import { useState, useEffect, useCallback } from "react";
import { Member } from "@/models";
import type { DrawerMode } from "@/types";

export const useDrawer = (
  selectedMember: Member | null,
  setSelectedMember: (member: Member | null) => void,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<DrawerMode>("info");

  useEffect(() => {
    if (selectedMember) {
      setIsOpen(true);
      setMode("info");
    }
  }, [selectedMember]);

  const onClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setMode("info");
      setSelectedMember(null);
    }, 300);
  }, []);

  const onEditClick = () => setMode("edit");
  const onBackToInfoClick = () => setMode("info");

  return {
    isDrawerOpen: isOpen,
    drawerMode: mode,
    onClose,
    onEditClick,
    onBackToInfoClick,
  };
};
