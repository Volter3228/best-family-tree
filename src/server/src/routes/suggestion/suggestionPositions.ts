import { z } from "zod";
import prisma from "../../db/prisma/clientInstance.js";
import type { Session } from "../../auth/types.js";
import {
  positionSchema,
  type PositionInput,
} from "../../utils/catalogValidation.js";
import { ConflictError, ValidationError } from "../../utils/httpErrors.js";
import { sameName } from "../../utils/names.js";
import {
  POSITION_ADD,
  diffPositions,
  isPositionField,
  targetPositionId,
  type PositionValue,
  type SentPosition,
  type StoredPositionWithNames,
} from "../../utils/suggestionPositions.js";
import type { SuggestionRow } from "../../utils/suggestions.js";
import { deriveTeamName, resolveTeamType } from "../shared/catalogResolvers.js";
import { authorWhere } from "./suggestionAuthor.js";

const invalidPositions = () =>
  new ValidationError("Invalid positions", { code: "positions_invalid" });

const parseSent = (raw: string | null) => {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw ?? "[]");
  } catch {
    throw invalidPositions();
  }
  const list = z
    .array(z.record(z.string(), z.unknown()))
    .max(50)
    .safeParse(parsed);
  if (!list.success) throw invalidPositions();
  return list.data.map((item) => {
    const position = positionSchema.safeParse(item);
    if (!position.success) throw invalidPositions();
    const id = item.positionId;
    return {
      positionId: typeof id === "string" && id ? id : undefined,
      input: position.data,
    };
  });
};

/**
 * What a position would resolve to, without creating anything: a role or an
 * event team that does not exist yet is kept by name and created on approval.
 */
const previewPosition = async (
  input: PositionInput,
): Promise<PositionValue> => {
  let roleId: string | undefined;
  let roleName = input.roleName ?? "";
  if (input.roleId) {
    const role = await prisma.role.findUnique({ where: { id: input.roleId } });
    if (!role)
      throw new ValidationError("Unknown role", { code: "role_unknown" });
    roleId = role.id;
    roleName = role.name;
  } else {
    const role = await prisma.role.findFirst({
      where: { name: sameName(roleName) },
    });
    if (role) {
      roleId = role.id;
      roleName = role.name;
    }
  }

  const teamType = await resolveTeamType(prisma, input);
  const name = input.teamName ?? deriveTeamName(teamType, input.teamStartYear);
  if (!name) {
    return {
      roleId,
      roleName,
      organization: input.organization,
      startYear: input.startYear,
      endYear: input.endYear,
    };
  }

  const team = await prisma.team.findFirst({ where: { name: sameName(name) } });
  if (team) {
    if (teamType && team.teamTypeId && team.teamTypeId !== teamType.id) {
      throw new ConflictError(
        `Team "${team.name}" already exists in another team type`,
        undefined,
        { code: "team_in_other_type", params: { name: team.name } },
      );
    }
    return {
      roleId,
      roleName,
      teamId: team.id,
      teamName: team.name,
      teamTypeId: team.teamTypeId ?? teamType?.id,
    };
  }
  if (!teamType?.isEvent) {
    throw new ValidationError(
      "A new team can only be created here as an edition of an event",
      { code: "team_create_event_only" },
    );
  }
  return {
    roleId,
    roleName,
    teamName: name,
    teamTypeId: teamType.id,
    teamStartYear: input.teamStartYear,
    teamEndYear: input.teamEndYear,
  };
};

/** Suggestion rows for a sent "positions" list of the member. */
export const buildPositionRows = async (
  memberId: string,
  raw: string | null,
): Promise<SuggestionRow[]> => {
  const parsed = parseSent(raw);
  const sent: SentPosition[] = [];
  for (const { positionId, input } of parsed) {
    sent.push({ positionId, value: await previewPosition(input) });
  }
  const current: StoredPositionWithNames[] =
    await prisma.memberPosition.findMany({
      where: { memberId },
      include: {
        role: { select: { name: true } },
        team: { select: { name: true, teamTypeId: true } },
      },
    });
  return diffPositions(current, sent);
};

/**
 * One pending suggestion per position: an add the author already sent is
 * dropped, and the author's older edit or removal of the same position goes
 * (its id is returned for deletion).
 */
export const supersedePendingPositions = async (
  session: Session,
  memberId: string,
  rows: SuggestionRow[],
) => {
  if (!rows.some((r) => isPositionField(r.field))) {
    return { rows, replacedIds: [] as string[] };
  }
  const pending = await prisma.editSuggestion.findMany({
    where: {
      status: "PENDING",
      memberId,
      field: { startsWith: "position:" },
      ...authorWhere(session),
    },
  });
  const pendingAdds = new Set(
    pending.filter((p) => p.field === POSITION_ADD).map((p) => p.toValue),
  );
  const touched = new Set(
    rows.map(targetPositionId).filter((id): id is string => !!id),
  );
  return {
    rows: rows.filter(
      (r) => r.field !== POSITION_ADD || !pendingAdds.has(r.toValue),
    ),
    replacedIds: pending
      .filter((p) => {
        const id = targetPositionId(p);
        return !!id && touched.has(id);
      })
      .map((p) => p.id),
  };
};
