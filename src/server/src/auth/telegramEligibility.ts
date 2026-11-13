import { resolveMemberMatch, type EligibilityMember, type MemberMatch } from "./eligibility.js";

export type TelegramIdentity =
  | Extract<MemberMatch, { kind: "member" }>
  | { kind: "refused"; reason: "excluded" | "ambiguous" | "unknown" };

/**
 * Comparison key for a phone number: digits only, and a national number
 * (`0` plus 9 digits) becomes `380…`, so `+380 50 111 22 33`, `380501112233`
 * and `0501112233` are the same number. Empty when there are no digits.
 */
export const phoneKey = (raw: string) => {
  const digits = raw.replace(/\D/g, "");
  return /^0\d{9}$/.test(digits) ? `38${digits}` : digits;
};

/**
 * Decides who a Telegram-confirmed phone belongs to. Pure: callers load the rows.
 * Phones only; usernames are never matched.
 */
export const resolveTelegramIdentity = (
  phone: string | null | undefined,
  rows: {
    members: EligibilityMember[];
    phones: { ownerId: string; phoneNumber: string }[];
  },
): TelegramIdentity => {
  const wanted = phoneKey(phone ?? "");
  if (!wanted) return { kind: "refused", reason: "unknown" };
  const owners = new Set(
    rows.phones.filter((p) => phoneKey(p.phoneNumber) === wanted).map((p) => p.ownerId),
  );
  const found = resolveMemberMatch(rows.members.filter((m) => owners.has(m.id)));
  return found.kind === "unknown" ? { kind: "refused", reason: "unknown" } : found;
};
