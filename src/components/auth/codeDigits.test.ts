import { describe, expect, it } from "vitest";
import {
  applyDigits,
  backspaceAt,
  emptyDigits,
  isComplete,
} from "./codeDigits";

describe("applyDigits", () => {
  it("types one digit and moves on", () => {
    expect(applyDigits(emptyDigits(), 0, "4")).toEqual({
      digits: ["4", "", "", "", "", ""],
      focusIndex: 1,
    });
  });

  it("stays on the last box after the last digit", () => {
    expect(applyDigits(["1", "2", "3", "4", "5", ""], 5, "6").focusIndex).toBe(5);
  });

  it("fills every box from a pasted code, wherever it landed", () => {
    expect(applyDigits(emptyDigits(), 3, "123456").digits).toEqual([
      "1", "2", "3", "4", "5", "6",
    ]);
  });

  it("ignores spaces and dashes in a pasted code", () => {
    expect(applyDigits(emptyDigits(), 0, "12 34-56").digits.join("")).toBe("123456");
  });

  it("drops digits past the sixth", () => {
    expect(applyDigits(emptyDigits(), 0, "1234567890").digits.join("")).toBe("123456");
  });

  it("fills a short paste forward from the box", () => {
    expect(applyDigits(emptyDigits(), 2, "78").digits).toEqual([
      "", "", "7", "8", "", "",
    ]);
  });

  it("does not run off the end with a short paste", () => {
    const out = applyDigits(emptyDigits(), 4, "789");
    expect(out.digits).toEqual(["", "", "", "", "7", "8"]);
    expect(out.focusIndex).toBe(5);
  });

  it("clears the box for non-digit input", () => {
    expect(applyDigits(["1", "2", "", "", "", ""], 1, "x").digits[1]).toBe("");
  });
});

describe("backspaceAt", () => {
  it("clears a filled box and stays", () => {
    expect(backspaceAt(["1", "2", "", "", "", ""], 1)).toEqual({
      digits: ["1", "", "", "", "", ""],
      focusIndex: 1,
    });
  });

  it("steps back and clears the previous box from an empty one", () => {
    expect(backspaceAt(["1", "2", "", "", "", ""], 2)).toEqual({
      digits: ["1", "", "", "", "", ""],
      focusIndex: 1,
    });
  });

  it("does nothing at the first empty box", () => {
    expect(backspaceAt(emptyDigits(), 0)).toEqual({
      digits: emptyDigits(),
      focusIndex: 0,
    });
  });
});

describe("isComplete", () => {
  it("needs six digits", () => {
    expect(isComplete(["1", "2", "3", "4", "5", "6"])).toBe(true);
    expect(isComplete(["1", "2", "3", "4", "5", ""])).toBe(false);
  });
});
