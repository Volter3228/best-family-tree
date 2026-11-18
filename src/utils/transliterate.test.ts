import { describe, expect, it } from "vitest";
import { romanize } from "./transliterate";

describe("romanize", () => {
  it.each([
    ["Алушта", "Alushta"],
    ["Згорани", "Zghorany"],
    ["Розгон", "Rozghon"],
    ["Юрій", "Yurii"],
    ["Їжакевич", "Yizhakevych"],
    ["Знам'янка", "Znamianka"],
    ["Короп'є", "Koropie"],
    ["Щербухи", "Shcherbukhy"],
    ["Яготин", "Yahotyn"],
    ["Олексій", "Oleksii"],
    ["Юлія Щербак", "Yuliia Shcherbak"],
    ["Ковальчук-Ясенко", "Kovalchuk-Yasenko"],
    ["BEST Київ", "BEST Kyiv"],
    ["BTW 2020", "BTW 2020"],
    ["ЖИТО", "ZHYTO"],
  ])("%s -> %s", (input, expected) => {
    expect(romanize(input)).toBe(expected);
  });
});
