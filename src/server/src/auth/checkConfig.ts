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

  const transport = env.MAIL_TRANSPORT || "console";
  if (transport === "gmail") {
    for (const name of [
      "MAIL_FROM",
      "GMAIL_CLIENT_ID",
      "GMAIL_CLIENT_SECRET",
      "GMAIL_REFRESH_TOKEN",
    ]) {
      if (!env[name]) problems.push(`${name} is required when MAIL_TRANSPORT=gmail`);
    }
  } else if (transport === "console") {
    // Codes only go to the log: fine for the demo (no sign-in) and for the
    // local http check, never for a real deployment.
    if (env.DEMO_MODE !== "true" && env.COOKIE_SECURE !== "false") {
      problems.push("MAIL_TRANSPORT=console would never deliver sign-in codes; use gmail");
    }
  } else {
    problems.push(`MAIL_TRANSPORT must be console or gmail, got "${transport}"`);
  }
  return problems;
};

/** Crashes at boot, so a bad deploy is visible at once, not at the first sign-in. */
export const assertConfig = (env: Env = process.env) => {
  const problems = configProblems(env);
  if (problems.length === 0) return;
  throw new Error(`Invalid production config:\n- ${problems.join("\n- ")}`);
};
