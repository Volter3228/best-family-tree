import { describe, expect, it } from "vitest";
import { formatCount, plural } from "./plural";

const uk = { one: "рік", few: "роки", many: "років", other: "років" };
const en = { one: "year", other: "years" };

describe("plural", () => {
  it("handles Ukrainian forms", () => {
    expect([1, 2, 5, 11, 21].map((n) => plural("uk", n, uk))).toEqual([
      "рік",
      "роки",
      "років",
      "років",
      "рік",
    ]);
  });
  it("handles English forms", () => {
    expect(plural("en", 1, en)).toBe("year");
    expect(plural("en", 2, en)).toBe("years");
  });
  it("formats counts", () => {
    expect(formatCount("en", 5, en)).toBe("5 years");
    expect(formatCount("uk", 3, uk)).toBe("3 роки");
  });
});
