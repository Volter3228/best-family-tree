import { create } from "zustand";
import { fetchSession, type AccessLevel, type SessionInfo } from "@/api/auth";

interface SessionState {
  session: SessionInfo | null;
  loaded: boolean;
  load: () => Promise<void>;
}

export const useSessionStore = create<SessionState>((set) => ({
  session: null,
  loaded: false,
  load: async () => {
    const session = await fetchSession().catch(() => null);
    set({ session, loaded: true });
  },
}));

const RANK: Record<AccessLevel, number> = { VIEWER: 0, EDITOR: 1, ADMIN: 2 };

/** Pure rules, mirrored by the API (which is the real enforcement). */
export const canEdit = (session: SessionInfo | null, memberId?: string) => {
  if (!session || RANK[session.level] < RANK.EDITOR) return false;
  if (!memberId || session.level === "ADMIN") return true;
  if (memberId === session.memberId) return true;
  return !session.lockedMemberIds?.includes(memberId);
};

export const isReducedView = (session: SessionInfo | null) =>
  session?.method === "QUESTIONS";
