import { create } from "zustand";

interface ManageState {
  // Closed only by the user (its close button or the toolbar).
  isOpen: boolean;
  // Above an open info sidebar; otherwise stacked behind it.
  isFront: boolean;
  open: () => void;
  close: () => void;
  bringForward: () => void;
  sendBack: () => void;
}

export const useManageStore = create<ManageState>((set) => ({
  isOpen: false,
  isFront: true,
  open: () => set({ isOpen: true, isFront: true }),
  close: () => set({ isOpen: false }),
  bringForward: () => set({ isFront: true }),
  sendBack: () => set((s) => (s.isOpen ? { isFront: false } : s)),
}));
