import { readMailTransport } from "./mailer/transports.js";

type Env = Record<string, string | undefined>;

/** The database name from a postgres URL, or null when it can not be read. */
export const databaseName = (url: string | undefined) => {
  try {
    return decodeURIComponent(new URL(url ?? "").pathname.slice(1)) || null;
  } catch {
    return null;
  }
};

// A public demo must never sit on the real family data: the demo database
// has to be named so (e.g. best_family_tree_demo). Checked in every environment.
const demoProblems = (env: Env): string[] => {
  if (env.DEMO_MODE !== "true") return [];
  const name = databaseName(env.DATABASE_URL);
  return name?.toLowerCase().includes("demo")
    ? []
    : ["DEMO_MODE=true needs a DATABASE_URL whose database name contains \"demo\""];
};

/** Lists what is wrong with the environment (empty = fine). */
export const configProblems = (env: Env): string[] => {
  const demo = demoProblems(env);
  if (env.NODE_ENV !== "production") return demo;
  const problems: string[] = [...demo];

  if (!env.DATABASE_URL) problems.push("DATABASE_URL is not set");
  if ((env.AUTH_SECRET ?? "").length < 32) {
    problems.push("AUTH_SECRET must be at least 32 characters");
  }
  // COOKIE_SECURE=false is the local http check of the production build.
  if (env.COOKIE_SECURE !== "false" && !env.CLIENT_ORIGIN?.startsWith("https://")) {
    problems.push("CLIENT_ORIGIN must be an https:// origin");
  }

  const mail = readMailTransport(env);
  problems.push(...mail.problems);
  // Codes only go to the log: fine for the local http check, never for a
  // real deployment (the demo sends real codes too).
  if (mail.transport === "console" && env.COOKIE_SECURE !== "false") {
    problems.push("MAIL_TRANSPORT=console would never deliver sign-in codes; use resend");
  }
  return problems;
};

/** Crashes at boot, so a bad deploy is visible at once, not at the first sign-in. */
export const assertConfig = (env: Env = process.env) => {
  const problems = configProblems(env);
  if (problems.length === 0) return;
  throw new Error(`Invalid production config:\n- ${problems.join("\n- ")}`);
};
