import { describe, expect, it } from "vitest";
import { isExpired, isSolved, swapQuestion } from "./challengeRules.js";

const base = {
  questionIds: ["a", "b", "c"],
  solvedQuestionIds: ["a"],
  swapsLeft: 1,
  expiresAt: new Date(Date.now() + 60_000),
};

describe("challenge rules", () => {
  it("detects expiry and completion", () => {
    expect(isExpired(base)).toBe(false);
    expect(isExpired({ ...base, expiresAt: new Date(Date.now() - 1) })).toBe(true);
    expect(isSolved(base)).toBe(false);
    expect(isSolved({ ...base, solvedQuestionIds: ["a", "b", "c"] })).toBe(true);
  });

  it("swaps an unsolved question once", () => {
    const result = swapQuestion(base, "b", ["a", "b", "c", "d"], (s) => s[0]);
    expect(result).toEqual({ ok: true, questionIds: ["a", "d", "c"], swapsLeft: 0 });
    expect(
      swapQuestion({ ...base, swapsLeft: 0 }, "b", ["a", "b", "c", "d"]),
    ).toEqual({ ok: false, reason: "no-swaps" });
  });

  it("refuses to swap a solved question or without a spare", () => {
    expect(swapQuestion(base, "a", ["a", "b", "c", "d"])).toEqual({
      ok: false,
      reason: "solved",
    });
    expect(swapQuestion(base, "b", ["a", "b", "c"])).toEqual({
      ok: false,
      reason: "no-spare",
    });
  });
});
