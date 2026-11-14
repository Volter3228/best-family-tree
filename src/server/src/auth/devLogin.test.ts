import { describe, expect, it } from "vitest";
import { devLoginProblems, isDevLoginEnabled } from "./devLogin.js";

const local = "postgresql://u:p@localhost:5432/best_family_tree";

describe("devLoginProblems", () => {
  it("is silent when the flag is off", () => {
    expect(devLoginProblems({ NODE_ENV: "production" })).toEqual([]);
  });
  it("refuses production", () => {
    expect(devLoginProblems({ DEV_LOGIN: "true", NODE_ENV: "production", DATABASE_URL: local })).toHaveLength(1);
  });
  it("refuses a remote database", () => {
    const url = "postgresql://u:p@ep-x.eu-central-1.aws.neon.tech/db";
    expect(devLoginProblems({ DEV_LOGIN: "true", DATABASE_URL: url })).toHaveLength(1);
  });
  it("allows a local database", () => {
    expect(isDevLoginEnabled({ DEV_LOGIN: "true", DATABASE_URL: local })).toBe(true);
  });
});
