import { randomUUID } from "node:crypto";
import prisma from "../../db/prisma/clientInstance.js";
import { canSuggest } from "../../auth/access.js";
import type { Session } from "../../auth/types.js";
import {
  ConflictError,
  ForbiddenError,
  NotFoundError,
  ValidationError,
} from "../../utils/httpErrors.js";
import { sameName } from "../../utils/names.js";
import {
  PHONE_ADD,
  PHONE_REPLACE,
  diffMemberSuggestion,
  isPositionField,
  diffTeamSuggestion,
  revertedFields,
  type SuggestionChange,
  type SuggestionRow,
} from "../../utils/suggestions.js";
import { CONTACT_FIELDS } from "../../utils/suggestionFields.js";
import {
  assertUnderPendingCap,
  authorWhere,
  targetWhere,
  type SuggestionTarget,
} from "./suggestionAuthor.js";
import {
  assertMentorExists,
  assertNoMentorCycle,
  assertUniqueContacts,
} from "../member/memberService.js";
import {
  buildPositionRows,
  supersedePendingPositions,
} from "./suggestionPositions.js";

export type { SuggestionTarget };

const checkMemberRows = async (memberId: string, rows: SuggestionRow[]) => {
  const mentorId = rows.find((r) => r.field === "mentorId")?.toValue;
  if (mentorId) {
    await assertMentorExists(prisma, mentorId);
    await assertNoMentorCycle(prisma, memberId, mentorId);
  }

  const contacts = Object.fromEntries(
    rows
      .filter((r) => CONTACT_FIELDS.includes(r.field))
      .map((r) => [r.field, r.toValue]),
  );
  await assertUniqueContacts(prisma, contacts, memberId);

  const phones = rows
    .filter((r) => r.field === PHONE_ADD || r.field === PHONE_REPLACE)
    .map((r) => r.toValue!);
  if (phones.length > 0) {
    const taken = await prisma.phoneNumber.findFirst({
      where: { phoneNumber: { in: phones } },
    });
    if (taken) {
      throw new ConflictError(
        "This phone number belongs to another member",
        "phoneNumbers",
        {
          code: "contact_taken",
          params: { platform: "phone" },
        },
      );
    }
  }
};

const checkTeamRows = async (teamId: string, rows: SuggestionRow[]) => {
  const typeId = rows.find((r) => r.field === "teamTypeId")?.toValue;
  if (
    typeId &&
    !(await prisma.teamType.findUnique({ where: { id: typeId } }))
  ) {
    throw new ValidationError("Unknown team type", {
      code: "team_type_unknown",
    });
  }
  const name = rows.find((r) => r.field === "name")?.toValue;
  if (
    name &&
    (await prisma.team.findFirst({
      where: { name: sameName(name), NOT: { id: teamId } },
    }))
  ) {
    throw new ConflictError("A team with this name already exists", "name", {
      code: "team_exists",
    });
  }
};

const buildRows = async (
  target: SuggestionTarget,
  changes: SuggestionChange[],
) => {
  if (target.kind === "member") {
    const member = await prisma.member.findUnique({
      where: { id: target.id },
      include: { phoneNumbers: true },
    });
    if (!member)
      throw new NotFoundError("Member not found", { code: "member_not_found" });
    const positions = changes.findLast((c) => c.field === "positions");
    const rows = diffMemberSuggestion(
      {
        ...member,
        phoneNumbers: member.phoneNumbers.map((p) => p.phoneNumber),
      },
      changes.filter((c) => c.field !== "positions"),
    );
    if (rows.length > 0) await checkMemberRows(target.id, rows);
    if (positions) {
      rows.push(...(await buildPositionRows(target.id, positions.value)));
    }
    return rows;
  }

  const team = await prisma.team.findUnique({ where: { id: target.id } });
  if (!team)
    throw new NotFoundError("Team not found", { code: "team_not_found" });
  const rows = diffTeamSuggestion(team, changes);
  if (rows.length > 0) await checkTeamRows(target.id, rows);
  return rows;
};

export const createSuggestionBatch = async (
  session: Session,
  target: SuggestionTarget,
  changes: SuggestionChange[],
) => {
  if (!canSuggest(session) || (!session.memberId && !session.email)) {
    throw new ForbiddenError();
  }
  const { rows, replacedIds } = await supersedePendingPositions(
    session,
    target.id,
    await buildRows(target, changes),
  );
  const own = {
    status: "PENDING" as const,
    ...authorWhere(session),
    ...targetWhere(target),
  };
  // A field set back to its current value withdraws the author's pending row.
  const reverted = revertedFields(changes, rows);
  if (rows.length === 0) {
    const withdrawn =
      reverted.length > 0
        ? await prisma.editSuggestion.deleteMany({
            where: { ...own, field: { in: reverted } },
          })
        : { count: 0 };
    if (withdrawn.count === 0) {
      throw new ValidationError("Nothing to change", { code: "no_changes" });
    }
    return { batchId: "", count: 0 };
  }

  await assertUnderPendingCap(session, target);

  const batchId = randomUUID();
  // One pending suggestion per field: the new rows replace the author's old
  // ones. Positions are matched per position (see supersedePendingPositions).
  const fields = rows.map((r) => r.field).filter((f) => !isPositionField(f));
  await prisma.$transaction([
    prisma.editSuggestion.deleteMany({
      where: {
        ...own,
        OR: [
          { field: { in: [...new Set(fields)] } },
          { id: { in: replacedIds } },
          ...(reverted.length > 0 ? [{ field: { in: reverted } }] : []),
        ],
      },
    }),
    prisma.editSuggestion.createMany({
      data: rows.map((row) => ({
        ...row,
        batchId,
        ...targetWhere(target),
        authorMemberId: session.memberId,
        authorEmail: session.email,
      })),
    }),
  ]);
  return { batchId, count: rows.length };
};

export const listMySuggestions = async (
  session: Session,
  target: SuggestionTarget,
) => {
  if (!canSuggest(session) || (!session.memberId && !session.email)) return [];
  const rows = await prisma.editSuggestion.findMany({
    where: {
      status: "PENDING",
      ...authorWhere(session),
      ...targetWhere(target),
    },
    orderBy: [{ createdAt: "asc" }, { id: "asc" }],
  });
  return rows.map((r) => ({
    field: r.field,
    toValue: r.toValue,
    fromValue: r.fromValue,
    createdAt: r.createdAt.toISOString(),
  }));
};
