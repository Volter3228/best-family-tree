import "dotenv/config";
import { contactKey } from "../utils/contactKeys.js";
import { checkAnonymizeAllowed } from "./demo/guard.js";
import { createIdentityFactory } from "./demo/fakeIdentity.js";
import { DEMO_QUESTIONS } from "./demo/demoQuestions.js";
import { hasDemoPhoto } from "./demo/photoShare.js";
import {
  findLeaks,
  lowerSet,
  normalizeSocial,
  type DemoValues,
  type RealValues,
} from "./demo/piiCheck.js";

// Usage: DATABASE_URL=<...demo db...> npm run db:anonymize-demo -- --yes [--skip-photos]
//
// Whitelist approach: a column survives only if it is listed as kept below.
//   members:    kept id, mentorId, familyGroupId, status, activityState, joinedAt, course
//               (photos: two of three get an AI-generated face, the rest none)
//   teams:      kept name, years, isOngoing, teamTypeId
//   kept whole: team types, roles, positions (apart from `organization`)
//   everything else is replaced (or nulled). All sign-in data is deleted, then
//   harmless demo questions are added so the login page works.
// Repeatable: the seed is fixed. All-or-nothing: one transaction, and the
// leak check runs inside it.
const SEED = 20260101;
const GROUP_NAMES = ["Прем'єр-міністри", "Китайці", "Котики", "Чорнобривці", "Конструкторсім'я"];
const SOCIALS = [
  ["telegramLink", "telegram", (h: string) => `@${h}`],
  ["instagramLink", "instagram", (h: string) => `https://instagram.com/${h}`],
  ["facebookLink", "facebook", (h: string) => `https://facebook.com/${h}`],
  ["linkedinLink", "linkedin", (h: string) => `https://linkedin.com/in/${h}`],
] as const;

const args = process.argv.slice(2);
const skipPhotos = args.includes("--skip-photos");

const allowed = checkAnonymizeAllowed(process.env.DATABASE_URL, args);
if (!allowed.ok) {
  console.error(allowed.reason);
  process.exit(1);
}
console.log(`Anonymizing "${allowed.database}"${skipPhotos ? " (photos removed, not replaced)" : ""}`);

// Loaded only after the guard, so a refused run never opens a connection.
const { default: prisma } = await import("../db/prisma/clientInstance.js");
const { stockPhotoUrl, uploadFace, uploadFromUrl, mapLimit } = await import("./demo/demoPhotos.js");
const { createFaceSource } = await import("./demo/aiFaces.js");

const byId = { orderBy: { id: "asc" } } as const;
const [members, phones, teams, groups, positions] = await Promise.all([
  prisma.member.findMany(byId),
  prisma.phoneNumber.findMany(byId),
  prisma.team.findMany(byId),
  prisma.familyGroup.findMany(byId),
  prisma.memberPosition.findMany(byId),
]);

// What is real, so we can prove at the end that none of it is left.
const real: RealValues = {
  names: lowerSet([...members.map((m) => m.name), ...groups.map((g) => g.name)]),
  emails: lowerSet(members.flatMap((m) => (m.email ? [m.email] : []))),
  phones: new Set(phones.map((p) => p.phoneNumber.trim())),
  socials: new Set(
    members.flatMap((m) =>
      SOCIALS.flatMap(([field, platform]) => {
        const key = m[field] ? contactKey(platform, m[field]) : null;
        return key ? [key] : [];
      }),
    ),
  ),
  urls: new Set(
    [...members.map((m) => m.photo), ...teams.map((t) => t.photoUrl), ...groups.map((g) => g.photo)]
      .filter((u): u is string => Boolean(u))
      .map((u) => u.trim()),
  ),
};

const factory = createIdentityFactory(SEED, {
  names: real.names,
  phones: real.phones,
});

// Photos first (network): nothing in the database changes until they are done.
const photoOf = async (url: string | null, make: () => Promise<string | null>) =>
  url && !skipPhotos ? make() : null;

let failedPhotos = 0;
const track = (url: string | null, wanted: boolean) => {
  if (wanted && !url && !skipPhotos) failedPhotos++;
  return url;
};

