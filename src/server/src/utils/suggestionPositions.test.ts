import { describe, expect, it } from "vitest";
import {
  POSITION_ADD,
  POSITION_REMOVE,
  POSITION_REPLACE,
  decodePosition,
  diffPositions,
  isPositionStale,
  type StoredPositionWithNames,
} from "./suggestionPositions.js";

const lead: StoredPositionWithNames = {
  id: "p1",
  roleId: "r-lead",
  teamId: "t-hr",
  organization: null,
  startYear: null,
  endYear: null,
  role: { name: "Leader" },
  team: { name: "HR", teamTypeId: "tt-wg" },
};

const external: StoredPositionWithNames = {
  id: "p2",
  roleId: "r-member",
  teamId: null,
  organization: "Acme",
  startYear: 2020,
  endYear: 2021,
  role: { name: "Member" },
  team: null,
};

const same = (p: StoredPositionWithNames) => ({
  positionId: p.id,
  value: {
    roleId: p.roleId,
    roleName: p.role.name,
    teamId: p.teamId ?? undefined,
    teamName: p.team?.name,
    organization: p.organization ?? undefined,
    startYear: p.startYear ?? undefined,
    endYear: p.endYear ?? undefined,
  },
});

describe("diffPositions", () => {
  it("returns nothing for an unchanged list", () => {
    expect(
      diffPositions([lead, external], [same(lead), same(external)]),
    ).toEqual([]);
  });

  it("adds a new position with a role that does not exist yet", () => {
    const rows = diffPositions(
      [lead],
      [same(lead), { value: { roleName: "Mascot", teamName: "BTW 2026" } }],
    );
    expect(rows).toHaveLength(1);
    expect(rows[0].field).toBe(POSITION_ADD);
    expect(decodePosition(rows[0].toValue)).toEqual({
      roleName: "Mascot",
      teamName: "BTW 2026",
    });
  });

  it("does not add a copy of an existing position or a repeated row", () => {
    const copy = { value: { ...same(lead).value } };
    expect(diffPositions([lead], [same(lead), copy, copy])).toEqual([]);
  });

  it("edits a position that keeps its id", () => {
    const edited = same(external);
    edited.value = { ...edited.value, endYear: 2023 };
    const rows = diffPositions([external], [edited]);
    expect(rows).toHaveLength(1);
    expect(rows[0].field).toBe(POSITION_REPLACE);
    expect(decodePosition(rows[0].fromValue)?.id).toBe("p2");
    expect(decodePosition(rows[0].toValue)?.endYear).toBe(2023);
  });

  it("removes a position left out of the list", () => {
    const rows = diffPositions([lead, external], [same(lead)]);
    expect(rows.map((r) => r.field)).toEqual([POSITION_REMOVE]);
    expect(decodePosition(rows[0].fromValue)?.id).toBe("p2");
    expect(rows[0].toValue).toBeNull();
  });

  it("keeps a position sent again without its id", () => {
    expect(diffPositions([lead], [{ value: same(lead).value }])).toEqual([]);
  });

  it("matches a new role by name ignoring case", () => {
    const rows = diffPositions(
      [],
      [
        { value: { roleName: "Mascot", teamName: "BTW 2026" } },
        { value: { roleName: "mascot", teamName: "btw 2026" } },
      ],
    );
    expect(rows).toHaveLength(1);
  });
});

describe("isPositionStale", () => {
  const [removeRow] = diffPositions([lead, external], [same(lead)]);

  it("is fresh while the position is unchanged", () => {
    expect(isPositionStale(removeRow, [lead, external])).toBe(false);
  });

  it("is stale when the position is gone or changed", () => {
    expect(isPositionStale(removeRow, [lead])).toBe(true);
    expect(isPositionStale(removeRow, [{ ...external, endYear: 2022 }])).toBe(
      true,
    );
  });

  it("is stale when an added position already exists", () => {
    const [add] = diffPositions([], [{ value: same(lead).value }]);
    expect(isPositionStale(add, [])).toBe(false);
    expect(isPositionStale(add, [lead])).toBe(true);
  });
});
