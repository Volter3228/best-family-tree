import "dotenv/config";
import prisma from "../db/prisma/clientInstance.js";
import { contactKey, type ContactPlatform } from "../utils/contactKeys.js";

// Read-only. Usage: npm run auth:report-duplicate-contacts
// Two members sharing an email make that address unusable for sign-in, and
// shared socials/phones break the 409 uniqueness rule.
const members = await prisma.member.findMany({
  select: {
    id: true,
    name: true,
    status: true,
    email: true,
    telegramLink: true,
    instagramLink: true,
    facebookLink: true,
    linkedinLink: true,
    phoneNumbers: { select: { phoneNumber: true } },
  },
});

const groups = new Map<string, string[]>();
const add = (key: string | null, label: string) => {
  if (key) groups.set(key, [...(groups.get(key) ?? []), label]);
};
const fields: [ContactPlatform, "email" | "telegramLink" | "instagramLink" | "facebookLink" | "linkedinLink"][] = [
  ["email", "email"],
  ["telegram", "telegramLink"],
  ["instagram", "instagramLink"],
  ["facebook", "facebookLink"],
  ["linkedin", "linkedinLink"],
];

for (const m of members) {
  const label = `${m.name} (${m.status}, ${m.id})`;
  for (const [platform, field] of fields) add(contactKey(platform, m[field]), label);
  for (const p of m.phoneNumbers) add(`phone:${p.phoneNumber.replace(/\D/g, "")}`, label);
}

const duplicates = [...groups].filter(([, owners]) => owners.length > 1);
if (duplicates.length === 0) {
  console.log(`No duplicate contacts among ${members.length} members.`);
} else {
  console.log(`${duplicates.length} duplicated contacts:`);
  for (const [key, owners] of duplicates) console.log(`\n${key}\n  - ${owners.join("\n  - ")}`);
}
await prisma.$disconnect();
