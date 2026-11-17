import { describe, expect, it } from "vitest";
import { getMatchRanges, matchesQuery, rankMatch } from "./useSearchSuggestions";

describe("matchesQuery", () => {
  it("matches substrings case-insensitively across fields", () => {
    expect(matchesQuery(["Павло Говолко"], "вол")).toBe(true);
    expect(matchesQuery(["Anna", "Kyiv"], "KY")).toBe(true);
  });
  it("requires every query part", () => {
    expect(matchesQuery(["Anna Smith"], "ann zzz")).toBe(false);
    expect(matchesQuery(["Anna Smith"], "smi ann")).toBe(true);
  });
  it("rejects an empty query", () => {
    expect(matchesQuery(["Anna"], "  ")).toBe(false);
  });
});

describe("rankMatch", () => {
  it("ranks prefix matches before substring matches", () => {
    const a = rankMatch(["Тамара Волошенко"], "вол");
    const b = rankMatch(["Володимир Бойко"], "вол");
    const c = rankMatch(["Павло Говолко"], "вол");
    expect(a).toBe(b);
    expect(a).toBeLessThan(c);
  });
  it("requires all parts to be prefixes for the best rank", () => {
    expect(rankMatch(["Anna Smith"], "ann smi")).toBeLessThan(rankMatch(["Anna Smith"], "ann ith"));
  });
  it("ranks non-matches last", () => {
    expect(rankMatch(["Anna"], "xyz")).toBeGreaterThan(rankMatch(["Anna"], "nn"));
  });
});

describe("getMatchRanges", () => {
  it("is case-insensitive and keeps original positions", () => {
    expect(getMatchRanges("Тамара Волошенко", "ВОЛ")).toEqual([[7, 10]]);
  });
  it("handles multiple parts", () => {
    expect(getMatchRanges("Anna Smith", "smi ann")).toEqual([[0, 3], [5, 8]]);
  });
  it("merges overlapping ranges", () => {
    expect(getMatchRanges("Anna", "an nn")).toEqual([[0, 3]]);
  });
  it("returns [] when nothing matches", () => {
    expect(getMatchRanges("Anna", "xyz")).toEqual([]);
    expect(getMatchRanges("Anna", "")).toEqual([]);
  });
});
