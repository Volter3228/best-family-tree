import { describe, expect, it } from "vitest";
import { DEMO_QUESTIONS } from "../scripts/demo/demoQuestions.js";
import { answerMatches, normalizeAnswer } from "./answerMatching.js";

describe("normalizeAnswer", () => {
  it("ignores case, apostrophes, punctuation and extra spaces", () => {
    expect(normalizeAnswer("  Пам'ять,   ВЖЕ ")).toBe(
      normalizeAnswer("памʼять вже"),
    );
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

describe("demo questions", () => {
  it("accept plain English answers in any case", () => {
    const answers = DEMO_QUESTIONS.map((q) => q.acceptedAnswers);
    expect(answerMatches("kyiv", answers[0])).toBe(true);
    expect(answerMatches("KIEV", answers[0])).toBe(true);
    expect(answerMatches("SEVEN", answers[1])).toBe(true);
    expect(answerMatches("Four", answers[2])).toBe(true);
    expect(answerMatches("Kitten", answers[3])).toBe(true);
    expect(answerMatches("Green", answers[4])).toBe(true);
    expect(answerMatches("Twelve", answers[5])).toBe(true);
  });
});
