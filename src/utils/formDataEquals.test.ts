import { describe, expect, it } from "vitest";
import { isSameFormData } from "./formDataEquals";

const build = (entries: [string, string | Blob][]) => {
  const formData = new FormData();
  entries.forEach(([key, value]) => formData.append(key, value));
  return formData;
};

describe("isSameFormData", () => {
  it("treats identical fields in the same order as the same", () => {
    expect(
      isSameFormData(
        build([
          ["name", "Anna"],
          ["isEvent", "true"],
        ]),
        build([
          ["name", "Anna"],
          ["isEvent", "true"],
        ]),
      ),
    ).toBe(true);
  });

  it("ignores field order", () => {
    expect(
      isSameFormData(
        build([
          ["name", "Anna"],
          ["color", "red"],
        ]),
        build([
          ["color", "red"],
          ["name", "Anna"],
        ]),
      ),
    ).toBe(true);
  });

  it("detects a changed value", () => {
    expect(
      isSameFormData(build([["name", "Anna"]]), build([["name", "Olga"]])),
    ).toBe(false);
  });

  it("detects an added or removed field", () => {
    expect(
      isSameFormData(
        build([["name", "Anna"]]),
        build([
          ["name", "Anna"],
          ["color", ""],
        ]),
      ),
    ).toBe(false);
  });

  it("treats a newly picked file as a change, even with the same bytes", () => {
    const original = new File(["x"], "photo.png", { type: "image/png" });
    const picked = new File(["x"], "photo.png", { type: "image/png" });
    expect(
      isSameFormData(build([["icon", original]]), build([["icon", original]])),
    ).toBe(true);
    expect(
      isSameFormData(build([["icon", original]]), build([["icon", picked]])),
    ).toBe(false);
  });
});
