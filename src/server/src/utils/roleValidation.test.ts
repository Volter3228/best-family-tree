import { describe, expect, it } from "vitest";
import { parseWith, roleUpdateSchema } from "./catalogValidation.js";

describe("roleUpdateSchema", () => {
  it("accepts a partial body", () => {
    const r = parseWith(roleUpdateSchema, { isLeaderPosition: true });
    expect(r.success).toBe(true);
  });

  it("rejects an empty name", () => {
    expect(parseWith(roleUpdateSchema, { name: "  " }).success).toBe(false);
  });
});
