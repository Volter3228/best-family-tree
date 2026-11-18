import { describe, expect, it } from "vitest";
import { detectLocale } from "./locale";

describe("detectLocale", () => {
  it("picks uk for uk and ru first", () => {
    expect(detectLocale("uk-UA,en;q=0.8")).toBe("uk");
    expect(detectLocale("ru-RU,en")).toBe("uk");
  });
  it("picks en otherwise", () => {
    expect(detectLocale("en-US,uk;q=0.5")).toBe("en");
    expect(detectLocale("de")).toBe("en");
  });
  it("defaults to uk when empty", () => {
    expect(detectLocale("")).toBe("uk");
    expect(detectLocale(null)).toBe("uk");
    expect(detectLocale(undefined)).toBe("uk");
  });
});
