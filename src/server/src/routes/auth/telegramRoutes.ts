import { Router, type Request, type Response } from "express";
import { ipKeyGenerator, rateLimit } from "express-rate-limit";
import { callbackErrorRedirect } from "../../auth/googleSignIn.js";
import { loadTelegramIdentity } from "../../auth/telegramSignIn.js";
import { finishLogin, isProviderEnabled, startLogin } from "../../auth/oidc.js";
import { createSession, setSessionCookie } from "../../auth/sessions.js";

const router = Router();

const enabled = (_req: Request, res: Response, next: () => void) => {
  if (isProviderEnabled("telegram")) return next();
  res.status(404).json({ error: "Not found" });
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  keyGenerator: (req) => ipKeyGenerator(req.ip ?? "unknown"),
  handler: (_req, res) => {
    res.redirect(302, "/login?error=telegram_failed");
  },
});

router.get("/auth/telegram/start", enabled, limiter, async (req: Request, res: Response) => {
  try {
    res.redirect(302, (await startLogin(res, "telegram", { scope: "openid phone" })).href);
  } catch (error) {
    console.error("Telegram sign-in start failed", error);
    res.redirect(302, "/login?error=telegram_failed");
  }
});

router.get("/auth/telegram/callback", enabled, async (req: Request, res: Response) => {
  const error = typeof req.query.error === "string" ? req.query.error : undefined;
  const early = callbackErrorRedirect(error, "telegram");
  if (early) {
    res.clearCookie("bft_oidc", { path: "/" });
    return void res.redirect(302, early);
  }
  try {
    const claims = await finishLogin(req, res, "telegram");
    const identity = await loadTelegramIdentity(claims);
    if (identity.kind !== "member") {
      const code = identity.reason === "ambiguous" ? "telegram_ambiguous" : "telegram_not_member";
      return void res.redirect(302, `/login?error=${code}`);
    }
    const token = await createSession({
      method: "TELEGRAM",
      memberId: identity.memberId,
      email: null,
      userAgent: req.headers["user-agent"],
    });
    setSessionCookie(res, token, "TELEGRAM");
    res.redirect(302, "/");
  } catch (err) {
    console.error("Telegram sign-in failed", err);
    res.redirect(302, "/login?error=telegram_failed");
  }
});

export default router;
