import prisma from "../db/prisma/clientInstance.js";
import { resolveTelegramIdentity, type TelegramIdentity } from "./telegramEligibility.js";

export type TelegramClaims = { phone_number?: unknown; [claim: string]: unknown };

/** Loads phones, owners and grants (small tables) and decides who the phone belongs to. */
export const loadTelegramIdentity = async (
  claims: TelegramClaims,
): Promise<TelegramIdentity> => {
  const phone = typeof claims.phone_number === "string" ? claims.phone_number : null;
  const [phones, members, grants] = await Promise.all([
    prisma.phoneNumber.findMany({ select: { ownerId: true, phoneNumber: true } }),
    prisma.member.findMany({ select: { id: true, email: true, activityState: true } }),
    prisma.accessGrant.findMany({ select: { memberId: true, level: true } }),
  ]);
  const levelByMember = new Map(grants.map((g) => [g.memberId, g.level]));
  return resolveTelegramIdentity(phone, {
    phones,
    members: members.map((m) => ({ ...m, grantLevel: levelByMember.get(m.id) ?? null })),
  });
};
