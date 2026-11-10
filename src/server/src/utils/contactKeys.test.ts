import { describe, expect, it } from "vitest";
import { contactKey, findContactCollision } from "./contactKeys.js";

describe("contactKey", () => {
  it("treats url spellings of one telegram handle as equal", () => {
    const keys = [
      "https://t.me/Ivan",
      "t.me/ivan/",
      "http://www.t.me/IVAN?start=1",
      "@ivan",
      "ivan",
    ].map((v) => contactKey("telegram", v));
    expect(new Set(keys).size).toBe(1);
    expect(keys[0]).toBe("telegram:ivan");
  });

  it("handles linkedin /in/ paths", () => {
    expect(contactKey("linkedin", "https://www.linkedin.com/in/Ann/")).toBe(
      "linkedin:ann",
    );
  });

  it("lowercases email and ignores empties", () => {
    expect(contactKey("email", " A@B.com ")).toBe("email:a@b.com");
    expect(contactKey("email", "  ")).toBeNull();
    expect(contactKey("telegram", null)).toBeNull();
  });
});

describe("findContactCollision", () => {
  it("reports the colliding platform", () => {
    expect(
      findContactCollision(
        { email: "X@y.com", telegramLink: "t.me/a" },
        [{ email: "x@y.com" }],
      ),
    ).toBe("email");
  });

  it("returns null without collisions", () => {
    expect(findContactCollision({ telegramLink: "t.me/a" }, [{ telegramLink: "t.me/b" }])).toBeNull();
  });
});

describe("facebook profile.php links", () => {
  it("keys by the numeric id, not the shared path", () => {
    const a = contactKey("facebook", "https://facebook.com/profile.php?id=100001");
    const b = contactKey("facebook", "https://www.facebook.com/profile.php?id=100002&ref=x");
    expect(a).not.toBe(b);
    expect(contactKey("facebook", "fb.com/profile.php?sk=x&id=100001")).toBe(a);
  });
});
