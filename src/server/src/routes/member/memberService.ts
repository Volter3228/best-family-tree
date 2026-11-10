import type { MemberBody } from "../../utils/validation.js";
import prisma from "../../db/prisma/clientInstance.js";
import {
  ConflictError,
  ForbiddenError,
  NotFoundError,
  ValidationError,
} from "../../utils/httpErrors.js";
import { canEditMember } from "../../auth/access.js";
import type { Session } from "../../auth/types.js";
import {
  contactField,
  contactLabel,
  findContactCollision,
} from "../../utils/contactKeys.js";
import {
  buildMemberFields,
  buildMemberUpdateFields,
  buildSparseMemberFields,
} from "./memberPayload.js";
import type { MemberUpdateBody } from "../../utils/memberUpdateValidation.js";
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

const assertMentorExists = async (tx: MemberTransaction, mentorId: string) => {
  const mentor = await tx.member.findUnique({
    where: { id: mentorId },
    select: { id: true },
  });
  if (!mentor) throw new ValidationError("Mentor not found");
};

/** Email and social links must belong to at most one member. */
const assertUniqueContacts = async (
  tx: MemberTransaction,
  data: Parameters<typeof findContactCollision>[0],
  excludeId?: string,
) => {
  const others = await tx.member.findMany({
    where: excludeId ? { id: { not: excludeId } } : {},
    select: {
      email: true,
      telegramLink: true,
      instagramLink: true,
      facebookLink: true,
      linkedinLink: true,
    },
  });
  const platform = findContactCollision(data, others);
  if (platform) {
    throw new ConflictError(
      `${contactLabel(platform)} належить іншому учаснику`,
      contactField(platform),
    );
  }
};

/** Members with an access grant are editable only by Admins and themselves. */
export const assertCanEditMembers = async (
  session: Session,
  memberIds: string[],
) => {
  if (memberIds.length === 0) return;
  const grants = await prisma.accessGrant.findMany({
    where: { memberId: { in: memberIds } },
    select: { memberId: true },
  });
  const granted = new Set(grants.map((g) => g.memberId));
  for (const id of memberIds) {
    if (!canEditMember(session, { id, hasGrant: granted.has(id) })) {
      throw new ForbiddenError("Only an admin can edit this member");
    }
  }
};

export const assertCanEditMember = (session: Session, memberId: string) =>
  assertCanEditMembers(session, [memberId]);

export const createMember = async (
  body: MemberBody | MemberUpdateBody,
  phoneNumbers: string[],
  positions: PositionInput[],
  photoUrl: string | null,
  sparse = false,
) =>
  prisma.$transaction(async (tx) => {
    const data = sparse
      ? buildSparseMemberFields(body as MemberUpdateBody, photoUrl)
      : buildMemberFields(body as MemberBody, photoUrl);
    if (data.mentorId) await assertMentorExists(tx, data.mentorId);
    await assertUniqueContacts(tx, data);
    const member = await tx.member.create({ data });

    await savePhoneNumbers(tx, member.id, phoneNumbers);
    if (positions.length > 0) await syncPositions(tx, member.id, positions);

    return tx.member.findUniqueOrThrow({
      where: { id: member.id },
      include: MEMBER_INCLUDE,
    });
  });

export const updateMember = async (
  memberId: string,
  body: MemberUpdateBody,
  phoneNumbers: string[],
  positions: PositionInput[] | null,
  photoUrl: string | null,
) =>
  prisma.$transaction(async (tx) => {
    if (body.mentorId) await assertNoMentorCycle(tx, memberId, body.mentorId);
    const data = buildMemberUpdateFields(body, photoUrl);
    await assertUniqueContacts(tx, data, memberId);
    await tx.member.update({ where: { id: memberId }, data });

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
    await tx.authSession.deleteMany({ where: { memberId } });
    await tx.accessGrant.deleteMany({ where: { memberId } });
    await tx.member.delete({ where: { id: memberId } });

    return member.photo;
  });
