import { describe, expect, it } from "vitest";
import { formatRecruitmentTerm, getTermAccent } from "./memberPresentation";

describe("year-only recruitment term", () => {
  const term = { season: null, year: 2010 };

  it("formats as the bare year", () => {
    expect(formatRecruitmentTerm(term, false, "en")).toBe("2010");
    expect(formatRecruitmentTerm(term, true, "uk")).toBe("2010");
  });

  it("keeps the season label otherwise", () => {
    expect(
      formatRecruitmentTerm({ season: "spring", year: 2012 }, true, "en"),
    ).toBe("🌸Spring 2012🌸");
  });

  it("is blue; seasons keep their colours", () => {
    expect(getTermAccent(term)).toBe("blue");
    expect(getTermAccent({ season: "spring", year: 1 })).toBe("green");
    expect(getTermAccent({ season: "autumn", year: 1 })).toBe("orange");
  });
});
