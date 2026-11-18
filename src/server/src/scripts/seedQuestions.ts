import "dotenv/config";
import { readFileSync } from "node:fs";
import prisma from "../db/prisma/clientInstance.js";
import { MIN_ACTIVE_QUESTIONS } from "../auth/config.js";
import { deleteQuestionSessions } from "../auth/sessions.js";
import { DEMO_QUESTIONS } from "./demo/demoQuestions.js";

// Usage: npm run auth:seed-questions -- [path/to/questions.private.json | --demo]
// File shape: [{ "prompt": "...", "promptEn": "...", "acceptedAnswers": ["..."], "isActive": true }]
// promptEn is optional. --demo seeds the public demo questions instead of a file.
// The file is gitignored; questions live only in the database.
const arg = process.argv[2];
const items = (
  arg === "--demo"
    ? DEMO_QUESTIONS
    : JSON.parse(readFileSync(arg ?? "questions.private.json", "utf8"))
) as {
  prompt: string;
  promptEn?: string;
  acceptedAnswers: string[];
  isActive?: boolean;
}[];

const valid = items.every(
  (q) =>
    typeof q.prompt === "string" &&
    q.prompt.trim() &&
    (q.promptEn === undefined || typeof q.promptEn === "string") &&
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
      promptEn: q.promptEn?.trim() || null,
      acceptedAnswers: q.acceptedAnswers,
      isActive: q.isActive !== false,
    })),
  }),
]);
// Changing the question set signs every Questions session out.
const { count } = await deleteQuestionSessions();
console.log(
  `Seeded ${items.length} questions; removed ${count} questions sessions.`,
);
await prisma.$disconnect();
