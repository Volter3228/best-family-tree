import prisma from "../../db/prisma/clientInstance.js";
import { canEditMember } from "../../auth/access.js";
import type { Session } from "../../auth/types.js";
import {
  ConflictError,
  ForbiddenError,
  NotFoundError,
  ValidationError,
} from "../../utils/httpErrors.js";
import { teamBodySchema, parseWith } from "../../utils/catalogValidation.js";
import { CONTACT_FIELDS } from "../../utils/suggestionFields.js";
import {
  isPhoneField,
  isStale,
  memberCurrentValues,
  teamCurrentValues,
} from "../../utils/suggestions.js";
import {
  assertMentorExists,
  assertNoMentorCycle,
  assertUniqueContacts,
} from "../member/memberService.js";
import type { MemberTransaction } from "../member/memberQueries.js";
import {
  deleteCloudinaryImage,
  deleteReplacedImage,
} from "../../libs/cloudinary.js";
import {
  PHOTO_FIELD,
  photoAssetsToDiscard,
} from "../../utils/suggestionPhoto.js";
import { applyPhone } from "./suggestionApplyPhone.js";
import { updateTeamIn } from "../team/teamService.js";

const alreadyReviewed = () =>
  new ConflictError("This suggestion was already reviewed", undefined, {
    code: "already_reviewed",
  });

type Suggestion = NonNullable<
  Awaited<ReturnType<typeof prisma.editSuggestion.findUnique>>
>;

const DATE_FIELDS = ["birthday", "joinedAt"];

const applyMemberField = async (
  tx: MemberTransaction,
  memberId: string,
  row: Suggestion,
) => {
  if (isPhoneField(row.field)) {
    return applyPhone(tx, memberId, row);
  }
  const value = row.toValue;
  if (row.field === "mentorId") {
    await assertMentorExists(tx, value!);
    await assertNoMentorCycle(tx, memberId, value!);
  }
  if (CONTACT_FIELDS.includes(row.field)) {
    await assertUniqueContacts(tx, { [row.field]: value }, memberId);
  }
  await tx.member.update({
    where: { id: memberId },
    data: {
      [row.field]: DATE_FIELDS.includes(row.field) ? new Date(value!) : value,
    },
  });
};

const applyTeamField = async (
  tx: MemberTransaction,
  teamId: string,
  row: Suggestion,
) => {
  if (row.field === PHOTO_FIELD) {
    await tx.team.update({
      where: { id: teamId },
      data: { photoUrl: row.toValue },
    });
    return;
  }
  const body = parseWith(teamBodySchema, { [row.field]: row.toValue });
  if (!body.success) throw new ValidationError(body.errors);
  await updateTeamIn(tx, teamId, body.data, undefined);
};

export const approveSuggestion = async (
  session: Session,
  id: string,
  force: boolean,
) => {
  const replaced = await applyApproval(session, id, force);
  if (replaced) await deleteReplacedImage(replaced.old, replaced.next);
};

const applyApproval = (session: Session, id: string, force: boolean) =>
  prisma.$transaction(async (tx) => {
    let replaced: { old: string | null; next: string | null } | null = null;
    const row = await tx.editSuggestion.findUnique({ where: { id } });
    if (!row)
      throw new NotFoundError("Suggestion not found", {
        code: "suggestion_not_found",
      });
    if (row.status !== "PENDING") throw alreadyReviewed();

    if (row.memberId) {
      const member = await tx.member.findUnique({
        where: { id: row.memberId },
        include: { phoneNumbers: true },
      });
      if (!member)
        throw new NotFoundError("Member not found", {
          code: "member_not_found",
        });
      const hasGrant = !!(await tx.accessGrant.findUnique({
        where: { memberId: member.id },
      }));
      if (!canEditMember(session, { id: member.id, hasGrant })) {
        throw new ForbiddenError();
      }
      const phones = member.phoneNumbers.map((p) => p.phoneNumber);
      const phoneRow = isPhoneField(row.field);
      const current = phoneRow
        ? phones
        : (memberCurrentValues({ ...member, phoneNumbers: phones })[
            row.field
          ] ?? null);
      if (!force && isStale(row, current)) {
        throw new ConflictError(
          "The value changed since this was suggested",
          undefined,
          {
            code: "suggestion_stale",
          },
        );
      }
      if (row.field === PHOTO_FIELD)
        replaced = { old: member.photo, next: row.toValue };
      await applyMemberField(tx, member.id, row);
    } else {
      const team = await tx.team.findUnique({ where: { id: row.teamId! } });
      if (!team)
        throw new NotFoundError("Team not found", { code: "team_not_found" });
      const current = teamCurrentValues(team)[row.field] ?? null;
      if (!force && isStale(row, current)) {
        throw new ConflictError(
          "The value changed since this was suggested",
          undefined,
          {
            code: "suggestion_stale",
          },
        );
      }
      if (row.field === PHOTO_FIELD)
        replaced = { old: team.photoUrl, next: row.toValue };
      await applyTeamField(tx, team.id, row);
    }

    const marked = await tx.editSuggestion.updateMany({
      where: { id, status: "PENDING" },
      data: {
        status: "APPROVED",
        reviewerId: session.memberId,
        reviewedAt: new Date(),
      },
    });
    if (marked.count === 0) throw alreadyReviewed();
    return replaced;
  });

export const rejectSuggestion = async (session: Session, id: string) => {
  const exists = await prisma.editSuggestion.findUnique({
    where: { id },
    select: { id: true, memberId: true, field: true, toValue: true },
  });
  if (!exists)
    throw new NotFoundError("Suggestion not found", {
      code: "suggestion_not_found",
    });
  if (exists.memberId) {
    const hasGrant = !!(await prisma.accessGrant.findUnique({
      where: { memberId: exists.memberId },
    }));
    if (!canEditMember(session, { id: exists.memberId, hasGrant })) {
      throw new ForbiddenError();
    }
  }
  const marked = await prisma.editSuggestion.updateMany({
    where: { id, status: "PENDING" },
    data: {
      status: "REJECTED",
      reviewerId: session.memberId,
      reviewedAt: new Date(),
    },
  });
  if (marked.count === 0) throw alreadyReviewed();
  for (const url of photoAssetsToDiscard([exists])) {
    await deleteCloudinaryImage(url);
  }
};
