import { describe, expect, it } from "vitest";
import { findLeaks, lowerSet, normalizeSocial, type DemoValues, type RealValues } from "./piiCheck.js";

const real: RealValues = {
  names: lowerSet(["Анна Морозова"]),
  emails: lowerSet(["a@real.com"]),
  phones: new Set(["+380501112233"]),
  socials: new Set([normalizeSocial("instagram", "https://instagram.com/RealUser/")!]),
  urls: new Set(["https://res.cloudinary.com/x/real.jpg"]),
};

const clean: DemoValues = {
  names: ["Діана Іванишина"],
  emails: ["diana.ivanyshyna@example.com"],
  phones: ["+380671234567"],
  socials: [{ platform: "instagram", value: "diana_ivanyshyna" }],
  urls: ["https://res.cloudinary.com/x/demo.jpg"],
};

describe("findLeaks", () => {
  it("reports nothing for clean data", () => {
    expect(findLeaks(real, clean)).toEqual({});
  });

  it("finds each kind of leak, ignoring case and link form", () => {
    const leaky: DemoValues = {
      names: ["анна морозова"],
      emails: ["A@REAL.com"],
      phones: ["+380501112233"],
      socials: [{ platform: "instagram", value: "@realuser" }],
      urls: ["https://res.cloudinary.com/x/real.jpg"],
    };
    expect(findLeaks(real, leaky)).toEqual({
      names: 1,
      emails: 1,
      phones: 1,
      socials: 1,
      "photo urls": 1,
    });
  });
});
