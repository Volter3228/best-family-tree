import { describe, expect, it } from "vitest";
import { hasDemoPhoto } from "./photoShare.js";

describe("hasDemoPhoto", () => {
  it("gives a photo to two members out of three", () => {
    const share = Array.from({ length: 300 }, (_, i) => hasDemoPhoto(i)).filter(Boolean);
    expect(share).toHaveLength(200);
  });

  it("leaves the same members without one every time", () => {
    expect(hasDemoPhoto(2)).toBe(false);
    expect(hasDemoPhoto(3)).toBe(true);
  });
});
