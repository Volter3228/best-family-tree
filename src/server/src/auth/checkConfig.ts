type Env = Record<string, string | undefined>;

/** Lists what is wrong with the production environment (empty = fine). */
export const configProblems = (env: Env): string[] => {
  if (env.NODE_ENV !== "production") return [];
  const problems: string[] = [];

  if (!env.DATABASE_URL) problems.push("DATABASE_URL is not set");
  if ((env.AUTH_SECRET ?? "").length < 32) {
    problems.push("AUTH_SECRET must be at least 32 characters");
  }
  // COOKIE_SECURE=false is the local http check of the production build.
  if (env.COOKIE_SECURE !== "false" && !env.CLIENT_ORIGIN?.startsWith("https://")) {
    problems.push("CLIENT_ORIGIN must be an https:// origin");
  }
  return problems;
};

/** Crashes at boot, so a bad deploy is visible at once, not at the first sign-in. */
export const assertConfig = (env: Env = process.env) => {
  const problems = configProblems(env);
  if (problems.length === 0) return;
  throw new Error(`Invalid production config:\n- ${problems.join("\n- ")}`);
};
