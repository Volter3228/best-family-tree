import { describe, expect, it } from "vitest";
import { getMatchRanges, matchesQuery, searchableName } from "./searchMatching";

describe("searchableName", () => {
  it("keeps only the original in UK", () => {
    expect(searchableName("Іван Петренко", "uk")).toEqual(["Іван Петренко"]);
  });

  it("adds the romanized name first in EN", () => {
    const [shown, original] = searchableName("Іван Петренко", "en");
    expect(original).toBe("Іван Петренко");
    expect(shown).toMatch(/^[\x20-\x7E]+$/);
  });
});

describe("EN name matching", () => {
  const searchable = searchableName("Іван Петренко", "en");
  const [shown] = searchable;

  it("matches the romanized name", () => {
    expect(matchesQuery(searchable, shown.split(" ")[1].slice(0, 4))).toBe(
      true,
    );
  });

  it("matches the original Cyrillic", () => {
    expect(matchesQuery(searchable, "петр")).toBe(true);
  });

  it("does not match unrelated text", () => {
    expect(matchesQuery(searchable, "zzz")).toBe(false);
  });

  it("computes highlight ranges on the displayed text", () => {
    const query = shown.split(" ")[1].slice(0, 3);
    const [[start, end]] = getMatchRanges(shown, query);
    expect(shown.slice(start, end).toLowerCase()).toBe(query.toLowerCase());
  });
});
