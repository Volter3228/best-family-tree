import { describe, expect, it } from "vitest";
import { Member } from "@/models";
import { EMPTY_FILTER_STATE, GENDER_VALUES } from "@/constants/filters";
import {
  ActivityState,
  Gender,
  MemberStatus,
  type FilterState,
  type Member as MemberRecord,
} from "@/types";
import {
  countActiveMemberFilters,
  isFilterActive,
  memberMatchesFilters,
} from "./filterMembers";

// Local-time dates, so getDate()/getYear() do not shift with the test TZ.
const makeMember = (patch: Partial<MemberRecord> = {}): Member =>
  new Member({
    id: "m1",
    name: "Member",
    birthday: null,
    email: null,
    facebookLink: null,
    familyGroupId: null,
    gender: null,
    instagramLink: null,
    joinedAt: new Date(2020, 2, 1),
    linkedinLink: null,
    mentorId: null,
    phoneNumbers: [],
    photo: null,
    status: MemberStatus.Full,
    telegramLink: null,
    activityState: ActivityState.Active,
    course: null,
    createdAt: new Date(2020, 2, 1),
    updatedAt: new Date(2020, 2, 1),
    positions: [],
    ...patch,
  });

const filters = (patch: Partial<FilterState>): FilterState => ({
  ...EMPTY_FILTER_STATE,
  ...patch,
});

const matches = (member: Member, patch: Partial<FilterState>) =>
  memberMatchesFilters(member, filters(patch));

// Joined 2020, born 14 July 1995.
const born = (year: number, month: number, day: number) =>
  new Date(year, month - 1, day);

describe("join year range", () => {
  const member = makeMember({ joinedAt: new Date(2020, 2, 1) });

  it("matches the exact year when only one bound is set", () => {
    expect(matches(member, { joinYearFrom: 2020 })).toBe(true);
    expect(matches(member, { joinYearTo: 2020 })).toBe(true);
    expect(matches(member, { joinYearFrom: 2019 })).toBe(false);
    expect(matches(member, { joinYearTo: 2021 })).toBe(false);
  });

  it("is inclusive when both bounds are set", () => {
    expect(matches(member, { joinYearFrom: 2018, joinYearTo: 2020 })).toBe(
      true,
    );
    expect(matches(member, { joinYearFrom: 2020, joinYearTo: 2024 })).toBe(
      true,
    );
    expect(matches(member, { joinYearFrom: 2021, joinYearTo: 2024 })).toBe(
      false,
    );
  });

  it("swaps an inverted range", () => {
    expect(matches(member, { joinYearFrom: 2024, joinYearTo: 2018 })).toBe(
      true,
    );
    expect(matches(member, { joinYearFrom: 2024, joinYearTo: 2021 })).toBe(
      false,
    );
  });
});

describe("birthday rule", () => {
  const member = makeMember({ birthday: born(1995, 7, 14) });

  it("keeps the day-of-year range when the year is not included", () => {
    expect(matches(member, { birthdayFrom: "7-10", birthdayTo: "7-20" })).toBe(
      true,
    );
    expect(matches(member, { birthdayFrom: "7-15", birthdayTo: "7-20" })).toBe(
      false,
    );
    expect(matches(member, { birthdayFrom: "1-1", birthdayTo: "12-31" })).toBe(
      true,
    );
    expect(
      matches(member, { birthdayFrom: "1995-7-10", birthdayTo: "1995-7-20" }),
    ).toBe(true);
  });

  it("matches the exact day when only one bound is set", () => {
    expect(matches(member, { birthdayFrom: "7-14" })).toBe(true);
    expect(matches(member, { birthdayTo: "7-14" })).toBe(true);
    expect(matches(member, { birthdayFrom: "7-15" })).toBe(false);
    expect(matches(member, { birthdayFrom: "6-14" })).toBe(false);
  });

  it("compares the year for single bounds only when birthdayIncludeYear is set", () => {
    expect(
      matches(member, { birthdayFrom: "1995-7-14", birthdayIncludeYear: true }),
    ).toBe(true);
    expect(
      matches(member, { birthdayFrom: "1996-7-14", birthdayIncludeYear: true }),
    ).toBe(false);
    expect(matches(member, { birthdayFrom: "1996-7-14" })).toBe(true);
    expect(
      matches(member, { birthdayFrom: "7-14", birthdayIncludeYear: true }),
    ).toBe(true);
  });

  it("compares the full date in ranges when birthdayIncludeYear is set", () => {
    expect(
      matches(member, {
        birthdayFrom: "1995-7-1",
        birthdayTo: "1995-7-31",
        birthdayIncludeYear: true,
      }),
    ).toBe(true);
    expect(
      matches(member, {
        birthdayFrom: "1996-1-1",
        birthdayTo: "1997-1-1",
        birthdayIncludeYear: true,
      }),
    ).toBe(false);
    // Same day-of-year, but outside the year range.
    expect(
      matches(member, {
        birthdayFrom: "7-1",
        birthdayTo: "7-31",
        birthdayIncludeYear: true,
      }),
    ).toBe(true);
  });

  it("drops members without a birthday when a birthday filter is set", () => {
    expect(matches(makeMember(), { birthdayFrom: "7-14" })).toBe(false);
  });
});

describe("gender", () => {
  const male = makeMember({ gender: Gender.Male });
  const female = makeMember({ gender: Gender.Female });
  const unknown = makeMember({ gender: null });

  it("keeps members whose gender is selected", () => {
    expect(matches(male, { genders: [Gender.Male] })).toBe(true);
    expect(matches(female, { genders: [Gender.Male] })).toBe(false);
  });

  it("drops members with no gender while the filter is set", () => {
    expect(matches(unknown, { genders: [Gender.Male] })).toBe(false);
  });

  it("is not a filter when every gender is selected", () => {
    expect(matches(unknown, { genders: [...GENDER_VALUES] })).toBe(true);
    expect(isFilterActive(filters({ genders: [...GENDER_VALUES] }))).toBe(
      false,
    );
    expect(isFilterActive(filters({ genders: [Gender.Male] }))).toBe(true);
  });
});

describe("family group", () => {
  const inGroup = makeMember({ familyGroupId: "fg-1" });
  const otherGroup = makeMember({ familyGroupId: "fg-2" });
  const noGroup = makeMember({ familyGroupId: null });

  it("keeps members of the selected groups", () => {
    expect(matches(inGroup, { familyGroupIds: ["fg-1", "fg-3"] })).toBe(true);
    expect(matches(otherGroup, { familyGroupIds: ["fg-1", "fg-3"] })).toBe(
      false,
    );
    expect(matches(noGroup, { familyGroupIds: ["fg-1"] })).toBe(false);
  });

  it("is active with any selected group", () => {
    expect(isFilterActive(filters({ familyGroupIds: ["fg-1"] }))).toBe(true);
    expect(isFilterActive(filters({}))).toBe(false);
  });
});

describe("countActiveMemberFilters", () => {
  it("counts each active list as one", () => {
    expect(
      countActiveMemberFilters(
        filters({
          genders: [Gender.Male],
          familyGroupIds: ["fg-1", "fg-2"],
        }),
      ),
    ).toBe(2);
  });

  it("does not count a gender list that holds every value", () => {
    expect(
      countActiveMemberFilters(filters({ genders: [...GENDER_VALUES] })),
    ).toBe(0);
  });
});
