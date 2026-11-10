import "dotenv/config";
import { readFileSync } from "node:fs";
import prisma from "../db/prisma/clientInstance.js";
import { diffAllowlist, parseAllowlistCsv } from "../auth/allowlistCsv.js";

// Usage: npm run auth:import-emails -- --file <csv> [--apply]
// Dry run by default. Only GOOGLE_GROUP rows are added or removed.
const args = process.argv.slice(2);
const fileIndex = args.indexOf("--file");
const file = fileIndex === -1 ? undefined : args[fileIndex + 1];
const apply = args.includes("--apply");

if (!file) {
  console.error("Usage: auth:import-emails -- --file <csv> [--apply]");
  process.exit(1);
}

const { emails, rejected } = parseAllowlistCsv(readFileSync(file, "utf8"));
const existing = await prisma.allowedEmail.findMany({
  select: { email: true, source: true },
});
const diff = diffAllowlist(existing, emails);

console.log(`File: ${emails.length} emails, ${rejected.length} unusable lines`);
if (rejected.length) console.log(`  unusable: ${rejected.slice(0, 5).join(" | ")}`);
console.log(
  `Would add ${diff.toAdd.length}, remove ${diff.toRemove.length}, keep ${diff.unchanged}; ` +
    `${diff.skippedManual.length} already MANUAL (untouched)`,
);

if (!apply) {
  console.log("Dry run. Pass --apply to write.");
} else {
  await prisma.$transaction([
    prisma.allowedEmail.deleteMany({
      where: { email: { in: diff.toRemove }, source: "GOOGLE_GROUP" },
    }),
    prisma.allowedEmail.createMany({
      data: diff.toAdd.map((email) => ({ email, source: "GOOGLE_GROUP" as const })),
    }),
  ]);
  console.log("Applied.");
}
await prisma.$disconnect();
