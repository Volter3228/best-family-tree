import { describe, expect, it } from "vitest";
import { normalizePhone } from "./phone";

describe("normalizePhone", () => {
  it("strips all whitespace", () => {
    expect(normalizePhone("+380 66 127 17 60")).toBe("+380661271760");
    expect(normalizePhone(" 0 66\t127 17 60 ")).toBe("0661271760");
  });
});
