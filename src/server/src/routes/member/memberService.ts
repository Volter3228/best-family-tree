import type { MemberBody } from "../../utils/validation.js";
import prisma from "../../db/prisma/clientInstance.js";
import { NotFoundError, ValidationError } from "../../utils/httpErrors.js";
import { buildMemberFields } from "./memberPayload.js";
import type { PositionInput } from "./memberPayload.js";
import { MEMBER_INCLUDE, type MemberTransaction } from "./memberQueries.js";
import { syncPositions } from "./memberPositions.js";

const savePhoneNumbers = async (
  tx: MemberTransaction,
  memberId: string,
  phoneNumbers: string[],
) => {
  if (phoneNumbers.length === 0) return;

  await tx.phoneNumber.createMany({
    data: phoneNumbers.map((phoneNumber) => ({ phoneNumber, ownerId: memberId })),
  });
};

// A member can not be their own mentor or the mentor of one of their mentors:
// the family tree (and every walker over it) assumes there are no cycles.
const assertNoMentorCycle = async (
  tx: MemberTransaction,
  memberId: string,
  mentorId: string,
) => {
  const visited = new Set<string>();
  let currentId: string | null = mentorId;

  while (currentId && !visited.has(currentId)) {
    if (currentId === memberId) {
      throw new ValidationError("A member can not be mentored by themself or by one of their mentees");
    }
    visited.add(currentId);
    const current: { mentorId: string | null } | null =
      await tx.member.findUnique({
        where: { id: currentId },
        select: { mentorId: true },
      });
    currentId = current?.mentorId ?? null;
  }
};

export const createMember = async (
  body: MemberBody,
  phoneNumbers: string[],
  positions: PositionInput[],
  photoUrl: string | null,
) =>
  prisma.$transaction(async (tx) => {
    const member = await tx.member.create({
      data: buildMemberFields(body, photoUrl),
    });

    await savePhoneNumbers(tx, member.id, phoneNumbers);
    if (positions.length > 0) await syncPositions(tx, member.id, positions);

    return tx.member.findUniqueOrThrow({
      where: { id: member.id },
      include: MEMBER_INCLUDE,
    });
  });

export const updateMember = async (
  memberId: string,
  body: MemberBody,
  phoneNumbers: string[],
  positions: PositionInput[] | null,
  photoUrl: string | null,
) =>
  prisma.$transaction(async (tx) => {
    await assertNoMentorCycle(tx, memberId, body.mentorId);
    await tx.member.update({
      where: { id: memberId },
      data: buildMemberFields(body, photoUrl),
    });

    await tx.phoneNumber.deleteMany({ where: { ownerId: memberId } });
    await savePhoneNumbers(tx, memberId, phoneNumbers);

    if (positions !== null) await syncPositions(tx, memberId, positions);

    return tx.member.findUniqueOrThrow({
      where: { id: memberId },
      include: MEMBER_INCLUDE,
    });
  });

/**
 * Removes a member together with their positions and phone numbers. Their
 * mentees move up to the removed member's mentor (or become roots), so the
 * family tree stays connected. Returns the photo URL to delete from storage.
 */
export const deleteMember = (memberId: string) =>
  prisma.$transaction(async (tx) => {
    const member = await tx.member.findUnique({ where: { id: memberId } });
    if (!member) throw new NotFoundError("Member not found");

    await tx.member.updateMany({
      where: { mentorId: memberId },
      data: { mentorId: member.mentorId },
    });
    await tx.familyGroup.updateMany({
      where: { founderId: memberId },
      data: { founderId: null },
    });
    await tx.memberPosition.deleteMany({ where: { memberId } });
    await tx.phoneNumber.deleteMany({ where: { ownerId: memberId } });
    await tx.member.delete({ where: { id: memberId } });

    return member.photo;
  });
