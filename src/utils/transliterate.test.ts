import { describe, expect, it } from "vitest";
import { slugify, transliterate } from "./transliterate";

describe("transliterate", () => {
  it("maps Ukrainian letters to ASCII", () => {
    expect(transliterate("Щербаки")).toBe("shcherbaky");
    expect(transliterate("Їжак Єва")).toBe("izhak ieva");
  });

  it("drops apostrophes and keeps digits and Latin letters", () => {
    expect(transliterate("Сім'я A1")).toBe("simia a1");
  });
});

describe("slugify", () => {
  it("joins words with single hyphens", () => {
    expect(slugify("Сім'я Коваль")).toBe("simia-koval");
    expect(slugify("  Коваль -- Бойко! ")).toBe("koval-boiko");
  });
});
