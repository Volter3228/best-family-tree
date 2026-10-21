import { useShallow } from "zustand/react/shallow";
import { Member } from "@/models";
import { useMembersStore } from "@/store/membersStore";

const {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
} = useMembersStore.getState();

// Actions never change, so they are shared instead of subscribed to.
const membersActions = {
  setMembers,
  reloadMembers,
  addMember,
  updateMember,
  selectMember,
  getMentorsList,
};

export const useMembersActions = () => membersActions;

/** Pre-order list of every member; changes identity on any member edit. */
export const useMembersList = () => useMembersStore((s) => s.members);

export const useMembersMap = () => useMembersStore((s) => s.byId);

export const useMentorsList = () => useMembersStore((s) => s.mentorsList);

export const useSelectedId = () => useMembersStore((s) => s.selectedId);

/** Re-renders only when this member's record changes. */
export const useMemberById = (id: string | null | undefined) =>
  useMembersStore((s) => (id ? s.byId.get(id) : undefined));

export const useSelectedMember = (): Member | null =>
  useMembersStore((s) => (s.selectedId ? (s.byId.get(s.selectedId) ?? null) : null));

/** Direct mentees in tree order; keeps its identity until one of them changes. */
export const useMentees = (memberId: string): Member[] =>
  useMembersStore(
    useShallow((s) =>
      (s.childrenOf.get(memberId) ?? []).flatMap((id) => s.byId.get(id) ?? []),
    ),
  );
