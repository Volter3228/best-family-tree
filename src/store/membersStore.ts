import { create } from "zustand";
import { fetchFamilyTree, fetchMentorsList } from "@/api";
import { Member } from "@/models";
import { buildMembersIndex, getUpdatedMentorsList } from "@/utils/membersTree";
import type {
  ChildrenMap,
  Member as MemberType,
  MemberPosition,
  MembersMap,
  MentorsListItem,
} from "@/types";

interface MembersState {
  // Single source of truth: updating a member replaces one entry.
  byId: MembersMap;
  // Ordered mentee ids by mentor id.
  childrenOf: ChildrenMap;
  rootIds: string[];
  // Pre-order list of `byId` (see buildMembersIndex).
  members: Member[];
  // Bumps when the tree shape or anything the layout reads from members
  // (mentor, status, positions) changes, not on name/photo/contact edits.
  structureVersion: number;
  selectedId: string | null;
  mentorsList: MentorsListItem[];
}

interface MembersActions {
  setMembers: (members: MemberType[]) => void;
  reloadMembers: () => Promise<void>;
  addMember: (member: MemberType) => void;
  updateMember: (member: MemberType) => void;
  selectMember: (id: string | null) => void;
  getMentorsList: () => Promise<void>;
}

const EMPTY_INDEX = buildMembersIndex([]);

const withIndex = (
  state: MembersState,
  members: Member[],
): Partial<MembersState> => {
  const index = buildMembersIndex(members);
  return {
    ...index,
    structureVersion: state.structureVersion + 1,
    selectedId:
      state.selectedId && index.byId.has(state.selectedId)
        ? state.selectedId
        : null,
  };
};

// Fields that change the tree or the team layout; everything else can be
// applied to the existing nodes without relayout.
const isSamePosition = (a: MemberPosition, b: MemberPosition) =>
  a.id === b.id &&
  a.roleId === b.roleId &&
  a.teamId === b.teamId &&
  a.organization === b.organization &&
  a.startYear === b.startYear &&
  a.endYear === b.endYear &&
  a.role?.isLeaderPosition === b.role?.isLeaderPosition &&
  a.team?.name === b.team?.name &&
  a.team?.iconUrl === b.team?.iconUrl &&
  a.team?.teamTypeId === b.team?.teamTypeId &&
  a.team?.startYear === b.team?.startYear &&
  a.team?.endYear === b.team?.endYear &&
  a.team?.isOngoing === b.team?.isOngoing;

const changesStructure = (prev: Member, next: Member) =>
  prev.mentorId !== next.mentorId ||
  prev.status !== next.status ||
  prev.positions.length !== next.positions.length ||
  prev.positions.some((p, i) => !isSamePosition(p, next.positions[i]));

// The latest reload wins, whatever order the responses arrive in.
let reloadRequestId = 0;

export const useMembersStore = create<MembersState & MembersActions>(
  (set, get) => ({
    ...EMPTY_INDEX,
    structureVersion: 0,
    selectedId: null,
    mentorsList: [],

    setMembers: (members) =>
      set((state) => withIndex(state, members.map((m) => new Member(m)))),

    reloadMembers: async () => {
      const requestId = ++reloadRequestId;
      const members = await fetchFamilyTree();
      if (requestId !== reloadRequestId) return;
      get().setMembers(members);
    },

    addMember: (newMember) =>
      set((state) => ({
        ...withIndex(state, [...state.members, new Member(newMember)]),
        mentorsList: getUpdatedMentorsList(state.mentorsList, newMember),
      })),

    updateMember: (data) =>
      set((state) => {
        const existing = state.byId.get(data.id);
        if (!existing) return state;

        const updated = existing.clone(data);
        const mentorsList = getUpdatedMentorsList(
          state.mentorsList,
          data,
          "update",
        );

        // A moved member goes last under the new mentor.
        if (existing.mentorId !== updated.mentorId) {
          const others = state.members.filter((m) => m.id !== data.id);
          return { ...withIndex(state, [...others, updated]), mentorsList };
        }

        const byId = new Map(state.byId).set(data.id, updated);
        return {
          byId,
          members: state.members.map((m) => (m.id === data.id ? updated : m)),
          structureVersion: changesStructure(existing, updated)
            ? state.structureVersion + 1
            : state.structureVersion,
          mentorsList,
        };
      }),

    selectMember: (selectedId) => set({ selectedId }),

    getMentorsList: async () => {
      try {
        set({ mentorsList: await fetchMentorsList() });
      } catch (error) {
        console.error("Failed to fetch mentors list:", error);
        set({ mentorsList: [] });
      }
    },
  }),
);

export const getMemberById = (id: string): Member | undefined =>
  useMembersStore.getState().byId.get(id);
