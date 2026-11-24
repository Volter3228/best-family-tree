import { describe, expect, it } from "vitest";
import type { Team, TeamType } from "@/types";
import {
  parsePositionValue,
  summarizePosition,
  toBadgePosition,
} from "./positionSuggestion";

const event: TeamType = { id: "tt-btw", name: "BTW", isEvent: true };
const hr: Team = {
  id: "t-hr",
  name: "HR",
  startYear: 2019,
  endYear: 2022,
  teamType: { id: "tt-wg", name: "WG", isEvent: false },
};
const catalog = {
  teams: [hr],
  teamTypes: [event],
  roles: [{ id: "r-lead", name: "Leader", isLeaderPosition: true }],
};

describe("parsePositionValue", () => {
  it("reads a stored value and rejects junk", () => {
    expect(parsePositionValue('{"roleName":"Leader"}')).toEqual({
      roleName: "Leader",
    });
    expect(parsePositionValue("nope")).toBeNull();
    expect(parsePositionValue(null)).toBeNull();
  });
});

describe("toBadgePosition", () => {
  it("uses the existing role and team with the team's period", () => {
    const badge = toBadgePosition(
      { roleId: "r-lead", roleName: "Leader", teamId: "t-hr", teamName: "HR" },
      catalog,
    );
    expect(badge.roleIsNew).toBe(false);
    expect(badge.teamIsNew).toBe(false);
    expect(badge.position.team?.teamType?.id).toBe("tt-wg");
    expect(badge.years).toBe("2019 – 2022");
  });

  it("marks a role and an event team that do not exist yet", () => {
    const badge = toBadgePosition(
      {
        roleName: "Mascot",
        teamName: "BTW 2026",
        teamTypeId: "tt-btw",
        teamStartYear: 2026,
      },
      catalog,
    );
    expect(badge.roleIsNew).toBe(true);
    expect(badge.teamIsNew).toBe(true);
    expect(badge.position.team?.teamType?.name).toBe("BTW");
    expect(badge.years).toBe("2026");
  });

  it("keeps a standalone position's organisation and years", () => {
    const badge = toBadgePosition(
      {
        roleName: "leader",
        organization: "Acme",
        startYear: 2020,
        endYear: 2021,
      },
      catalog,
    );
    expect(badge.roleIsNew).toBe(false);
    expect(badge.position.organization).toBe("Acme");
    expect(badge.years).toBe("2020 – 2021");
  });
});

describe("summarizePosition", () => {
  it("joins team, role and years", () => {
    expect(
      summarizePosition({
        roleName: "Member",
        organization: "Acme",
        startYear: 2020,
      }),
    ).toBe("Acme · Member · 2020");
  });
});
