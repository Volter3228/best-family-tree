import { describe, expect, it } from "vitest";
import {
  diffMemberSuggestion,
  diffTeamSuggestion,
  exceedsPendingCap,
  isStale,
  revertedFields,
  type MemberSnapshot,
  type TeamSnapshot,
} from "./suggestions.js";
import { photoAssetsToDiscard } from "./suggestionPhoto.js";

const member: MemberSnapshot = {
  name: "Ann Lee",
  birthday: new Date("2000-05-01"),
  joinedAt: new Date("2020-09-01"),
  status: "FULL",
  mentorId: "m1",
  email: "ann@example.com",
  telegramLink: null,
  instagramLink: null,
  facebookLink: null,
  linkedinLink: null,
  phoneNumbers: ["+380111", "+380222"],
};

const team: TeamSnapshot = {
  name: "Hack 2024",
  description: null,
  startYear: 2024,
  endYear: null,
  isOngoing: true,
  teamTypeId: "t1",
};

const code = (fn: () => unknown) => {
  try {
    fn();
  } catch (e) {
    return (e as { code: string }).code;
  }
  return null;
};

describe("diffMemberSuggestion", () => {
  it("drops unchanged values and keeps real changes", () => {
    expect(
      diffMemberSuggestion(member, [
        { field: "birthday", value: "2000-05-01" },
        { field: "status", value: "ALUMNI" },
        { field: "telegramLink", value: "@ann" },
      ]),
    ).toEqual([
      { field: "status", fromValue: "FULL", toValue: "ALUMNI" },
      { field: "telegramLink", fromValue: null, toValue: "https://t.me/ann" },
    ]);
  });

  it("refuses fields outside the list", () => {
    expect(
      code(() =>
        diffMemberSuggestion(member, [{ field: "gender", value: "MALE" }]),
      ),
    ).toBe("field_not_suggestable");
  });

  it("refuses emptying a stored value but ignores empty over empty", () => {
    expect(
      code(() => diffMemberSuggestion(member, [{ field: "email", value: "" }])),
    ).toBe("cannot_empty");
    expect(
      diffMemberSuggestion(member, [{ field: "telegramLink", value: null }]),
    ).toEqual([]);
  });

  it("validates formats", () => {
    expect(
      code(() =>
        diffMemberSuggestion(member, [
          { field: "birthday", value: "2000-13-40" },
        ]),
      ),
    ).toBe("invalid_value");
    expect(
      code(() =>
        diffMemberSuggestion(member, [{ field: "email", value: "nope" }]),
      ),
    ).toBe("invalid_value");
    expect(
      code(() =>
        diffMemberSuggestion(member, [{ field: "status", value: "BOSS" }]),
      ),
    ).toBe("invalid_value");
  });

  it("expands phone lists into add and remove rows", () => {
    expect(
      diffMemberSuggestion(member, [
        {
          field: "phoneNumbers",
          value: JSON.stringify(["+380222", "+380333"]),
        },
      ]),
    ).toEqual([
      { field: "phone:replace", fromValue: "+380111", toValue: "+380333" },
    ]);
    expect(
      diffMemberSuggestion(member, [
        {
          field: "phoneNumbers",
          value: JSON.stringify(["+380111", "+380222", "+380333"]),
        },
      ]),
    ).toEqual([{ field: "phone:add", fromValue: null, toValue: "+380333" }]);
    expect(
      diffMemberSuggestion(member, [
        { field: "phoneNumbers", value: JSON.stringify(["+380222"]) },
      ]),
    ).toEqual([{ field: "phone:remove", fromValue: "+380111", toValue: null }]);
  });

  it("refuses removing every phone number", () => {
    expect(
      code(() =>
        diffMemberSuggestion(member, [{ field: "phoneNumbers", value: "[]" }]),
      ),
    ).toBe("cannot_empty");
  });
});

