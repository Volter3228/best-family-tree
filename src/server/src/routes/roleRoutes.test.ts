import { describe, expect, it } from "vitest";
import { countMembersByRole } from "./roleRoutes.js";

describe("countMembersByRole", () => {
  it("counts each member once per role", () => {
    const counts = countMembersByRole([
      { roleId: "r1", memberId: "m1" },
      { roleId: "r1", memberId: "m1" },
      { roleId: "r1", memberId: "m2" },
      { roleId: "r2", memberId: "m1" },
    ]);
    expect(counts.get("r1")).toBe(2);
    expect(counts.get("r2")).toBe(1);
  });

  it("returns no entry for a role nobody holds", () => {
    expect(countMembersByRole([]).get("r1")).toBeUndefined();
  });
});
