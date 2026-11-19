import { errorBody } from "../utils/httpErrors.js";
import type { NextFunction, Request, Response } from "express";
import { hasAccess } from "../auth/access.js";
import type { AccessRank } from "../auth/types.js";
import { WRITE_METHODS } from "./writeMethods.js";

export const requireAccess =
  (needed: AccessRank) => (req: Request, res: Response, next: NextFunction) => {
    if (!req.session) {
      res.status(401).json(errorBody("Sign in required", "sign_in_required"));
      return;
    }
    if (!hasAccess(req.session, needed)) {
      res.status(403).json(errorBody("Not allowed", "not_allowed"));
      return;
    }
    next();
  };

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
