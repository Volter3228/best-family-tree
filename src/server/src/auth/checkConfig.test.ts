import { describe, expect, it } from "vitest";
import { assertConfig, configProblems } from "./checkConfig.js";

const good = {
  NODE_ENV: "production",
  DATABASE_URL: "postgresql://x",
  AUTH_SECRET: "a".repeat(32),
  CLIENT_ORIGIN: "https://best.example.com",
};

describe("configProblems", () => {
  it("accepts a complete production config", () => {
    expect(configProblems(good)).toEqual([]);
  });

  it("checks nothing outside production", () => {
    expect(configProblems({ NODE_ENV: "development" })).toEqual([]);
  });

  it("flags a short AUTH_SECRET", () => {
    expect(configProblems({ ...good, AUTH_SECRET: "short" })).toHaveLength(1);
  });

  it("flags a missing DATABASE_URL", () => {
    expect(configProblems({ ...good, DATABASE_URL: undefined })).toHaveLength(1);
  });

  it("flags a non-https CLIENT_ORIGIN", () => {
    expect(
      configProblems({ ...good, CLIENT_ORIGIN: "http://best.example.com" }),
    ).toHaveLength(1);
  });

  it("allows http when COOKIE_SECURE=false (local check)", () => {
    expect(
      configProblems({
        ...good,
        CLIENT_ORIGIN: "http://localhost:3000",
        COOKIE_SECURE: "false",
      }),
    ).toEqual([]);
  });
});

describe("assertConfig", () => {
  it("throws listing every problem", () => {
    expect(() => assertConfig({ NODE_ENV: "production" })).toThrow(/AUTH_SECRET/);
  });
});
