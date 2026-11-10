import { describe, expect, it } from "vitest";
import { normalizeEmail, resolveEmailIdentity } from "./eligibility.js";

const member = (
  id: string,
  email: string | null,
  activityState: "ACTIVE" | "INACTIVE" | "EXCLUDED" = "ACTIVE",
  grantLevel: "EDITOR" | "ADMIN" | null = null,
) => ({ id, email, activityState, grantLevel });

describe("normalizeEmail", () => {
  it("trims and lowercases", () => {
    expect(normalizeEmail("  Ann@Example.COM ")).toBe("ann@example.com");
  });
  it("returns an empty string for blank input", () => {
    expect(normalizeEmail("   ")).toBe("");
  });
});

describe("resolveEmailIdentity", () => {
  const none = { members: [], allowedEmails: [] };

  it("finds a member by email, ignoring case and spaces", () => {
    const result = resolveEmailIdentity("ANN@example.com", {
      members: [member("m1", " ann@Example.com")],
      allowedEmails: [],
    });
    expect(result).toEqual({ kind: "member", memberId: "m1", level: "VIEWER" });
  });

  it("carries the member's grant level", () => {
    const result = resolveEmailIdentity("a@x.com", {
      members: [member("m1", "a@x.com", "ACTIVE", "ADMIN")],
      allowedEmails: [],
    });
    expect(result).toEqual({ kind: "member", memberId: "m1", level: "ADMIN" });
  });

  it("treats an inactive member like any member", () => {
    const result = resolveEmailIdentity("a@x.com", {
      members: [member("m1", "a@x.com", "INACTIVE")],
      allowedEmails: [],
    });
    expect(result.kind).toBe("member");
  });

  it("lets an allowlisted address in as Viewer", () => {
    const result = resolveEmailIdentity("g@x.com", {
      members: [],
      allowedEmails: [{ email: "G@x.com" }],
    });
    expect(result).toEqual({ kind: "allowlisted", level: "VIEWER" });
  });

  it("prefers the member over the allowlist", () => {
    const result = resolveEmailIdentity("a@x.com", {
      members: [member("m1", "a@x.com", "ACTIVE", "EDITOR")],
      allowedEmails: [{ email: "a@x.com" }],
    });
    expect(result).toEqual({ kind: "member", memberId: "m1", level: "EDITOR" });
  });

  it("refuses an excluded member even if allowlisted", () => {
    const result = resolveEmailIdentity("a@x.com", {
      members: [member("m1", "a@x.com", "EXCLUDED")],
      allowedEmails: [{ email: "a@x.com" }],
    });
    expect(result).toEqual({ kind: "refused", reason: "excluded" });
  });

  it("refuses an address shared by two members", () => {
    const result = resolveEmailIdentity("a@x.com", {
      members: [member("m1", "a@x.com"), member("m2", "A@x.com")],
      allowedEmails: [],
    });
    expect(result).toEqual({ kind: "refused", reason: "ambiguous" });
  });

  it("refuses an excluded member sharing an address with an active one", () => {
    const result = resolveEmailIdentity("a@x.com", {
      members: [member("m1", "a@x.com"), member("m2", "a@x.com", "EXCLUDED")],
      allowedEmails: [],
    });
    expect(result).toEqual({ kind: "refused", reason: "excluded" });
  });

  it("refuses unknown addresses and blank input", () => {
    expect(resolveEmailIdentity("who@x.com", none)).toEqual({
      kind: "refused",
      reason: "unknown",
    });
    expect(resolveEmailIdentity("  ", none).kind).toBe("refused");
  });

  it("ignores members without an email", () => {
    const result = resolveEmailIdentity("a@x.com", {
      members: [member("m1", null)],
      allowedEmails: [],
    });
    expect(result.kind).toBe("refused");
  });
});
