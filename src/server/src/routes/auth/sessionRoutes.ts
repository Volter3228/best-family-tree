import { Router } from "express";
import prisma from "../../db/prisma/clientInstance.js";
import { isDemoMode } from "../../auth/config.js";
import {
  clearSessionCookie,
  deleteSession,
  readCookie,
  sessionFromRequest,
  setSessionCookie,
} from "../../auth/sessions.js";
import { SESSION_COOKIE } from "../../auth/config.js";
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

    const member = session.memberId
      ? await prisma.member.findUnique({
          where: { id: session.memberId },
          select: { id: true, name: true, photo: true },
        })
      : null;
    // Editors can not edit other grant holders, so the client hides those
    // controls; Admins edit everyone and need no list.
    const lockedMemberIds =
      session.level === "EDITOR"
        ? (
            await prisma.accessGrant.findMany({ select: { memberId: true } })
          ).map((g) => g.memberId)
        : [];
    res.json({
      demo: false,
      lockedMemberIds,
      method: session.method,
      level: session.level,
      memberId: session.memberId,
      email: session.email,
      member,
    });
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
