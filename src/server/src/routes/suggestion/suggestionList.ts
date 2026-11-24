import prisma from "../../db/prisma/clientInstance.js";
import { canEditMember } from "../../auth/access.js";
import type { Session } from "../../auth/types.js";
import {
  PHONE_REPLACE,
  isPhoneField,
  isStale,
  memberCurrentValues,
  teamCurrentValues,
  type FieldValues,
} from "../../utils/suggestions.js";
import {
  isPositionField,
  isPositionStale,
} from "../../utils/suggestionPositions.js";

export const countPending = () =>
  prisma.editSuggestion.count({ where: { status: "PENDING" } });

export const listPending = async (session: Session) => {
  const rows = await prisma.editSuggestion.findMany({
    where: { status: "PENDING" },
    orderBy: [{ createdAt: "asc" }, { batchId: "asc" }, { id: "asc" }],
    include: {
      member: { include: { phoneNumbers: true, positions: true } },
      team: true,
    },
  });

  const memberIds = rows.flatMap((r) => (r.memberId ? [r.memberId] : []));
  const authorIds = rows.flatMap((r) =>
    r.authorMemberId ? [r.authorMemberId] : [],
  );
  const grants = await prisma.accessGrant.findMany({
    where: { memberId: { in: memberIds } },
    select: { memberId: true },
  });
  const granted = new Set(grants.map((g) => g.memberId));

  const currentOf = (row: (typeof rows)[number]): FieldValues =>
    row.member
      ? memberCurrentValues({
          ...row.member,
          phoneNumbers: row.member.phoneNumbers.map((p) => p.phoneNumber),
        })
      : teamCurrentValues(row.team!);

  const mentorIds = new Set<string>();
  const typeIds = new Set<string>();
  for (const row of rows) {
    const current = currentOf(row);
    const bucket =
      row.field === "mentorId"
        ? mentorIds
        : row.field === "teamTypeId"
          ? typeIds
          : null;
    if (!bucket) continue;
    for (const v of [row.fromValue, row.toValue, current[row.field]]) {
      if (v) bucket.add(v);
    }
  }
  const [mentors, types] = await Promise.all([
    prisma.member.findMany({
      where: { id: { in: [...mentorIds, ...authorIds] } },
      select: { id: true, name: true },
    }),
    prisma.teamType.findMany({
      where: { id: { in: [...typeIds] } },
      select: { id: true, name: true },
    }),
  ]);
  const memberNames = new Map(mentors.map((m) => [m.id, m.name]));
  const typeNames = new Map(types.map((t) => [t.id, t.name]));

  return rows.map((row) => {
    const phone = isPhoneField(row.field);
    const position = isPositionField(row.field);
    const current = currentOf(row);
    const phones = row.member?.phoneNumbers.map((p) => p.phoneNumber) ?? [];
    const currentValue = position
      ? row.fromValue
      : phone
        ? row.field === PHONE_REPLACE && phones.includes(row.fromValue!)
          ? row.fromValue
          : null
        : (current[row.field] ?? null);
    const labels =
      row.field === "mentorId"
        ? memberNames
        : row.field === "teamTypeId"
          ? typeNames
          : null;
    const label = (v: string | null) =>
      labels && v ? (labels.get(v) ?? null) : null;

    return {
      id: row.id,
      batchId: row.batchId,
      target: row.member
        ? {
            kind: "member" as const,
            id: row.member.id,
            name: row.member.name,
            photo: row.member.photo,
          }
        : {
            kind: "team" as const,
            id: row.team!.id,
            name: row.team!.name,
            photo: row.team!.photoUrl,
          },
      field: row.field,
      fromValue: row.fromValue,
      toValue: row.toValue,
      currentValue,
      ...(labels && {
        fromLabel: label(row.fromValue),
        toLabel: label(row.toValue),
        currentLabel: label(currentValue),
      }),
      stale: position
        ? isPositionStale(row, row.member?.positions ?? [])
        : isStale(
            row,
            phone
              ? (row.member?.phoneNumbers.map((p) => p.phoneNumber) ?? [])
              : currentValue,
          ),
      locked:
        !!row.member &&
        !canEditMember(session, {
          id: row.member.id,
          hasGrant: granted.has(row.member.id),
        }),
      author: {
        memberId: row.authorMemberId,
        name: row.authorMemberId
          ? (memberNames.get(row.authorMemberId) ?? null)
          : null,
        email: row.authorEmail,
      },
      createdAt: row.createdAt.toISOString(),
    };
  });
};
