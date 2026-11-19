import { describe, expect, it } from "vitest";
import {
  canEditMember,
  canManageGrant,
  canSelfServe,
  canSuggest,
  hasAccess,
  isOwnGrant,
} from "./access.js";
import { toMemberResponse } from "./reducedView.js";
import type { Session } from "./types.js";

const session = (over: Partial<Session>): Session => ({
  id: "s",
  method: "EMAIL",
  memberId: "me",
  email: null,
  level: "VIEWER",
  ...over,
});

describe("access", () => {
  it("ranks levels", () => {
    expect(hasAccess(session({ level: "EDITOR" }), "EDITOR")).toBe(true);
    expect(hasAccess(session({ level: "VIEWER" }), "EDITOR")).toBe(false);
    expect(hasAccess(session({ level: "ADMIN" }), "EDITOR")).toBe(true);
  });

  it("only admins and the holder edit a member with a grant", () => {
    const target = { id: "other", hasGrant: true };
    expect(canEditMember(session({ level: "EDITOR" }), target)).toBe(false);
    expect(canEditMember(session({ level: "ADMIN" }), target)).toBe(true);
    expect(
      canEditMember(session({ level: "EDITOR" }), { id: "me", hasGrant: true }),
    ).toBe(true);
    expect(
      canEditMember(session({ level: "EDITOR" }), { id: "x", hasGrant: false }),
    ).toBe(true);
    expect(
      canEditMember(session({ level: "VIEWER" }), { id: "x", hasGrant: false }),
    ).toBe(false);
  });
});

describe("toMemberResponse", () => {
  const member = {
    name: "A",
    email: "a@b.c",
    birthday: "2000-01-01",
    telegramLink: "t.me/a",
    phoneNumbers: ["+380"],
  };

  it("strips contacts for questions sessions only", () => {
    expect(toMemberResponse(member, { method: "QUESTIONS" })).toEqual({
      name: "A",
      email: null,
      birthday: null,
      telegramLink: null,
      phoneNumbers: [],
    });
    expect(toMemberResponse(member, { method: "EMAIL" })).toBe(member);
  });
});

describe("suggestions and self service", () => {
  it("anonymous questions sessions can not suggest", () => {
    expect(canSuggest(session({ method: "QUESTIONS", memberId: null }))).toBe(
      false,
    );
    expect(canSuggest(session({ method: "GOOGLE" }))).toBe(true);
  });

  it("self service needs a personal session with a member", () => {
    expect(canSelfServe(session({ method: "QUESTIONS" }))).toBe(false);
    expect(canSelfServe(session({ method: "EMAIL", memberId: null }))).toBe(
      false,
    );
    expect(canSelfServe(session({ method: "TELEGRAM" }))).toBe(true);
  });

  it("recognises an admin's own grant", () => {
    expect(isOwnGrant(session({ memberId: "me" }), "me")).toBe(true);
    expect(isOwnGrant(session({ memberId: "me" }), "other")).toBe(false);
    expect(isOwnGrant(session({ memberId: null }), "other")).toBe(false);
  });
});

describe("canManageGrant", () => {
  it("lets admins manage editors and new grants but not other admins", () => {
    const admin = session({ level: "ADMIN" });
    expect(canManageGrant(admin, "EDITOR")).toBe(true);
    expect(canManageGrant(admin, null)).toBe(true);
    expect(canManageGrant(admin, "ADMIN")).toBe(false);
    expect(canManageGrant(session({ level: "EDITOR" }), "EDITOR")).toBe(false);
  });
});
