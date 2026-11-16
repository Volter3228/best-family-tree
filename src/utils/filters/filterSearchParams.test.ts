import { describe, expect, it } from "vitest";
import { EMPTY_FILTER_STATE, GENDER_VALUES } from "@/constants/filters";
import { Gender, MemberStatus, type FilterState } from "@/types";
import {
  filtersToSearchParams,
  parseFiltersFromSearchParams,
} from "./filterSearchParams";

const parse = (query: string) =>
  parseFiltersFromSearchParams(new URLSearchParams(query));

const toParams = (filters: FilterState) =>
  filtersToSearchParams(filters).toString();

describe("new member params", () => {
  const filters: FilterState = {
    ...EMPTY_FILTER_STATE,
    statuses: [MemberStatus.Full],
    genders: [Gender.Female],
    familyGroupIds: ["fg 1,with comma", "fg-2"],
  };

  it("round-trips gender and family", () => {
    expect(parse(toParams(filters))).toEqual(filters);
  });

  it("writes gender only when it narrows the list", () => {
    const params = filtersToSearchParams({
      ...EMPTY_FILTER_STATE,
      genders: [...GENDER_VALUES],
    });
    expect(params.has("gender")).toBe(false);
    expect(
      filtersToSearchParams({
        ...EMPTY_FILTER_STATE,
        genders: [Gender.Male],
      }).get("gender"),
    ).toBe("male");
  });

  it("drops unknown gender values", () => {
    const parsed = parse("gender=alien,female");
    expect(parsed.genders).toEqual([Gender.Female]);
  });
});

describe("old URLs", () => {
  it("ignore the removed range params", () => {
    const parsed = parse(
      "joinYearFrom=2015&joinYearRange=1&birthdayRange=1&teamYearRange=1",
    );
    expect(parsed).toEqual({ ...EMPTY_FILTER_STATE, joinYearFrom: 2015 });
    expect(parsed).not.toHaveProperty("joinYearRange");
    expect(parsed).not.toHaveProperty("birthdayRange");
    expect(parsed).not.toHaveProperty("teamYearRange");
  });

  it("do not write the removed range params", () => {
    expect(
      toParams({ ...EMPTY_FILTER_STATE, joinYearFrom: 2015, joinYearTo: 2020 }),
    ).toBe("joinYearFrom=2015&joinYearTo=2020");
  });
});
