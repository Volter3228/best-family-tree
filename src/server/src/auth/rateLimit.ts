import type { Request, Response } from "express";
import {
  ipKeyGenerator,
  rateLimit,
  type Options,
} from "express-rate-limit";

export const ipKey = (req: Request) => ipKeyGenerator(req.ip ?? "unknown");

/** Limiter with the project's header style; `extra` overrides the JSON 429 default. */
export const limiter = (
  limit: number,
  windowMs: number,
  keyGenerator: (req: Request) => string = ipKey,
  extra: Partial<Options> = {},
) =>
  rateLimit({
    windowMs,
    limit,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    keyGenerator,
    handler: (_req: Request, res: Response) => {
      res
        .status(429)
        .json({ error: "Too many requests", code: "too_many_requests" });
    },
    ...extra,
  });
