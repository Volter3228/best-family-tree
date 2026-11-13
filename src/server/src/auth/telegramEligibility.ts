import { resolveMemberMatch, type EligibilityMember, type MemberMatch } from "./eligibility.js";

export type TelegramIdentity =
  | Extract<MemberMatch, { kind: "member" }>
  | { kind: "refused"; reason: "excluded" | "ambiguous" | "unknown" };

/**
 * Comparison key for a phone number: digits only, normalised to the `380…`
 * form Telegram sends. Handles a national number (`0` plus 9 digits), the
 * same number behind an old trunk prefix (`8` plus that), and the 9-digit
 * number alone, so `+380 50 111 22 33`, `380501112233`, `0501112233`,
 * `8 0501112233` and `50 111 22 33` are all the same number. Empty when
 * there are no digits.
 */
export const phoneKey = (raw: string) => {
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("8")) digits = digits.slice(1);
  if (/^0\d{9}$/.test(digits)) return `38${digits}`;
  if (/^\d{9}$/.test(digits)) return `380${digits}`;
  return digits;
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
