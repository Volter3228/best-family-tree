import type { NextFunction, Request, Response } from "express";

const WRITE_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

/** Refuses writes whose Origin is present and not the client origin. */
export const checkOrigin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const allowed = process.env.CLIENT_ORIGIN;
  const origin = req.headers.origin;
  if (!allowed || !origin || !WRITE_METHODS.has(req.method) || origin === allowed) {
    next();
    return;
  }
  res.status(403).json({ error: "Bad origin" });
};
