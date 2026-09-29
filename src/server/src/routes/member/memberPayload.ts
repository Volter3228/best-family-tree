import { normalizeSocialLinks } from "../../utils/index.js";
import type { MemberBody } from "../../utils/validation.js";

export interface PositionInput {
  roleId?: string;
  roleName?: string;
  eventTypeId?: string;
  eventTypeName?: string;
  teamName?: string;
  year?: number;
  startDate?: string;
  endDate?: string;
  isLeaderPosition?: boolean;
}

const isPositionInput = (value: unknown): value is PositionInput =>
  typeof value === "object" &&
  value !== null &&
  (typeof (value as PositionInput).roleId === "string" ||
    typeof (value as PositionInput).roleName === "string");

export const parsePositionsPayload = (raw: unknown): PositionInput[] | null => {
  if (raw === undefined) return null;
  const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
  if (!Array.isArray(parsed) || !parsed.every(isPositionInput)) {
    throw new Error("Invalid positions payload");
  }
  return parsed;
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
