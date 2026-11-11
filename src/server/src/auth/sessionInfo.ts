import prisma from "../db/prisma/clientInstance.js";
import { isDemoMode } from "./config.js";
import type { Session } from "./types.js";

/** The `/auth/me` payload, also returned right after a successful sign-in. */
export const buildSessionInfo = async (session: Session) => {
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
      ? (await prisma.accessGrant.findMany({ select: { memberId: true } })).map(
          (g) => g.memberId,
        )
      : [];
  return {
    demo: isDemoMode(),
    lockedMemberIds,
    method: session.method,
    level: session.level,
    memberId: session.memberId,
    email: session.email,
    member,
  };
};
