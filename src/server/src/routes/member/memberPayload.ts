import { z } from "zod";
import { normalizeSocialLinks } from "../../utils/index.js";
import {
  formatZodErrors,
  positionSchema,
  type PositionInput,
} from "../../utils/catalogValidation.js";
import { ValidationError } from "../../utils/httpErrors.js";
import type { MemberBody } from "../../utils/validation.js";
import type { MemberUpdateBody } from "../../utils/memberUpdateValidation.js";

export type { PositionInput };

// null means "positions were not sent" (leave the member's positions alone).
export const parsePositionsPayload = (raw: unknown): PositionInput[] | null => {
  if (raw === undefined) return null;

  let parsed: unknown;
  try {
    parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
  } catch {
    throw new ValidationError("Positions must be valid JSON");
  }

  const result = z.array(positionSchema).safeParse(parsed);
  if (!result.success) {
    throw new ValidationError(
      "Invalid positions: " + formatZodErrors(result.error),
    );
  }
  return result.data;
};

export const parsePhoneNumbers = (raw: string): string[] => {
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed) || !parsed.every((p) => typeof p === "string")) {
    throw new Error("Invalid phoneNumbers payload");
  }
  return parsed;
};

export const buildMemberFields = (
  body: MemberBody,
  photoUrl: string | null,
) => {
  const { firstName, lastName, birthday, joinedAt, mentorId } = body;

  return {
    ...buildSharedFields(body, photoUrl),
    name: `${firstName} ${lastName}`,
    birthday: new Date(birthday),
    joinedAt: new Date(joinedAt),
    mentorId,
  };
};

// Updates may leave birthday / mentor empty (records that never had them);
// an empty join date means "keep the stored one".
export const buildMemberUpdateFields = (
  body: MemberUpdateBody,
  photoUrl: string | null,
) => {
  const { firstName, lastName, birthday, joinedAt, mentorId } = body;

  return {
    ...buildSharedFields(body, photoUrl),
    name: `${firstName} ${lastName}`.trim(),
    birthday: birthday ? new Date(birthday) : null,
    joinedAt: joinedAt ? new Date(joinedAt) : undefined,
    mentorId: mentorId || null,
  };
};

const buildSharedFields = (
  body: MemberBody | MemberUpdateBody,
  photoUrl: string | null,
) => {
  const {
    status,
    email,
    telegramLink,
    instagramLink,
    facebookLink,
    linkedinLink,
  } = body;

  return {
    email: email || null,
    status,
    photo: photoUrl,
    ...normalizeSocialLinks({
      telegramLink,
      instagramLink,
      facebookLink,
      linkedinLink,
    }),
  };
};
