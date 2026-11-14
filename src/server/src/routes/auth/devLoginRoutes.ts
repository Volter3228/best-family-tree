import { Router } from "express";
import { isDevLoginEnabled } from "../../auth/devLogin.js";
import { createSession, setSessionCookie } from "../../auth/sessions.js";
import prisma from "../../db/prisma/clientInstance.js";
import { sendRouteError } from "../../utils/httpErrors.js";

const router = Router();

/**
 * Local testing only (DEV_LOGIN=true): GET /api/auth/dev-login?level=ADMIN|EDITOR|VIEWER
 * signs the browser in as a member holding that grant and redirects to `next` (default "/").
 * VIEWER signs in like the questions flow: no member, read-only.
 */
router.get("/auth/dev-login", async (req, res) => {
  if (!isDevLoginEnabled()) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  try {
    const level = String(req.query.level ?? "ADMIN").toUpperCase();
    if (level !== "ADMIN" && level !== "EDITOR" && level !== "VIEWER") {
      res.status(400).json({ error: "level must be ADMIN, EDITOR or VIEWER" });
      return;
    }
    let memberId: string | null = null;
    if (level !== "VIEWER") {
      const grants = await prisma.accessGrant.findMany({ where: { level } });
      const active = await prisma.member.findFirst({
        where: {
          id: { in: grants.map((grant) => grant.memberId) },
          activityState: { not: "EXCLUDED" },
        },
        select: { id: true },
      });
      if (!active) {
        res.status(404).json({ error: `No member with a ${level} grant; run npm run auth:seed-grants` });
        return;
      }
      memberId = active.id;
    }
    const method = memberId ? "EMAIL" : "QUESTIONS";
    const token = await createSession({
      method,
      memberId,
      email: null,
      userAgent: req.headers["user-agent"],
    });
    setSessionCookie(res, token, method);
    const next = String(req.query.next ?? "/");
    res.redirect(next.startsWith("/") && !next.startsWith("//") ? next : "/");
  } catch (error) {
    sendRouteError(res, error, "Dev login failed");
  }
});

export default router;
