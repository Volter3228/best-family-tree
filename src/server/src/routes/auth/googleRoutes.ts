import { isDemoMode } from "../../auth/config.js";
import { loadEmailIdentity } from "../../auth/emailSignIn.js";
import { decideGoogleSignIn, type GoogleClaims } from "../../auth/googleSignIn.js";
import { createOidcRouter } from "./oidcRouteFactory.js";

// The demo has no real members to check against: any verified Google account signs in as a Viewer.
const identityOf = isDemoMode()
  ? async () => ({ kind: "allowlisted" as const, level: "VIEWER" as const })
  : loadEmailIdentity;

export default createOidcRouter("google", "openid email", "GOOGLE", async (claims) => {
  const decision = await decideGoogleSignIn(claims as GoogleClaims, identityOf);
  return decision.ok
    ? { ok: true, memberId: decision.memberId, email: decision.email }
    : { ok: false, code: decision.code };
});
