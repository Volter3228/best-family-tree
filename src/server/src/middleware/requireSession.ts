import type { NextFunction, Request, Response } from "express";
import { sessionFromRequest } from "../auth/sessions.js";

/** Every /api route except /api/auth/* needs a live session. */
export const requireSession = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
