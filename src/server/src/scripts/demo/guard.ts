import { databaseName } from "../../auth/checkConfig.js";

/**
 * The anonymizer rewrites every personal column in place, so it may only run on
 * a database that is named as a demo copy, and only when asked explicitly.
 */
export const checkAnonymizeAllowed = (
  databaseUrl: string | undefined,
  args: string[],
): { ok: true; database: string } | { ok: false; reason: string } => {
  const name = databaseName(databaseUrl);
  if (!name) return { ok: false, reason: "DATABASE_URL is not set or unreadable" };
  if (!name.toLowerCase().includes("demo")) {
    return {
      ok: false,
      reason: `Refusing: database "${name}" is not a demo copy (its name must contain "demo")`,
    };
  }
  if (!args.includes("--yes")) {
    return { ok: false, reason: `Refusing: pass --yes to anonymize "${name}" in place` };
  }
  return { ok: true, database: name };
};
