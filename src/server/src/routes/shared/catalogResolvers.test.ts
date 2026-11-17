import { describe, expect, it, vi } from "vitest";
import type { MemberTransaction } from "../member/memberQueries.js";
import { resolveTeam, resolveTeamType } from "./catalogResolvers.js";

const makeTx = (over: Record<string, unknown> = {}) =>
  ({
    teamType: {
      findFirst: vi.fn().mockResolvedValue(null),
      findUnique: vi.fn(),
    },
    team: {
      findFirst: vi.fn().mockResolvedValue(null),
      create: vi.fn(async ({ data }) => ({ id: "t1", ...data })),
    },
    ...over,
  }) as unknown as MemberTransaction;

describe("resolveTeamType", () => {
  it("rejects an unknown name instead of creating it", async () => {
    await expect(
      resolveTeamType(makeTx(), { teamTypeName: "Табір" }),
    ).rejects.toMatchObject({
      status: 400,
      message: "Тип команди «Табір» не знайдено",
    });
  });

  it("returns null without a reference", async () => {
    expect(await resolveTeamType(makeTx(), {})).toBeNull();
  });
});

describe("resolveTeam", () => {
  const event = { id: "e", name: "Табір", isEvent: true };
  const group = { id: "g", name: "Рада", isEvent: false };

  it("creates a new team for an event type", async () => {
    const team = await resolveTeam(makeTx(), event, { startYear: 2024 });
    expect(team).toMatchObject({ name: "Табір 2024", teamTypeId: "e" });
  });

  it("refuses to create a team for a non-event type", async () => {
    await expect(
      resolveTeam(makeTx(), group, { name: "Нова" }),
    ).rejects.toMatchObject({ status: 400 });
  });

  it("refuses to create a team without a type", async () => {
    await expect(
      resolveTeam(makeTx(), null, { name: "Нова" }),
    ).rejects.toMatchObject({ status: 400 });
  });

  it("still finds an existing team of a non-event type", async () => {
    const tx = makeTx({
      team: {
        findFirst: vi
          .fn()
          .mockResolvedValue({ id: "x", name: "Рада", teamTypeId: "g" }),
        create: vi.fn(),
      },
    });
    expect(await resolveTeam(tx, group, {})).toMatchObject({ id: "x" });
  });
});
