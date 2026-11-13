import { Router, type Request, type Response } from "express";
import { ipKeyGenerator, rateLimit } from "express-rate-limit";
import type { AuthMethod } from "../../db/prisma/generated/client.js";
import { callbackErrorRedirect } from "../../auth/googleSignIn.js";
import { finishLogin, isProviderEnabled, startLogin, type OidcProvider } from "../../auth/oidc.js";
import { createSession, setSessionCookie } from "../../auth/sessions.js";

export type OidcDecision =
  | { ok: true; memberId: string | null; email: string | null }
  | { ok: false; code: string };

/** Builds the `/auth/<provider>/start` and `/callback` routes, identical past the claims decision. */
export const createOidcRouter = (
  provider: OidcProvider,
  scope: string,
  method: AuthMethod,
  decide: (claims: unknown) => Promise<OidcDecision>,
) => {
  const router = Router();

  const enabled = (_req: Request, res: Response, next: () => void) => {
    if (isProviderEnabled(provider)) return next();
    res.status(404).json({ error: "Not found" });
  };

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    keyGenerator: (req) => ipKeyGenerator(req.ip ?? "unknown"),
    handler: (_req, res) => {
      res.redirect(302, `/login?error=${provider}_failed`);
    },
  });

  router.get(`/auth/${provider}/start`, enabled, limiter, async (_req: Request, res: Response) => {
    try {
      res.redirect(302, (await startLogin(res, provider, { scope })).href);
    } catch (error) {
      console.error(`${provider} sign-in start failed`, error);
      res.redirect(302, `/login?error=${provider}_failed`);
    }
  });

  router.get(`/auth/${provider}/callback`, enabled, async (req: Request, res: Response) => {
    const error = typeof req.query.error === "string" ? req.query.error : undefined;
    const early = callbackErrorRedirect(error, provider);
    if (early) {
      res.clearCookie("bft_oidc", { path: "/" });
      return void res.redirect(302, early);
    }
    try {
      const claims = await finishLogin(req, res, provider);
      const decision = await decide(claims);
      if (!decision.ok) return void res.redirect(302, `/login?error=${decision.code}`);
      const token = await createSession({
        method,
        memberId: decision.memberId,
        email: decision.email,
        userAgent: req.headers["user-agent"],
      });
      setSessionCookie(res, token, method);
      res.redirect(302, "/");
    } catch (err) {
      console.error(`${provider} sign-in failed`, err);
      res.redirect(302, `/login?error=${provider}_failed`);
    }
  });

  return router;
};
