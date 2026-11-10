import "dotenv/config";
import prisma from "../db/prisma/clientInstance.js";

// Usage: npm run auth:grant -- <memberId|exact name> <editor|admin|none>
const [ref, levelArg] = process.argv.slice(2);
const level = levelArg?.toLowerCase();

if (!ref || !["editor", "admin", "none"].includes(level ?? "")) {
  console.error("Usage: auth:grant <memberId|exact name> <editor|admin|none>");
  process.exit(1);
}

const matches = await prisma.member.findMany({
  where: { OR: [{ id: ref }, { name: ref }] },
  select: { id: true, name: true, status: true, activityState: true },
});

if (matches.length !== 1) {
  console.error(
    matches.length === 0
      ? "No member found."
      : `Ambiguous, pass an id:\n${matches.map((m) => `  ${m.id}  ${m.name} (${m.status})`).join("\n")}`,
  );
  process.exit(1);
}

const member = matches[0];
if (level === "none") {
  await prisma.accessGrant.deleteMany({ where: { memberId: member.id } });
  console.log(`Removed grant from ${member.name}`);
} else {
  if (member.activityState === "EXCLUDED") {
    console.error("Member is excluded; they can not sign in.");
    process.exit(1);
  }
  const value = level === "admin" ? "ADMIN" : "EDITOR";
  await prisma.accessGrant.upsert({
    where: { memberId: member.id },
    create: { memberId: member.id, level: value },
    update: { level: value },
  });
  console.log(`${member.name} is now ${value}`);
}
await prisma.$disconnect();
