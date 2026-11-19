import { create } from "zustand";

export type ProfileOpenMode = "info" | "edit" | "suggest";

interface ProfileOpenRequest {
  memberId: string;
  mode: ProfileOpenMode;
  // Repeated requests for the same member still trigger subscribers.
  nonce: number;
}

interface ProfileState {
  request: ProfileOpenRequest | null;
  teamRequest: { teamId: string; nonce: number } | null;
  // Asks the tree to select, focus and open a member's sidebar in a mode.
  requestOpen: (memberId: string, mode: ProfileOpenMode) => void;
  // Asks the tree to open a team's info sidebar (and focus it in team view).
  requestOpenTeam: (teamId: string) => void;
  clear: () => void;
  clearTeam: () => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  request: null,
  teamRequest: null,
  requestOpen: (memberId, mode) =>
    set({ request: { memberId, mode, nonce: Date.now() } }),
  requestOpenTeam: (teamId) =>
    set({ teamRequest: { teamId, nonce: Date.now() } }),
  clear: () => set({ request: null }),
  clearTeam: () => set({ teamRequest: null }),
}));
