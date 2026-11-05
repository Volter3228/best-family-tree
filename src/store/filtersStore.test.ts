import { beforeEach, describe, expect, it } from "vitest";
import { EMPTY_FILTER_STATE } from "@/constants/filters";
import { ActivityState, MemberStatus, type Member } from "@/types";
import { useFiltersStore } from "./filtersStore";
import { useMembersStore } from "./membersStore";

const memberRecord = (id: string, photo: string | null): Member => ({
  id,
  name: id,
  birthday: null,
  email: null,
  facebookLink: null,
  familyGroupId: null,
  instagramLink: null,
  joinedAt: new Date("2020-03-01"),
  linkedinLink: null,
  mentorId: null,
  phoneNumbers: [],
  photo,
  status: MemberStatus.Full,
  telegramLink: null,
  activityState: ActivityState.Active,
  course: null,
  createdAt: new Date("2020-03-01"),
  updatedAt: new Date("2020-03-01"),
  positions: [],
});

const initialFiltersState = useFiltersStore.getState();

beforeEach(() => {
  useFiltersStore.setState(initialFiltersState, true);
  useMembersStore.setState({
    members: [],
    byId: new Map(),
    childrenOf: new Map(),
    rootIds: [],
    selectedId: null,
  });
});

describe("applyFilters", () => {
  it("applies the draft tree mode even when the filtered members do not change", () => {
    useMembersStore.getState().setMembers([memberRecord("m1", "photo.jpg")]);
    useFiltersStore
      .getState()
      .setDraftFilters({ ...EMPTY_FILTER_STATE, avatars: ["with"] });

    // The member set stays the same for grid and family, so the filter result
    // is unchanged between the two applies below.
    for (const treeMode of ["grid", "family"] as const) {
      useFiltersStore
        .getState()
        .setDraftFilters((prev) => ({ ...prev, treeMode }));
      useFiltersStore.getState().applyFilters();
      expect(useFiltersStore.getState().appliedFilters.treeMode).toBe(treeMode);
    }
    expect(useFiltersStore.getState().filterVersion).toBe(2);
  });
});
