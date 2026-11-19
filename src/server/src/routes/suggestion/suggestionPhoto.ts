import { randomUUID } from "node:crypto";
import prisma from "../../db/prisma/clientInstance.js";
import { canSuggest } from "../../auth/access.js";
import type { Session } from "../../auth/types.js";
import { deleteCloudinaryImage } from "../../libs/cloudinary.js";
import { ForbiddenError, NotFoundError } from "../../utils/httpErrors.js";
import {
  PHOTO_FIELD,
  photoAssetsToDiscard,
} from "../../utils/suggestionPhoto.js";
import {
  assertUnderPendingCap,
  authorWhere,
  targetWhere,
  type SuggestionTarget,
} from "./suggestionAuthor.js";

/** Runs before the upload so refused requests never reach Cloudinary. */
export const assertCanSuggestPhoto = async (
  session: Session,
  target: SuggestionTarget,
) => {
  if (!canSuggest(session) || (!session.memberId && !session.email)) {
    throw new ForbiddenError();
  }
  const found =
    target.kind === "member"
      ? await prisma.member.findUnique({
          where: { id: target.id },
          select: { id: true },
        })
      : await prisma.team.findUnique({
          where: { id: target.id },
          select: { id: true },
        });
  if (!found) {
    throw new NotFoundError(`${target.kind} not found`, {
      code: `${target.kind}_not_found`,
    });
  }
  await assertUnderPendingCap(session, target);
};

const currentPhoto = async (target: SuggestionTarget) =>
  target.kind === "member"
    ? ((
        await prisma.member.findUnique({
          where: { id: target.id },
          select: { photo: true },
        })
      )?.photo ?? null)
    : ((
        await prisma.team.findUnique({
          where: { id: target.id },
          select: { photoUrl: true },
        })
      )?.photoUrl ?? null);

/** The author's earlier pending photo for this target is replaced (and its file deleted). */
export const createPhotoSuggestion = async (
  session: Session,
  target: SuggestionTarget,
  uploadedUrl: string,
) => {
  const fromValue = await currentPhoto(target);
  const own = {
    status: "PENDING" as const,
    field: PHOTO_FIELD,
    ...authorWhere(session),
    ...targetWhere(target),
  };
  const old = await prisma.editSuggestion.findMany({ where: own });
  const batchId = randomUUID();
  await prisma.$transaction([
    prisma.editSuggestion.deleteMany({
      where: { id: { in: old.map((r) => r.id) } },
    }),
    prisma.editSuggestion.create({
      data: {
        batchId,
        field: PHOTO_FIELD,
        fromValue,
        toValue: uploadedUrl,
        ...targetWhere(target),
        authorMemberId: session.memberId,
        authorEmail: session.email,
      },
    }),
  ]);
  for (const url of photoAssetsToDiscard(old)) await deleteCloudinaryImage(url);
  return { batchId, count: 1 };
};

/** Uploaded files of a target's pending photo suggestions, for its deletion. */
export const pendingPhotoUrls = async (target: SuggestionTarget) =>
  photoAssetsToDiscard(
    await prisma.editSuggestion.findMany({
      where: { status: "PENDING", field: PHOTO_FIELD, ...targetWhere(target) },
      select: { field: true, toValue: true },
    }),
  );
