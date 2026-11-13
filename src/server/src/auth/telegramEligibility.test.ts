import { describe, expect, it } from "vitest";
import { phoneKey, resolveTelegramIdentity } from "./telegramEligibility.js";

const member = (
  id: string,
  activityState: "ACTIVE" | "INACTIVE" | "EXCLUDED" = "ACTIVE",
  grantLevel: "EDITOR" | "ADMIN" | null = null,
) => ({ id, email: null, activityState, grantLevel });

describe("phoneKey", () => {
  it("makes the three formats equal", () => {
    expect(phoneKey("+380 50 111 22 33")).toBe("380501112233");
    expect(phoneKey("380501112233")).toBe("380501112233");
    expect(phoneKey("0501112233")).toBe("380501112233");
  });
  it("handles the old trunk-prefix form", () => {
    expect(phoneKey("8 050 111 22 33")).toBe("380501112233");
  });
  it("handles the bare 9-digit number", () => {
    expect(phoneKey("50 111 22 33")).toBe("380501112233");
  });
  it("is empty without digits", () => {
    expect(phoneKey("  ")).toBe("");
  });
});

describe("resolveTelegramIdentity", () => {
  const phones = [{ ownerId: "m1", phoneNumber: "+380 50 111 22 33" }];
  const rows = { members: [member("m1"), member("m2")], phones };

  it.each(["+380501112233", "380501112233", "0501112233"])("matches %s", (p) => {
    expect(resolveTelegramIdentity(p, rows)).toEqual({
      kind: "member",
      memberId: "m1",
      level: "VIEWER",
    });
  });

  it("refuses when no phone was shared", () => {
    expect(resolveTelegramIdentity(undefined, rows)).toEqual({ kind: "refused", reason: "unknown" });
  });

  it("refuses an unknown phone", () => {
    expect(resolveTelegramIdentity("+380509999999", rows)).toEqual({
      kind: "refused",
      reason: "unknown",
    });
  });

  it("refuses an excluded member", () => {
    const result = resolveTelegramIdentity("0501112233", {
      members: [member("m1", "EXCLUDED")],
      phones,
    });
    expect(result).toEqual({ kind: "refused", reason: "excluded" });
  });

  it("refuses a number held by two members in different formats", () => {
    const result = resolveTelegramIdentity("380501112233", {
      members: [member("m1"), member("m2")],
      phones: [...phones, { ownerId: "m2", phoneNumber: "0501112233" }],
    });
    expect(result).toEqual({ kind: "refused", reason: "ambiguous" });
  });

  it("keeps the member's grant level", () => {
    const result = resolveTelegramIdentity("0501112233", {
      members: [member("m1", "ACTIVE", "EDITOR")],
      phones,
    });
    expect(result).toEqual({ kind: "member", memberId: "m1", level: "EDITOR" });
  });
});
