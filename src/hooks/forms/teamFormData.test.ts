import { describe, expect, it } from "vitest";
import { EMPTY_TEAM_FORM, isSameTeamForm } from "./teamFormData";

const base = {
  ...EMPTY_TEAM_FORM,
  name: "Команда",
  description: "Опис",
  members: [
    {
      id: "row-1",
      memberId: "m-1",
      memberName: "Анна",
      roleName: "Лідер",
      roleId: "r-1",
    },
  ],
};

describe("isSameTeamForm", () => {
  it("is true for an untouched copy", () => {
    expect(isSameTeamForm({ ...base, members: [...base.members] }, base)).toBe(
      true,
    );
  });

  it("ignores surrounding whitespace in the name, as the server would", () => {
    expect(isSameTeamForm({ ...base, name: "  Команда " }, base)).toBe(true);
  });

  it("detects a changed name", () => {
    expect(isSameTeamForm({ ...base, name: "Інша" }, base)).toBe(false);
  });

  it("detects a changed role on a roster row", () => {
    const members = [{ ...base.members[0], roleId: "r-2" }];
    expect(isSameTeamForm({ ...base, members }, base)).toBe(false);
  });

  it("detects a removed roster row", () => {
    expect(isSameTeamForm({ ...base, members: [] }, base)).toBe(false);
  });
});