// By position, not by who had a real photo: that would reveal who did.
// One at a time: the face source spaces its own requests.
const nextFace = createFaceSource();
const memberPhotos: (string | null)[] = [];
for (const [index, m] of members.entries()) {
  const wanted = hasDemoPhoto(index);
  const face = wanted && !skipPhotos ? await nextFace() : null;
  memberPhotos.push(track(face ? await uploadFace(face, "demo/members", m.id) : null, wanted));
  if ((index + 1) % 100 === 0) console.log(`  photos: ${index + 1}/${members.length} members done`);
}
// Photos come first and the database is untouched until here: stop now if they mostly failed.
const wantedCount = members.filter((_, i) => hasDemoPhoto(i)).length;
if (!skipPhotos && failedPhotos > wantedCount * 0.1) {
  console.error(`${failedPhotos} of ${wantedCount} member photos failed; nothing was changed. Try again later.`);
  process.exit(1);
}
const teamPhotos = await mapLimit(teams, 5, async (t) =>
  track(
    await photoOf(t.photoUrl, () => uploadFromUrl(stockPhotoUrl(t.id), "demo/teams", t.id)),
    Boolean(t.photoUrl),
  ),
);
const groupPhotos = await mapLimit(groups, 5, async (g) =>
  track(
    await photoOf(g.photo, () => uploadFromUrl(stockPhotoUrl(g.id), "demo/groups", g.id)),
    Boolean(g.photo),
  ),
);

await prisma.$transaction(
  async (tx) => {
    for (const [i, m] of members.entries()) {
      const person = factory.person();
      const handle = factory.handle(person);
      await tx.member.update({
        where: { id: m.id },
        data: {
          name: person.name,
          email: m.email ? factory.email(person) : null,
          birthday: m.birthday ? factory.birthdayBefore(m.joinedAt) : null,
          photo: memberPhotos[i],
          ...Object.fromEntries(
            SOCIALS.map(([field, , format]) => [field, m[field] ? format(handle) : null]),
          ),
        },
      });
    }
    for (const p of phones) {
      await tx.phoneNumber.update({ where: { id: p.id }, data: { phoneNumber: factory.phone() } });
    }
    for (const [i, t] of teams.entries()) {
      await tx.team.update({ where: { id: t.id }, data: { description: null, photoUrl: teamPhotos[i] } });
    }
    for (const [i, g] of groups.entries()) {
      await tx.familyGroup.update({
        where: { id: g.id },
        data: {
          name: GROUP_NAMES[i % GROUP_NAMES.length] + (i >= GROUP_NAMES.length ? ` ${i + 1}` : ""),
          description: null,
          photo: groupPhotos[i],
        },
      });
    }
    for (const pos of positions) {
      await tx.memberPosition.update({
        where: { id: pos.id },
        data: { organization: pos.organization ? factory.company() : null },
      });
    }

    // Sign-in data goes entirely, questions and their answers included.
    await tx.authSession.deleteMany();
    await tx.signInChallenge.deleteMany();
    await tx.signInQuestion.deleteMany();
    await tx.allowedEmail.deleteMany();
    await tx.emailSignInCode.deleteMany();
    await tx.accessGrant.deleteMany();
    await tx.signInQuestion.createMany({
      data: DEMO_QUESTIONS.map((q) => ({ ...q, isActive: true })),
    });

    // The proof: nothing real is left. Throwing here rolls everything back.
    const [m2, ph2, t2, g2] = await Promise.all([
      tx.member.findMany(),
      tx.phoneNumber.findMany(),
      tx.team.findMany(),
      tx.familyGroup.findMany(),
    ]);
    const demo: DemoValues = {
      names: [...m2.map((m) => m.name), ...g2.map((g) => g.name)],
      emails: m2.flatMap((m) => (m.email ? [m.email] : [])),
      phones: ph2.map((p) => p.phoneNumber),
      socials: m2.flatMap((m) =>
        SOCIALS.flatMap(([field, platform]) => (m[field] ? [{ platform, value: m[field]! }] : [])),
      ),
      urls: [...m2.map((m) => m.photo), ...t2.map((t) => t.photoUrl), ...g2.map((g) => g.photo)].filter(
        (u): u is string => Boolean(u),
      ),
    };
    const leaks = findLeaks(real, demo);
    if (Object.keys(leaks).length > 0) {
      throw new Error(`Real data still present, rolled back: ${JSON.stringify(leaks)}`);
    }
    const leftovers = await Promise.all([
      tx.authSession.count(),
      tx.allowedEmail.count(),
      tx.accessGrant.count(),
      tx.signInQuestion.count({ where: { prompt: { notIn: DEMO_QUESTIONS.map((q) => q.prompt) } } }),
    ]);
    if (leftovers.some((n) => n > 0)) throw new Error("Sign-in data still present, rolled back");
  },
  { timeout: 300_000, maxWait: 10_000 },
);

console.log(
  `Done: ${members.length} members, ${phones.length} phones, ${teams.length} teams, ` +
    `${groups.length} family groups. No real name, email, phone, handle or photo url remains.`,
);
if (failedPhotos > 0) console.log(`${failedPhotos} photos could not be copied and were removed.`);
await prisma.$disconnect();
