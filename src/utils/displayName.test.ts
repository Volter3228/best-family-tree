import { describe, expect, it } from "vitest";
import { displayFamilyName } from "./displayName";
import { romanize } from "./transliterate";

describe("displayFamilyName", () => {
  it.each([
    ["Кролики", "Krolyky", "Rabbits"],
    ["Монголи", "Monholy", "Mongols"],
    ["Президенти", "Prezydenty", "Presidents"],
    ["Легофемелі", "Lehofemeli", "Legofamily"],
  ])("maps %s in en", (name, romanized, english) => {
    expect(romanize(name)).toBe(romanized);
    expect(displayFamilyName(name, "en")).toBe(english);
    expect(displayFamilyName(` ${name.toUpperCase()} `, "en")).toBe(english);
  });

  it("falls back to romanize for other families", () => {
    expect(displayFamilyName("Білики", "en")).toBe("Bilyky");
    expect(displayFamilyName("Лисиці", "en")).toBe(romanize("Лисиці"));
  });

  it("leaves uk unchanged", () => {
    expect(displayFamilyName("Кролики", "uk")).toBe("Кролики");
  });
});
