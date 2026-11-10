import { describe, expect, it } from "vitest";
import { answerMatches, normalizeAnswer } from "./answerMatching.js";

describe("normalizeAnswer", () => {
  it("ignores case, apostrophes, punctuation and extra spaces", () => {
    expect(normalizeAnswer("  Пам'ять,   ВЖЕ ")).toBe(normalizeAnswer("памʼять вже"));
  });

  it("folds Ukrainian letters to Latin", () => {
    expect(normalizeAnswer("Київ")).toBe(normalizeAnswer("kyyv"));
    expect(normalizeAnswer("ґанок")).toBe(normalizeAnswer("ганок"));
  });
});

describe("answerMatches", () => {
  it("matches only exact normalized variants, no fuzzy matching", () => {
    expect(answerMatches("Львів", ["львів", "lviv"])).toBe(true);
    expect(answerMatches("lviv", ["львів", "lviv"])).toBe(true);
    expect(answerMatches("львов", ["львів"])).toBe(false);
    expect(answerMatches("", [""])).toBe(false);
  });
});
