import { describe, expect, it } from "vitest";
import { MIN_ACTIVE_QUESTIONS } from "../../auth/config.js";
import { answerMatches } from "../../auth/answerMatching.js";
import { DEMO_QUESTIONS } from "./demoQuestions.js";

describe("DEMO_QUESTIONS", () => {
  it("has enough questions to sign in with", () => {
    expect(DEMO_QUESTIONS.length).toBeGreaterThanOrEqual(MIN_ACTIVE_QUESTIONS);
  });

  it("accepts the obvious answers, however they are cased", () => {
    const capital = DEMO_QUESTIONS[0];
    expect(answerMatches("київ", capital.acceptedAnswers)).toBe(true);
    expect(answerMatches("Львів", capital.acceptedAnswers)).toBe(false);
  });
});
