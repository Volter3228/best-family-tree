import type { NextFunction, Request, Response } from "express";
import { isDemoMode } from "../auth/config.js";
import { sessionFromRequest } from "../auth/sessions.js";

const DEMO_SESSION = {
  id: "demo",
  method: "EMAIL" as const,
  memberId: null,
  email: null,
  level: "EDITOR" as const,
};

/** Every /api route except /api/auth/* needs a live session. */
export const requireSession = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (isDemoMode()) {
    req.session = DEMO_SESSION;
    next();
    return;
  }
  try {
    const session = await sessionFromRequest(req);
    if (!session) {
      res.status(401).json({ error: "Sign in required" });
      return;
    }
    req.session = session;
    next();
  } catch (error) {
    next(error);
  }
};
