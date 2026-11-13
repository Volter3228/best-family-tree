import { normalizeEmail, type EmailIdentity } from "./eligibility.js";

export type GoogleClaims = { email?: unknown; email_verified?: unknown; [claim: string]: unknown };

export type GoogleDecision =
  | { ok: true; memberId: string | null; email: string }
  | { ok: false; code: "not_verified" | "not_member" | "ambiguous" };

/** Maps the provider's `error` query value to the page to land on. */
export const callbackErrorRedirect = (
  error: string | undefined,
  provider: "google" | "telegram" = "google",
) => {
  if (error === undefined) return null;
  return error === "access_denied" ? "/login" : `/login?error=${provider}_failed`;
};

/**
 * Decides a Google callback from the verified claims and who the address belongs to.
 * `identityOf` runs only for a verified address.
 */
export const decideGoogleSignIn = async (
  claims: GoogleClaims,
  identityOf: (email: string) => Promise<EmailIdentity>,
): Promise<GoogleDecision> => {
  if (typeof claims.email !== "string" || claims.email_verified !== true) {
    return { ok: false, code: "not_verified" };
  }
  const email = normalizeEmail(claims.email);
  const identity = await identityOf(email);
  if (identity.kind === "member") return { ok: true, memberId: identity.memberId, email };
  if (identity.kind === "allowlisted") return { ok: true, memberId: null, email };
  return { ok: false, code: identity.reason === "ambiguous" ? "ambiguous" : "not_member" };
};