describe("diffTeamSuggestion", () => {
  it("normalizes and diffs team fields", () => {
    expect(
      diffTeamSuggestion(team, [
        { field: "name", value: "  Hack   2025 " },
        { field: "isOngoing", value: "true" },
      ]),
    ).toEqual([
      { field: "name", fromValue: "Hack 2024", toValue: "Hack 2025" },
    ]);
  });

  it("checks the period", () => {
    expect(
      code(() =>
        diffTeamSuggestion(team, [
          { field: "isOngoing", value: "false" },
          { field: "endYear", value: "2020" },
        ]),
      ),
    ).toBe("team_end_before_start");
    expect(
      code(() => diffTeamSuggestion(team, [{ field: "photoUrl", value: "x" }])),
    ).toBe("field_not_suggestable");
  });
});

describe("isStale", () => {
  it("compares plain fields to the current value", () => {
    const row = { field: "status", fromValue: "FULL", toValue: "ALUMNI" };
    expect(isStale(row, "FULL")).toBe(false);
    expect(isStale(row, "BABY")).toBe(true);
  });

  it("checks phone rows against the number list", () => {
    const add = { field: "phone:add", fromValue: null, toValue: "+1" };
    const remove = { field: "phone:remove", fromValue: "+1", toValue: null };
    expect(isStale(add, ["+1"])).toBe(true);
    expect(isStale(add, [])).toBe(false);
    expect(isStale(remove, [])).toBe(true);
    expect(isStale(remove, ["+1"])).toBe(false);
  });
});

describe("phone replace and supersede", () => {
  it("checks replace rows for staleness", () => {
    const row = { field: "phone:replace", fromValue: "+1", toValue: "+2" };
    expect(isStale(row, ["+1"])).toBe(false);
    expect(isStale(row, [])).toBe(true);
    expect(isStale(row, ["+1", "+2"])).toBe(true);
  });

  it("finds fields set back to their current value", () => {
    expect(
      revertedFields(
        [{ field: "email" }, { field: "status" }],
        [{ field: "status", fromValue: "A", toValue: "B" }],
      ),
    ).toEqual(["email"]);
  });

  it("clears all pending phone rows whenever phoneNumbers is sent", () => {
    const phones = ["phone:add", "phone:remove", "phone:replace"];
    expect(revertedFields([{ field: "phoneNumbers" }], [])).toEqual(phones);
    const rows = diffMemberSuggestion(member, [
      { field: "phoneNumbers", value: JSON.stringify(member.phoneNumbers) },
    ]);
    expect(rows).toEqual([]);
    expect(
      revertedFields([{ field: "phoneNumbers" }, { field: "email" }], rows),
    ).toEqual(["email", ...phones]);
  });
});

describe("photo suggestions", () => {
  it("refuses photo through the JSON endpoint", () => {
    expect(
      code(() =>
        diffMemberSuggestion(member, [{ field: "photo", value: "x" }]),
      ),
    ).toBe("field_not_suggestable");
  });

  it("lists only photo uploads to discard", () => {
    expect(
      photoAssetsToDiscard([
        { field: "photo", toValue: "u1" },
        { field: "photo", toValue: "u1" },
        { field: "photo", toValue: null },
        { field: "email", toValue: "a@b.c" },
      ]),
    ).toEqual(["u1"]);
  });

  it("compares the current photo for staleness", () => {
    const row = { field: "photo", fromValue: "old", toValue: "new" };
    expect(isStale(row, "old")).toBe(false);
    expect(isStale(row, "other")).toBe(true);
  });
});

describe("exceedsPendingCap", () => {
  it("blocks only new targets beyond the cap", () => {
    const keys = new Set(Array.from({ length: 10 }, (_, i) => `member:${i}`));
    expect(exceedsPendingCap(keys, "member:99")).toBe(true);
    expect(exceedsPendingCap(keys, "member:3")).toBe(false);
    expect(exceedsPendingCap(new Set(["a"]), "b")).toBe(false);
  });
});
