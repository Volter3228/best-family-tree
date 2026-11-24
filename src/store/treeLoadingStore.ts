import { create } from "zustand";

// The first-load spinner: shown from the first byte of the page (before the
// tree data arrives), played out once the tree is drawn.
export type TreeLoadingPhase = "loading" | "exiting" | "done";

interface TreeLoadingState {
  phase: TreeLoadingPhase;
  setPhase: (phase: TreeLoadingPhase) => void;
}

export const useTreeLoadingStore = create<TreeLoadingState>((set) => ({
  phase: "loading",
  setPhase: (phase) => set({ phase }),
}));
