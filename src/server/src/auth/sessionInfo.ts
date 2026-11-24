import prisma from "../db/prisma/clientInstance.js";
import { isDemoMode } from "./config.js";
import type { Session } from "./types.js";

/** The `/auth/me` payload, also returned right after a successful sign-in. */
export const buildSessionInfo = async (session: Session) => {
  const member = session.memberId
    ? await prisma.member.findUnique({
        where: { id: session.memberId },
        select: {
          id: true,
          name: true,
          photo: true,
          status: true,
          featuredPositionId: true,
          nameBadgeTeamId: true,
          nameBadgeIcon: true,
          positions: {
            select: {
              id: true,
              organization: true,
              startYear: true,
              endYear: true,
              role: { select: { name: true, isLeaderPosition: true } },
              team: {
                select: {
                  id: true,
                  name: true,
                  photoUrl: true,
                  startYear: true,
                  endYear: true,
                  teamType: { select: { iconUrl: true, color: true } },
                },
              },
            },
            orderBy: { createdAt: "asc" },
          },
        },
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
    member: member && {
      id: member.id,
      name: member.name,
      photo: member.photo,
      status: member.status,
      featuredPositionId: member.featuredPositionId,
      nameBadgeTeamId: member.nameBadgeTeamId,
      nameBadgeIcon: member.nameBadgeIcon,
      positions: member.positions.map((p) => ({
        id: p.id,
        roleName: p.role.name,
        isLeaderPosition: p.role.isLeaderPosition,
        teamId: p.team?.id ?? null,
        teamName: p.team?.name ?? null,
        teamPhotoUrl: p.team?.photoUrl ?? null,
        teamTypeIconUrl: p.team?.teamType?.iconUrl ?? null,
        teamTypeColor: p.team?.teamType?.color ?? null,
        organization: p.organization,
        startYear: p.team ? p.team.startYear : p.startYear,
        endYear: p.team ? p.team.endYear : p.endYear,
      })),
    },
  };
};
