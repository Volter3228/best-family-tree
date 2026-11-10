import { contactKey } from "../utils/contactKeys.js";
import type { AccessRank } from "./types.js";

export type EligibilityMember = {
  id: string;
  email: string | null;
  activityState: "ACTIVE" | "INACTIVE" | "EXCLUDED";
  /** Grant level if the member holds one. */
  grantLevel?: "EDITOR" | "ADMIN" | null;
};

export type EmailIdentity =
  | { kind: "member"; memberId: string; level: AccessRank }
  | { kind: "allowlisted"; level: "VIEWER" }
  | { kind: "refused"; reason: "excluded" | "ambiguous" | "unknown" };

/** Canonical form used to store and compare emails. */
export const normalizeEmail = (raw: string) =>
  contactKey("email", raw)?.slice("email:".length) ?? "";

/**
 * Decides who an email address belongs to. Pure: callers load the rows.
 * A member's own email beats the allowlist, an excluded member is refused even
 * if their address is also allowlisted, and an address shared by two members
 * is refused because it can not be tied to one person.
 */
export const resolveEmailIdentity = (
  email: string,
  rows: { members: EligibilityMember[]; allowedEmails: { email: string }[] },
): EmailIdentity => {
  const wanted = normalizeEmail(email);
  if (!wanted) return { kind: "refused", reason: "unknown" };

  const matches = rows.members.filter(
    (m) => m.email !== null && normalizeEmail(m.email) === wanted,
  );

  if (matches.some((m) => m.activityState === "EXCLUDED")) {
    return { kind: "refused", reason: "excluded" };
  }
  if (matches.length > 1) return { kind: "refused", reason: "ambiguous" };
  if (matches.length === 1) {
    const [member] = matches;
    return {
      kind: "member",
      memberId: member.id,
      level: member.grantLevel ?? "VIEWER",
    };
  }

  const allowed = rows.allowedEmails.some(
    (a) => normalizeEmail(a.email) === wanted,
  );
  return allowed
    ? { kind: "allowlisted", level: "VIEWER" }
    : { kind: "refused", reason: "unknown" };
};
