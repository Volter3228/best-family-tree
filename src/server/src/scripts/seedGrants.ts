import "dotenv/config";
import prisma from "../db/prisma/clientInstance.js";

// The standing access grants. Safe to rerun (e.g. after a database reset):
//   npm run auth:seed-grants
// Anyone not listed keeps whatever grant they have; use auth:grant for one-offs.
const ADMINS_BY_EMAIL = ["vova.morozov3228@gmail.com"];
const EDITORS_BY_NAME = ["Анна Морозова", "Оксана Магіс", "Олег Вишиванюк"];

type Target = { label: string; where: { email: string } | { name: string }; level: "ADMIN" | "EDITOR" };
const targets: Target[] = [
  ...ADMINS_BY_EMAIL.map((email) => ({ label: email, where: { email }, level: "ADMIN" as const })),
  ...EDITORS_BY_NAME.map((name) => ({ label: name, where: { name }, level: "EDITOR" as const })),
];

let failed = false;
for (const { label, where, level } of targets) {
  const matches = await prisma.member.findMany({
    where,
    select: { id: true, name: true, activityState: true },
  });
  if (matches.length !== 1 || matches[0].activityState === "EXCLUDED") {
    console.error(`Skipped ${label}: ${matches.length} matches (need exactly one, not excluded)`);
    failed = true;
    continue;
  }
  const [member] = matches;
  await prisma.accessGrant.upsert({
    where: { memberId: member.id },
    create: { memberId: member.id, level },
    update: { level },
  });
  console.log(`${member.name} is now ${level}`);
}
await prisma.$disconnect();
process.exit(failed ? 1 : 0);
