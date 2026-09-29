import type { MemberBody } from "../../utils/validation.js";
import prisma from "../../db/prisma/clientInstance.js";
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
