import { describe, expect, it } from "vitest";
import { checkAnonymizeAllowed } from "./guard.js";

const demo = "postgresql://u:p@localhost:5432/best_family_tree_demo";

describe("checkAnonymizeAllowed", () => {
  it("allows a demo database with --yes", () => {
    expect(checkAnonymizeAllowed(demo, ["--yes"])).toEqual({
      ok: true,
      database: "best_family_tree_demo",
    });
  });

  it("refuses the real database even with --yes", () => {
    const result = checkAnonymizeAllowed("postgresql://u:p@h/best_family_tree", ["--yes"]);
    expect(result.ok).toBe(false);
  });

  it("refuses without --yes", () => {
    expect(checkAnonymizeAllowed(demo, []).ok).toBe(false);
  });

  it("refuses a missing or broken URL", () => {
    expect(checkAnonymizeAllowed(undefined, ["--yes"]).ok).toBe(false);
    expect(checkAnonymizeAllowed("nonsense", ["--yes"]).ok).toBe(false);
  });
});
