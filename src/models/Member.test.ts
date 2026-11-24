import { describe, expect, it } from "vitest";
import Member, { isJoinYearOnly } from "./Member";

describe("isJoinYearOnly", () => {
  it("detects a stored UTC-midnight 1 January", () => {
    expect(isJoinYearOnly(new Date("2010-01-01T00:00:00.000Z"))).toBe(true);
  });

  it("detects a 1 January picked in the form (local midnight)", () => {
    expect(isJoinYearOnly(new Date(2010, 0, 1))).toBe(true);
  });

  it("rejects other dates", () => {
    expect(isJoinYearOnly(new Date("2010-01-02T00:00:00.000Z"))).toBe(false);
    expect(isJoinYearOnly(new Date("2010-09-01T00:00:00.000Z"))).toBe(false);
  });

  it("rejects 2 January picked in Kyiv (1 January 22:00 UTC)", () => {
    expect(isJoinYearOnly(new Date("2010-01-01T22:00:00.000Z"))).toBe(false);
  });
});

describe("getRecruitmentTerm", () => {
  const termOf = (joinedAt: Date) =>
    new Member({ joinedAt, name: "A" } as never).getRecruitmentTerm();

  it("has no season for a year-only date", () => {
    expect(termOf(new Date("2010-01-01T00:00:00.000Z"))).toEqual({
      season: null,
      year: 2010,
    });
  });

  it("uses spring and autumn otherwise", () => {
    expect(termOf(new Date(2015, 1, 10)).season).toBe("spring");
    expect(termOf(new Date(2015, 9, 10)).season).toBe("autumn");
  });
});
