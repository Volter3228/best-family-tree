import { Router, type Request, type Response } from "express";
import { ipKeyGenerator, rateLimit } from "express-rate-limit";
import { loadEmailIdentity } from "../../auth/emailSignIn.js";
import { callbackErrorRedirect, decideGoogleSignIn } from "../../auth/googleSignIn.js";
import { finishLogin, isProviderEnabled, startLogin } from "../../auth/oidc.js";
import { createSession, setSessionCookie } from "../../auth/sessions.js";

const router = Router();

const enabled = (_req: Request, res: Response, next: () => void) => {
  if (isProviderEnabled("google")) return next();
  res.status(404).json({ error: "Not found" });
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  keyGenerator: (req) => ipKeyGenerator(req.ip ?? "unknown"),
  handler: (_req, res) => {
    res.redirect(302, "/login?error=google_failed");
  },
});

router.get("/auth/google/start", enabled, limiter, async (req: Request, res: Response) => {
  try {
    res.redirect(302, (await startLogin(res, "google", { scope: "openid email" })).href);
  } catch (error) {
    console.error("Google sign-in start failed", error);
    res.redirect(302, "/login?error=google_failed");
  }
});

router.get("/auth/google/callback", enabled, async (req: Request, res: Response) => {
  const error = typeof req.query.error === "string" ? req.query.error : undefined;
  const early = callbackErrorRedirect(error);
  if (early) {
    res.clearCookie("bft_oidc", { path: "/" });
    return void res.redirect(302, early);
  }
  try {
    const claims = await finishLogin(req, res, "google");
    const decision = await decideGoogleSignIn(claims, loadEmailIdentity);
    if (!decision.ok) return void res.redirect(302, `/login?error=${decision.code}`);
    const token = await createSession({
      method: "GOOGLE",
      memberId: decision.memberId,
      email: decision.email,
      userAgent: req.headers["user-agent"],
    });
    setSessionCookie(res, token, "GOOGLE");
    res.redirect(302, "/");
  } catch (err) {
    console.error("Google sign-in failed", err);
    res.redirect(302, "/login?error=google_failed");
  }
});

export default router;
