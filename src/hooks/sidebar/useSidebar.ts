import { useState, useEffect, useCallback, useRef } from "react";
import { Member } from "@/models";
import type { SidebarMode } from "@/types";
import { useManageStore } from "@/store/manageStore";

// Matches the sidebar's slide-out transition.
const CLOSE_ANIMATION_MS = 300;

export const useSidebar = (
  selectedMember: Member | null,
  storeSelectMember: (id: string | null) => void,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<SidebarMode>("info");
  // Mobile only: the card is collapsed to a bar above the toolbar.
  const [isMinimized, setIsMinimized] = useState(false);
  // Mode requested together with a selection; the selection effect applies it.
  const pendingModeRef = useRef<SidebarMode | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // A pending close must not wipe a selection made while the card slides out.
  const cancelPendingClose = useCallback(() => {
    if (closeTimerRef.current === null) return;
    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  }, []);

  useEffect(() => cancelPendingClose, [cancelPendingClose]);

  // Keyed by id: a reload hands over a new object for the same member and
  // must not reset the mode or bring this sidebar in front of the manage one.
  const selectedId = selectedMember?.id ?? null;
  useEffect(() => {
    if (selectedId) {
      useManageStore.getState().sendBack();
      cancelPendingClose();
      setIsOpen(true);
      setMode(pendingModeRef.current ?? "info");
      pendingModeRef.current = null;
      setIsMinimized(false);
    }
  }, [selectedId, cancelPendingClose]);

  // Selecting a member (even the one already selected) shows the sidebar
  // expanded; the effect above only reacts to a different member.
  const selectMember = useCallback(
    (id: string | null) => {
      if (id) {
        useManageStore.getState().sendBack();
        cancelPendingClose();
        setIsOpen(true);
        setIsMinimized(false);
      }
      storeSelectMember(id);
    },
    [storeSelectMember, cancelPendingClose],
  );

  // Selects a member and opens the sidebar straight in the given mode.
  const openInMode = useCallback(
    (id: string, nextMode: SidebarMode) => {
      if (selectedMember?.id === id) setMode(nextMode);
      else pendingModeRef.current = nextMode;
      selectMember(id);
    },
    [selectedMember, selectMember],
  );

  const onClose = useCallback(() => {
    // Stay minimized while sliding out; the next selection expands it again.
    setIsOpen(false);
    cancelPendingClose();
    closeTimerRef.current = setTimeout(() => {
      closeTimerRef.current = null;
      setMode("info");
      // Expanded again only once the card is off screen, so it never grows
      // while sliding out or in.
      setIsMinimized(false);
      storeSelectMember(null);
    }, CLOSE_ANIMATION_MS);
  }, [storeSelectMember, cancelPendingClose]);

  const onEditClick = () => setMode("edit");
  const onSuggestClick = () => setMode("suggest");
  const onBackToInfoClick = () => setMode("info");

  return {
    isSidebarOpen: isOpen,
    sidebarMode: mode,
    isSidebarMinimized: isMinimized,
    onMinimizedChange: setIsMinimized,
    selectMember,
    openInMode,
    onClose,
    onEditClick,
    onSuggestClick,
    onBackToInfoClick,
  };
};
