import type { NextFunction, Request, Response } from "express";
import { hasAccess } from "../auth/access.js";
import type { AccessRank } from "../auth/types.js";

export const requireAccess =
  (needed: AccessRank) => (req: Request, res: Response, next: NextFunction) => {
    if (!req.session) {
      res.status(401).json({ error: "Sign in required" });
      return;
    }
    if (!hasAccess(req.session, needed)) {
      res.status(403).json({ error: "Not allowed" });
      return;
    }
    next();
  };

const WRITE_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

/** Every write to the API needs an Editor, whatever the route. */
export const requireEditorForWrites = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!WRITE_METHODS.has(req.method)) {
    next();
    return;
  }
  requireAccess("EDITOR")(req, res, next);
};
