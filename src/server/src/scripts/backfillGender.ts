import "dotenv/config";
import { readFileSync } from "node:fs";
import prisma from "../db/prisma/clientInstance.js";

// Usage: npm run db:backfill-gender            (dry run, writes nothing)
//        npm run db:backfill-gender -- --apply (writes gender where it is null)
//        --file <path>  reads another guesses file (default data/genderGuesses.json)
// Stored genders are never overwritten: every write is guarded by gender: null.

type Gender = "MALE" | "FEMALE";
type GuessRow = { id: string; name: string; gender: Gender };

const args = process.argv.slice(2);
const APPLY = args.includes("--apply");
const fileArg = args.indexOf("--file");
const guessesFile =
  fileArg >= 0 && args[fileArg + 1]
    ? args[fileArg + 1]
    : new URL("./data/genderGuesses.json", import.meta.url);
const GENDERS: readonly string[] = ["MALE", "FEMALE"];

const guesses: GuessRow[] = JSON.parse(
  readFileSync(guessesFile, "utf8"),
);

const invalid = guesses.filter(
  (row) => typeof row.id !== "string" || !GENDERS.includes(row.gender),
);
if (invalid.length > 0) {
  console.error("Invalid rows in genderGuesses.json:", invalid);
  process.exit(1);
}

const seen = new Set<string>();
const duplicates = guesses.filter((row) => {
  const isDuplicate = seen.has(row.id);
  seen.add(row.id);
  return isDuplicate;
});
if (duplicates.length > 0) {
  console.error("Duplicate ids in genderGuesses.json:", duplicates.map((r) => r.id));
  process.exit(1);
}

const members = await prisma.member.findMany({
  where: { id: { in: guesses.map((row) => row.id) } },
  select: { id: true, name: true, gender: true },
});
const membersById = new Map(members.map((m) => [m.id, m]));

const toSet: GuessRow[] = [];
const alreadySame: GuessRow[] = [];
const alreadyDifferent: { row: GuessRow; stored: string }[] = [];
const notFound: GuessRow[] = [];

for (const row of guesses) {
  const member = membersById.get(row.id);
  if (!member) {
    notFound.push(row);
  } else if (member.gender === null) {
    toSet.push(row);
    console.log(`SET   ${row.id}  ${member.name}  -> ${row.gender}`);
  } else if (member.gender === row.gender) {
    alreadySame.push(row);
  } else {
    alreadyDifferent.push({ row, stored: member.gender });
    console.log(
      `SKIP  ${row.id}  ${member.name}  stored ${member.gender}, guess ${row.gender} (kept)`,
    );
  }
}

console.log(`\nRows in file:            ${guesses.length}`);
console.log(`Will set (gender null):  ${toSet.length}`);
console.log(`Already set, same:       ${alreadySame.length}`);
console.log(`Already set, different:  ${alreadyDifferent.length} (skipped)`);
console.log(`Ids not found:           ${notFound.length}`);
notFound.forEach((row) => console.log(`  not found: ${row.id}  ${row.name}`));

if (!APPLY) {
  console.log("\nDry run: nothing written. Pass --apply to write.");
} else {
  // One statement per gender: a statement per row is too slow for a remote
  // database within the transaction timeout.
  const results = await prisma.$transaction(
    (["MALE", "FEMALE"] as const).map((gender) =>
      prisma.member.updateMany({
        where: {
          id: { in: toSet.filter((row) => row.gender === gender).map((row) => row.id) },
          gender: null,
        },
        data: { gender },
      }),
    ),
  );
  const updated = results.reduce((sum, result) => sum + result.count, 0);
  console.log(`\nApplied: ${updated} updated of ${toSet.length} planned.`);
}

await prisma.$disconnect();
