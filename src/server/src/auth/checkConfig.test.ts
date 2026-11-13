import { describe, expect, it } from "vitest";
import { assertConfig, configProblems, databaseName } from "./checkConfig.js";

const good = {
  NODE_ENV: "production",
  DATABASE_URL: "postgresql://x",
  AUTH_SECRET: "a".repeat(32),
  CLIENT_ORIGIN: "https://best.example.com",
  MAIL_TRANSPORT: "gmail",
  MAIL_FROM: "BEST Tree <a@x.com>",
  GMAIL_CLIENT_ID: "id",
  GMAIL_CLIENT_SECRET: "secret",
  GMAIL_REFRESH_TOKEN: "token",
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

describe("configProblems: mail", () => {
  it("requires every Gmail variable", () => {
    expect(configProblems({ ...good, GMAIL_REFRESH_TOKEN: undefined })).toHaveLength(1);
    expect(configProblems({ ...good, MAIL_FROM: "" })).toHaveLength(1);
  });

  it("refuses the console mailer in a real deployment, including by default", () => {
    expect(configProblems({ ...good, MAIL_TRANSPORT: "console" })).toHaveLength(1);
    expect(configProblems({ ...good, MAIL_TRANSPORT: undefined })).toHaveLength(1);
  });

  it("allows the console mailer only for the local http check", () => {
    expect(
      configProblems({
        ...good,
        MAIL_TRANSPORT: "console",
        COOKIE_SECURE: "false",
        CLIENT_ORIGIN: "http://localhost:3100",
      }),
    ).toEqual([]);
  });

  it("refuses the console mailer in demo mode too: the demo sends real codes", () => {
    expect(
      configProblems({
        ...good,
        MAIL_TRANSPORT: "console",
        DEMO_MODE: "true",
        DATABASE_URL: "postgresql://x/best_family_tree_demo",
      }),
    ).toHaveLength(1);
  });

  it("requires MAIL_FROM and RESEND_API_KEY for resend", () => {
    const resend = {
      ...good,
      MAIL_TRANSPORT: "resend",
      GMAIL_CLIENT_ID: undefined,
      GMAIL_CLIENT_SECRET: undefined,
      GMAIL_REFRESH_TOKEN: undefined,
      RESEND_API_KEY: "re_key",
    };
    expect(configProblems(resend)).toEqual([]);
    expect(configProblems({ ...resend, RESEND_API_KEY: undefined })).toHaveLength(1);
    expect(configProblems({ ...resend, MAIL_FROM: undefined })).toHaveLength(1);
  });

  it("refuses an unknown transport", () => {
    expect(configProblems({ ...good, MAIL_TRANSPORT: "smtp" })).toHaveLength(1);
  });
});

describe("configProblems: demo", () => {
  const demo = { ...good, DEMO_MODE: "true" };

  it("accepts a demo database", () => {
    expect(
      configProblems({ ...demo, DATABASE_URL: "postgresql://u:p@h/best_family_tree_demo?x=1" }),
    ).toEqual([]);
  });

  it("refuses demo mode on a database not named demo", () => {
    expect(
      configProblems({ ...demo, DATABASE_URL: "postgresql://u:p@h/best_family_tree" }),
    ).toHaveLength(1);
  });

  it("refuses demo mode outside production too", () => {
    expect(
      configProblems({
        NODE_ENV: "development",
        DEMO_MODE: "true",
        DATABASE_URL: "postgresql://u:p@localhost/best_family_tree",
      }),
    ).toHaveLength(1);
  });

  it("refuses an unreadable DATABASE_URL", () => {
    expect(configProblems({ DEMO_MODE: "true", DATABASE_URL: "nonsense" })).toHaveLength(1);
  });
});

describe("configProblems: google", () => {
  it("accepts both variables or neither", () => {
    expect(
      configProblems({ ...good, GOOGLE_CLIENT_ID: "id", GOOGLE_CLIENT_SECRET: "secret" }),
    ).toEqual([]);
    expect(configProblems(good)).toEqual([]);
  });

  it("flags half a pair, in every environment", () => {
    expect(configProblems({ ...good, GOOGLE_CLIENT_ID: "id" })).toHaveLength(1);
    expect(
      configProblems({ NODE_ENV: "development", GOOGLE_CLIENT_SECRET: "secret" }),
    ).toHaveLength(1);
  });
});

describe("configProblems: telegram", () => {
  it("accepts both variables or neither", () => {
    expect(
      configProblems({ ...good, TELEGRAM_CLIENT_ID: "id", TELEGRAM_CLIENT_SECRET: "secret" }),
    ).toEqual([]);
  });

  it("flags half a pair", () => {
    expect(configProblems({ ...good, TELEGRAM_CLIENT_ID: "id" })).toHaveLength(1);
    expect(
      configProblems({ NODE_ENV: "development", TELEGRAM_CLIENT_SECRET: "s" }),
    ).toHaveLength(1);
  });
});

describe("databaseName", () => {
  it("reads the name and ignores the query string", () => {
    expect(databaseName("postgresql://u:p@h:5432/neon_demo?sslmode=require")).toBe("neon_demo");
  });
});

describe("assertConfig", () => {
  it("throws listing every problem", () => {
    expect(() => assertConfig({ NODE_ENV: "production" })).toThrow(/AUTH_SECRET/);
  });
});
