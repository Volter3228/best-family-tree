import prisma from "../db/prisma/clientInstance.js";
import { phoneKey, resolveTelegramIdentity, type TelegramIdentity } from "./telegramEligibility.js";

export type TelegramClaims = { phone_number?: unknown; [claim: string]: unknown };

/** Loads only the owners of the one phone, and decides who it belongs to. */
export const loadTelegramIdentity = async (
  claims: TelegramClaims,
): Promise<TelegramIdentity> => {
  const phone = typeof claims.phone_number === "string" ? claims.phone_number : null;
  const wanted = phoneKey(phone ?? "");
  if (!wanted) return { kind: "refused", reason: "unknown" };
  // Every stored format keeps the same last 9 digits, so this narrows the scan
  // to the few rows that could match before the exact phoneKey comparison.
  const candidates = await prisma.phoneNumber.findMany({
    where: { phoneNumber: { contains: wanted.slice(-9) } },
    select: { ownerId: true, phoneNumber: true },
  });
  const phones = candidates.filter((p) => phoneKey(p.phoneNumber) === wanted);
  const ownerIds = [...new Set(phones.map((p) => p.ownerId))];
  if (ownerIds.length === 0) return { kind: "refused", reason: "unknown" };
  const [members, grants] = await Promise.all([
    prisma.member.findMany({
      where: { id: { in: ownerIds } },
      select: { id: true, email: true, activityState: true },
    }),
    prisma.accessGrant.findMany({
      where: { memberId: { in: ownerIds } },
      select: { memberId: true, level: true },
    }),
  ]);
  const levelByMember = new Map(grants.map((g) => [g.memberId, g.level]));
  return resolveTelegramIdentity(phone, {
    phones,
    members: members.map((m) => ({ ...m, grantLevel: levelByMember.get(m.id) ?? null })),
  });
};
