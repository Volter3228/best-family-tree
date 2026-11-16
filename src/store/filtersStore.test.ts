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
  gender: null,
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

describe("resetFilters", () => {
  it("clears the draft and the applied criteria but keeps the layout", () => {
    useMembersStore.getState().setMembers([memberRecord("m1", null)]);
    const store = useFiltersStore.getState();
    store.setDraftFilters({
      ...EMPTY_FILTER_STATE,
      statuses: [MemberStatus.Alumni],
      treeMode: "grid",
    });
    store.applyFilters();
    expect(useFiltersStore.getState().filteredCount).toBe(0);

    useFiltersStore.getState().resetFilters();
    const state = useFiltersStore.getState();
    expect(state.appliedFilters).toEqual({
      ...EMPTY_FILTER_STATE,
      treeMode: "grid",
    });
    expect(state.draftFilters).toEqual(state.appliedFilters);
    expect(state.filteredCount).toBe(1);
  });
});

describe("discardDraft", () => {
  it("resets the draft to the applied filters", () => {
    useMembersStore.getState().setMembers([memberRecord("m1", null)]);
    useFiltersStore
      .getState()
      .setDraftFilters({
        ...EMPTY_FILTER_STATE,
        statuses: [MemberStatus.Alumni],
      });
    useFiltersStore.getState().applyFilters();
    useFiltersStore
      .getState()
      .setDraftFilters({ ...EMPTY_FILTER_STATE, roleNames: ["A"] });

    useFiltersStore.getState().discardDraft();
    const state = useFiltersStore.getState();
    expect(state.draftFilters).toEqual(state.appliedFilters);
    expect(state.filterVersion).toBe(1);
  });
});

describe("setTreeMode", () => {
  it("applies the layout at once and leaves other draft edits pending", () => {
    useMembersStore.getState().setMembers([memberRecord("m1", null)]);
    useFiltersStore
      .getState()
      .setDraftFilters({
        ...EMPTY_FILTER_STATE,
        statuses: [MemberStatus.Alumni],
      });

    useFiltersStore.getState().setTreeMode("grid");
    const state = useFiltersStore.getState();
    expect(state.appliedFilters).toEqual({
      ...EMPTY_FILTER_STATE,
      treeMode: "grid",
    });
    expect(state.draftFilters).toEqual({
      ...EMPTY_FILTER_STATE,
      statuses: [MemberStatus.Alumni],
      treeMode: "grid",
    });
    expect(state.filteredCount).toBe(1);
    expect(state.filterVersion).toBe(1);
  });

  it("does nothing when the layout is already applied", () => {
    const before = useFiltersStore.getState();
    before.setTreeMode("family");
    expect(useFiltersStore.getState()).toBe(before);
  });
});
