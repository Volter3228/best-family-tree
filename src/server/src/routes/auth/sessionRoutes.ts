import { Router } from "express";
import { isDemoMode } from "../../auth/config.js";
import {
  clearSessionCookie,
  deleteSession,
  readCookie,
  sessionFromRequest,
  setSessionCookie,
} from "../../auth/sessions.js";
import { SESSION_COOKIE } from "../../auth/config.js";
import { buildSessionInfo } from "../../auth/sessionInfo.js";
import { sendRouteError } from "../../utils/httpErrors.js";

const router = Router();

router.get("/auth/me", async (req, res) => {
  try {
    if (isDemoMode()) {
      res.json({ demo: true, method: "EMAIL", level: "EDITOR", member: null });
      return;
    }
    const session = await sessionFromRequest(req);
    if (!session) {
      res.status(401).json({ error: "Sign in required" });
      return;
    }
    // Refresh the cookie Max-Age; the DB expiry slid inside findSession.
    const token = readCookie(req.headers.cookie, SESSION_COOKIE);
    if (token) setSessionCookie(res, token, session.method);

    res.json(await buildSessionInfo(session));
  } catch (error) {
    sendRouteError(res, error, "Failed to load session");
  }
});

router.post("/auth/logout", async (req, res) => {
  try {
    const session = await sessionFromRequest(req);
    if (session) await deleteSession(session.id);
    clearSessionCookie(res);
    res.status(204).end();
  } catch (error) {
    sendRouteError(res, error, "Failed to log out");
  }
});

export default router;
