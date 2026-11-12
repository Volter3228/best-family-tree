import { createHash, randomBytes } from "node:crypto";
import type { Request, Response } from "express";
import type { AuthMethod } from "../db/prisma/generated/client.js";
import prisma from "../db/prisma/clientInstance.js";
import {
  SESSION_COOKIE,
  SESSION_TTL_MS,
  isDemoMode,
  useSecureCookie,
} from "./config.js";
import type { AccessRank, Session } from "./types.js";

export const hashToken = (token: string) =>
  createHash("sha256").update(token).digest("hex");

export const ttlFor = (method: AuthMethod) =>
  method === "QUESTIONS" ? SESSION_TTL_MS.QUESTIONS : SESSION_TTL_MS.PERSONAL;

export const readCookie = (header: string | undefined, name: string) => {
  if (!header) return null;
  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return decodeURIComponent(rest.join("="));
  }
  return null;
};

export const setSessionCookie = (
  res: Response,
  token: string,
  method: AuthMethod,
) => {
  res.cookie(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: useSecureCookie(),
    maxAge: ttlFor(method),
    path: "/",
  });
};

export const clearSessionCookie = (res: Response) => {
  res.clearCookie(SESSION_COOKIE, {
    httpOnly: true,
    sameSite: "lax",
    secure: useSecureCookie(),
    path: "/",
  });
};

export const createSession = async (input: {
  method: AuthMethod;
  memberId?: string | null;
  email?: string | null;
  userAgent?: string | null;
}) => {
  const token = randomBytes(32).toString("base64url");
  await prisma.authSession.create({
    data: {
      tokenHash: hashToken(token),
      method: input.method,
      memberId: input.memberId ?? null,
      email: input.email ?? null,
      userAgent: input.userAgent?.slice(0, 300) ?? null,
      expiresAt: new Date(Date.now() + ttlFor(input.method)),
    },
  });
  return token;
};

/** Resolves a cookie token to a live session and slides its expiry. */
export const findSession = async (token: string): Promise<Session | null> => {
  const row = await prisma.authSession.findUnique({
    where: { tokenHash: hashToken(token) },
  });
  if (!row) return null;

  if (row.expiresAt.getTime() <= Date.now()) {
    await prisma.authSession.delete({ where: { id: row.id } }).catch(() => {});
    return null;
  }

  // Only personal sessions of non-excluded members can carry a grant.
  let level: AccessRank = "VIEWER";
  if (isDemoMode() && row.method !== "QUESTIONS") {
    // The demo has no grants: whoever signs in by email may open the (read-only) forms.
    level = "EDITOR";
  } else if (row.method !== "QUESTIONS" && row.memberId) {
    const member = await prisma.member.findUnique({
      where: { id: row.memberId },
      select: { activityState: true },
    });
    if (!member || member.activityState === "EXCLUDED") {
      await prisma.authSession.delete({ where: { id: row.id } }).catch(() => {});
      return null;
    }
    const grant = await prisma.accessGrant.findUnique({
      where: { memberId: row.memberId },
    });
    if (grant) level = grant.level;
  } else if (row.method === "EMAIL" && !row.memberId) {
    // An allowed email: taking the address off the allowlist ends the session.
    const allowed = row.email
      ? await prisma.allowedEmail.findUnique({ where: { email: row.email } })
      : null;
    if (!allowed) {
      await prisma.authSession.delete({ where: { id: row.id } }).catch(() => {});
      return null;
    }
  }

  // Slide at most once a minute to avoid a write per request.
  if (Date.now() - row.lastSeenAt.getTime() > 60_000) {
    await prisma.authSession.update({
      where: { id: row.id },
      data: {
        lastSeenAt: new Date(),
        expiresAt: new Date(Date.now() + ttlFor(row.method)),
      },
    });
  }

  return {
    id: row.id,
    method: row.method,
    memberId: row.memberId,
    email: row.email,
    level,
  };
};

export const sessionFromRequest = (req: Request) => {
  const token = readCookie(req.headers.cookie, SESSION_COOKIE);
  return token ? findSession(token) : Promise.resolve(null);
};

export const deleteSession = (id: string) =>
  prisma.authSession.deleteMany({ where: { id } });

export const deleteMemberSessions = (memberId: string) =>
  prisma.authSession.deleteMany({ where: { memberId } });

export const deleteQuestionSessions = () =>
  prisma.authSession.deleteMany({ where: { method: "QUESTIONS" } });
