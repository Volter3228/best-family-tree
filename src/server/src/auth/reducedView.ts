import type { Session } from "./types.js";

const CONTACT_FIELDS = [
  "email",
  "birthday",
  "telegramLink",
  "instagramLink",
  "facebookLink",
  "linkedinLink",
] as const;

/** Questions sessions see the structure only: no contacts of any kind. */
export const toMemberResponse = <
  T extends { phoneNumbers: string[] } & Record<string, unknown>,
>(
  member: T,
  session: Pick<Session, "method">,
): T => {
  if (session.method !== "QUESTIONS") return member;
  const stripped: Record<string, unknown> = { ...member, phoneNumbers: [] };
  for (const field of CONTACT_FIELDS) {
    if (field in stripped) stripped[field] = null;
  }
  return stripped as T;
};
