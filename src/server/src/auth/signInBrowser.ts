import { randomBytes } from "node:crypto";
import type { Request, Response } from "express";
import { SIGN_IN_COOKIE, useSecureCookie } from "./config.js";
import { hashToken, readCookie } from "./sessions.js";

// Long enough to ask again for a code later the same day.
const SIGN_IN_COOKIE_TTL_MS = 24 * 60 * 60 * 1000;

const cookieOptions = () => ({
  httpOnly: true,
  sameSite: "lax" as const,
  secure: useSecureCookie(),
  path: "/",
});

/** Hash of this browser's sign-in cookie, or null when it has none. */
export const browserHashOf = (req: Request) => {
  const token = readCookie(req.headers.cookie, SIGN_IN_COOKIE);
  return token ? hashToken(token) : null;
};

/** The browser's hash, giving it a sign-in cookie first if it has none. */
export const ensureBrowserHash = (req: Request, res: Response) => {
  const existing = browserHashOf(req);
  if (existing) return existing;
  const token = randomBytes(32).toString("base64url");
  res.cookie(SIGN_IN_COOKIE, token, { ...cookieOptions(), maxAge: SIGN_IN_COOKIE_TTL_MS });
  return hashToken(token);
};

export const clearSignInCookie = (res: Response) => {
  res.clearCookie(SIGN_IN_COOKIE, cookieOptions());
};
