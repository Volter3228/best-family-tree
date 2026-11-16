import { describe, expect, it } from "vitest";
import { EMPTY_FILTER_STATE } from "@/constants/filters";
import { Gender, MemberStatus, type FilterState } from "@/types";
import { areFiltersEqual } from "./areFiltersEqual";
import { countActiveFilters } from "./filterMembers";

describe("areFiltersEqual", () => {
  it("ignores list order", () => {
    expect(
      areFiltersEqual(
        { ...EMPTY_FILTER_STATE, roleNames: ["A", "B"] },
        { ...EMPTY_FILTER_STATE, roleNames: ["B", "A"] },
      ),
    ).toBe(true);
  });

  it("ignores order of the new list criteria", () => {
    expect(
      areFiltersEqual(
        {
          ...EMPTY_FILTER_STATE,
          genders: [Gender.Male, Gender.Female],
          familyGroupIds: ["a", "b"],
        },
        {
          ...EMPTY_FILTER_STATE,
          genders: [Gender.Female, Gender.Male],
          familyGroupIds: ["b", "a"],
        },
      ),
    ).toBe(true);
  });

  it("sees changed values in the new list criteria", () => {
    expect(
      areFiltersEqual(EMPTY_FILTER_STATE, {
        ...EMPTY_FILTER_STATE,
        genders: [Gender.Male],
      }),
    ).toBe(false);
    expect(
      areFiltersEqual(EMPTY_FILTER_STATE, {
        ...EMPTY_FILTER_STATE,
        familyGroupIds: ["a"],
      }),
    ).toBe(false);
  });

  it("ignores the year flag while no birthday bound is set", () => {
    expect(
      areFiltersEqual(EMPTY_FILTER_STATE, {
        ...EMPTY_FILTER_STATE,
        birthdayIncludeYear: true,
      }),
    ).toBe(true);
    expect(
      areFiltersEqual(
        { ...EMPTY_FILTER_STATE, birthdayIncludeYear: true },
        EMPTY_FILTER_STATE,
      ),
    ).toBe(true);
  });

  it("sees the year flag once a birthday bound is set", () => {
    const bound = { ...EMPTY_FILTER_STATE, birthdayFrom: "5-1" };
    expect(
      areFiltersEqual(bound, { ...bound, birthdayIncludeYear: true }),
    ).toBe(false);
  });

  it("sees changed values and layouts", () => {
    expect(
      areFiltersEqual(EMPTY_FILTER_STATE, {
        ...EMPTY_FILTER_STATE,
        joinYearFrom: 2020,
      }),
    ).toBe(false);
    expect(
      areFiltersEqual(EMPTY_FILTER_STATE, {
        ...EMPTY_FILTER_STATE,
        treeMode: "grid",
      }),
    ).toBe(false);
  });
});

describe("countActiveFilters", () => {
  it("counts set criteria across both categories, not the layout", () => {
    const filters: FilterState = {
      ...EMPTY_FILTER_STATE,
      statuses: [MemberStatus.Full],
      joinYearFrom: 2015,
      roleNames: ["A"],
      teamOnlyOngoing: true,
      treeMode: "grid",
    };
    expect(countActiveFilters(filters)).toBe(4);
    expect(countActiveFilters(EMPTY_FILTER_STATE)).toBe(0);
  });
});
