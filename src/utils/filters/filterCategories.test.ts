import { describe, expect, it } from "vitest";
import {
  EMPTY_FILTER_STATE,
  MEMBER_STATUSES,
  ACTIVITY_STATES,
  JOIN_SEASONS,
} from "@/constants/filters";
import { Gender, type FilterCategoryKey, type FilterState } from "@/types";
import { FILTER_CATEGORY_KEYS, isCategoryActive } from "./filterCategories";

const active = (patch: Partial<FilterState>, key: FilterCategoryKey) =>
  isCategoryActive({ ...EMPTY_FILTER_STATE, ...patch }, key);

describe("FILTER_CATEGORY_KEYS", () => {
  it("lists the panel categories in order", () => {
    expect(FILTER_CATEGORY_KEYS).toEqual(["dates", "member", "teams", "roles"]);
  });
});

describe("isCategoryActive", () => {
  it("is inactive for the empty filters", () => {
    for (const key of FILTER_CATEGORY_KEYS) expect(active({}, key)).toBe(false);
  });

  it("dates: years, birthdays and narrowed seasons", () => {
    expect(active({ joinYearFrom: 2015 }, "dates")).toBe(true);
    expect(active({ joinYearTo: 2015 }, "dates")).toBe(true);
    expect(active({ joinSeasons: ["spring"] }, "dates")).toBe(true);
    expect(active({ birthdayFrom: "3-12" }, "dates")).toBe(true);
    expect(active({ birthdayTo: "4-20" }, "dates")).toBe(true);
    expect(active({ joinSeasons: [...JOIN_SEASONS] }, "dates")).toBe(false);
    expect(active({ teamYearFrom: 2019 }, "dates")).toBe(false);
    expect(active({ genders: [Gender.Male] }, "dates")).toBe(false);
  });

  it("member: narrowed statuses, activity states, genders or families", () => {
    expect(active({ statuses: [MEMBER_STATUSES[0]] }, "member")).toBe(true);
    expect(active({ activityStates: [ACTIVITY_STATES[0]] }, "member")).toBe(
      true,
    );
    expect(active({ genders: [Gender.Female] }, "member")).toBe(true);
    expect(active({ familyGroupIds: ["fg-1"] }, "member")).toBe(true);
    expect(active({ statuses: [...MEMBER_STATUSES] }, "member")).toBe(false);
    expect(active({ activityStates: [...ACTIVITY_STATES] }, "member")).toBe(
      false,
    );
    expect(active({ genders: [Gender.Male, Gender.Female] }, "member")).toBe(
      false,
    );
    expect(active({ joinSeasons: ["autumn"] }, "member")).toBe(false);
  });

  it("teams: team types, periods and ongoing toggle", () => {
    expect(active({ teamTypeNames: ["CTF"] }, "teams")).toBe(true);
    expect(active({ teamYearFrom: 2019 }, "teams")).toBe(true);
    expect(active({ teamYearTo: 2021 }, "teams")).toBe(true);
    expect(active({ teamOnlyOngoing: true }, "teams")).toBe(true);
    expect(active({ roleNames: ["A"] }, "teams")).toBe(false);
  });

  it("roles: any picked role", () => {
    expect(active({ roleNames: ["Organizer"] }, "roles")).toBe(true);
    expect(active({ teamTypeNames: ["CTF"] }, "roles")).toBe(false);
  });

  it("ignores the layout", () => {
    expect(active({ treeMode: "team" }, "teams")).toBe(false);
  });
});
