import { z } from "zod";
import { normalizeSocialLinks } from "../../utils/index.js";
import {
  formatZodErrors,
  positionSchema,
  type PositionInput,
} from "../../utils/catalogValidation.js";
import { ValidationError } from "../../utils/httpErrors.js";
import type { MemberBody } from "../../utils/validation.js";

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
  const {
    firstName,
    lastName,
    birthday,
    joinedAt,
    mentorId,
    status,
    email,
    telegramLink,
    instagramLink,
    facebookLink,
    linkedinLink,
  } = body;

  return {
    name: `${firstName} ${lastName}`,
    birthday: new Date(birthday),
    email: email || null,
    status,
    joinedAt: new Date(joinedAt),
    photo: photoUrl,
    mentorId,
    ...normalizeSocialLinks({
      telegramLink,
      instagramLink,
      facebookLink,
      linkedinLink,
    }),
  };
};
