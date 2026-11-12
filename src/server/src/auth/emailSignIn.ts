import prisma from "../db/prisma/clientInstance.js";
import type { CodeStore } from "./emailCodes.js";
import {
  normalizeEmail,
  resolveEmailIdentity,
  type EmailIdentity,
} from "./eligibility.js";

export const prismaCodeStore: CodeStore = {
  async replace(code) {
    await prisma.$transaction([
      // Older unused codes die, and so does anything long expired.
      prisma.emailSignInCode.deleteMany({
        where: {
          OR: [
            { email: code.email, browserHash: code.browserHash, consumedAt: null },
            { expiresAt: { lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } },
          ],
        },
      }),
      prisma.emailSignInCode.create({ data: code }),
    ]);
  },
  async findActive({ email, browserHash }, now) {
    return prisma.emailSignInCode.findFirst({
      where: { email, browserHash, consumedAt: null, expiresAt: { gt: now } },
      orderBy: { createdAt: "desc" },
    });
  },
  async tryAttempt(id, maxAttempts) {
    const { count } = await prisma.emailSignInCode.updateMany({
      where: { id, attempts: { lt: maxAttempts } },
      data: { attempts: { increment: 1 } },
    });
    return count === 1;
  },
  async consume(id) {
    const { count } = await prisma.emailSignInCode.updateMany({
      where: { id, consumedAt: null },
      data: { consumedAt: new Date() },
    });
    return count === 1;
  },
};

/** Loads the rows eligibility needs and decides who the address belongs to. */
export const loadEmailIdentity = async (rawEmail: string): Promise<EmailIdentity> => {
  const email = normalizeEmail(rawEmail);
  // Member emails are stored as typed, so compare after normalising; the
  // table is small (hundreds of rows) and this runs only on rate-limited
  // requests and after a correct code.
  const [members, grants, allowedEmails] = await Promise.all([
    prisma.member.findMany({
      where: { email: { not: null } },
      select: { id: true, email: true, activityState: true },
    }),
    prisma.accessGrant.findMany({ select: { memberId: true, level: true } }),
    prisma.allowedEmail.findMany({ where: { email }, select: { email: true } }),
  ]);
  const levelByMember = new Map(grants.map((g) => [g.memberId, g.level]));
  return resolveEmailIdentity(email, {
    members: members.map((m) => ({ ...m, grantLevel: levelByMember.get(m.id) ?? null })),
    allowedEmails,
  });
};
