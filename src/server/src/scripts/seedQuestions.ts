import "dotenv/config";
import { readFileSync } from "node:fs";
import prisma from "../db/prisma/clientInstance.js";
import { MIN_ACTIVE_QUESTIONS } from "../auth/config.js";
import { deleteQuestionSessions } from "../auth/sessions.js";

// Usage: npm run auth:seed-questions -- [path/to/questions.private.json]
// File shape: [{ "prompt": "...", "acceptedAnswers": ["..."], "isActive": true }]
// The file is gitignored; questions live only in the database.
const file = process.argv[2] ?? "questions.private.json";
const items = JSON.parse(readFileSync(file, "utf8")) as {
  prompt: string;
  acceptedAnswers: string[];
  isActive?: boolean;
}[];

const valid = items.every(
  (q) =>
    typeof q.prompt === "string" &&
    q.prompt.trim() &&
    Array.isArray(q.acceptedAnswers) &&
    q.acceptedAnswers.length > 0,
);
const active = items.filter((q) => q.isActive !== false);

if (!valid || active.length < MIN_ACTIVE_QUESTIONS) {
  console.error(
    `Need valid questions and at least ${MIN_ACTIVE_QUESTIONS} active ones (got ${active.length}).`,
  );
  process.exit(1);
}

await prisma.$transaction([
  prisma.signInChallenge.deleteMany(),
  prisma.signInQuestion.deleteMany(),
  prisma.signInQuestion.createMany({
    data: items.map((q) => ({
      prompt: q.prompt.trim(),
      acceptedAnswers: q.acceptedAnswers,
      isActive: q.isActive !== false,
    })),
  }),
]);
// Changing the question set signs every Questions session out.
const { count } = await deleteQuestionSessions();
console.log(`Seeded ${items.length} questions; removed ${count} questions sessions.`);
await prisma.$disconnect();
