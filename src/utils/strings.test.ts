import { describe, expect, it } from "vitest";
import { initialsOf } from "./strings";

describe("initialsOf", () => {
  it("takes the first letters of the first two words", () => {
    expect(initialsOf("BEST Course")).toBe("BC");
  });

  it("takes two letters of a single word", () => {
    expect(initialsOf("EJF")).toBe("EJ");
  });

  it("is empty for blank names", () => {
    expect(initialsOf("   ")).toBe("");
  });
});
