type Env = Record<string, string | undefined>;

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1", "[::1]", "host.docker.internal"]);

/** The host of a postgres URL, or null when it can not be read. */
export const databaseHost = (url: string | undefined) => {
  try {
    return new URL(url ?? "").hostname.toLowerCase() || null;
  } catch {
    return null;
  }
};

/**
 * Dev login lets a tester (a person or an agent) skip Google/Telegram/email.
 * It needs an explicit DEV_LOGIN=true, never runs in production, and only
 * against a local database, so a stray flag can not open real data.
 */
export const devLoginProblems = (env: Env): string[] => {
  if (env.DEV_LOGIN !== "true") return [];
  if (env.NODE_ENV === "production") return ["DEV_LOGIN=true is not allowed in production"];
  const host = databaseHost(env.DATABASE_URL);
  return host && (LOCAL_HOSTS.has(host) || host === "db" || host === "postgres")
    ? []
    : ["DEV_LOGIN=true needs a DATABASE_URL that points at a local database"];
};

export const isDevLoginEnabled = (env: Env = process.env) =>
  env.DEV_LOGIN === "true" && devLoginProblems(env).length === 0;
