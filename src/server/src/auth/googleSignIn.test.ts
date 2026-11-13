import { describe, expect, it } from "vitest";
import type { EmailIdentity } from "./eligibility.js";
import { callbackErrorRedirect, decideGoogleSignIn } from "./googleSignIn.js";

const decide = (claims: Parameters<typeof decideGoogleSignIn>[0], identity: EmailIdentity) =>
  decideGoogleSignIn(claims, async () => identity);
const verified = { email: " John@Gmail.com ", email_verified: true };

describe("decideGoogleSignIn", () => {
  it("refuses an unverified address without looking it up", async () => {
    let looked = false;
    const result = await decideGoogleSignIn(
      { email: "a@b.c", email_verified: false },
      async () => ((looked = true), { kind: "allowlisted", level: "VIEWER" }),
    );
    expect(result).toEqual({ ok: false, code: "not_verified" });
    expect(looked).toBe(false);
  });

  it("refuses claims without an email", async () => {
    expect(await decide({ email_verified: true }, { kind: "allowlisted", level: "VIEWER" })).toEqual({
      ok: false,
      code: "not_verified",
    });
  });

  it("signs in a member, with a normalised email", async () => {
    expect(await decide(verified, { kind: "member", memberId: "m1", level: "EDITOR" })).toEqual({
      ok: true,
      memberId: "m1",
      email: "john@gmail.com",
    });
  });

  it("signs in an allowlist-only address as a Viewer without a member", async () => {
    expect(await decide(verified, { kind: "allowlisted", level: "VIEWER" })).toEqual({
      ok: true,
      memberId: null,
      email: "john@gmail.com",
    });
  });

  it("shares one code for excluded and unknown addresses", async () => {
    const refused = (reason: "excluded" | "unknown") =>
      decide(verified, { kind: "refused", reason });
    expect(await refused("excluded")).toEqual({ ok: false, code: "not_member" });
    expect(await refused("unknown")).toEqual({ ok: false, code: "not_member" });
  });

  it("reports an ambiguous address", async () => {
    expect(await decide(verified, { kind: "refused", reason: "ambiguous" })).toEqual({
      ok: false,
      code: "ambiguous",
    });
  });
});

describe("callbackErrorRedirect", () => {
  it("lets a normal callback through", () => {
    expect(callbackErrorRedirect(undefined)).toBeNull();
  });
  it("treats cancelling as no error", () => {
    expect(callbackErrorRedirect("access_denied")).toBe("/login");
  });
  it("maps any other error to google_failed", () => {
    expect(callbackErrorRedirect("server_error")).toBe("/login?error=google_failed");
  });
});
