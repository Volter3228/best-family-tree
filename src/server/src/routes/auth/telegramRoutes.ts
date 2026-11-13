import { isDemoMode } from "../../auth/config.js";
import { phoneKey } from "../../auth/telegramEligibility.js";
import { loadTelegramIdentity, type TelegramClaims } from "../../auth/telegramSignIn.js";
import { createOidcRouter } from "./oidcRouteFactory.js";

export default createOidcRouter("telegram", "openid phone", "TELEGRAM", async (claims) => {
  const telegramClaims = claims as TelegramClaims;
  // The demo has no real members to check against: any confirmed phone signs in as a Viewer.
  if (isDemoMode()) {
    const confirmed =
      typeof telegramClaims.phone_number === "string" && phoneKey(telegramClaims.phone_number) !== "";
    return confirmed ? { ok: true, memberId: null, email: null } : { ok: false, code: "telegram_not_member" };
  }
  const identity = await loadTelegramIdentity(telegramClaims);
  if (identity.kind !== "member") {
    return { ok: false, code: identity.reason === "ambiguous" ? "telegram_ambiguous" : "telegram_not_member" };
  }
  return { ok: true, memberId: identity.memberId, email: null };
});
