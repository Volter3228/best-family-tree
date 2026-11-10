import { describe, expect, it } from "vitest";
import {
  CODE_TTL_MS,
  MAX_CODE_ATTEMPTS,
  generateCode,
  hashCode,
  issueCode,
  verifyCode,
  type CodeStore,
  type StoredCode,
} from "./emailCodes.js";

const SECRET = "s".repeat(32);

const memoryStore = () => {
  const rows: (StoredCode & { consumed: boolean })[] = [];
  let seq = 0;
  const store: CodeStore = {
    async replace(code) {
      for (let i = rows.length - 1; i >= 0; i--) {
        if (rows[i].email === code.email && !rows[i].consumed) rows.splice(i, 1);
      }
      rows.push({ ...code, id: String(++seq), attempts: 0, consumed: false });
    },
    async findActive(email, now) {
      return (
        [...rows]
          .reverse()
          .find(
            (r) => r.email === email && !r.consumed && r.expiresAt > now,
          ) ?? null
      );
    },
    async tryAttempt(id, max) {
      const row = rows.find((r) => r.id === id);
      if (!row || row.attempts >= max) return false;
      row.attempts += 1;
      return true;
    },
    async consume(id) {
      const row = rows.find((r) => r.id === id);
      if (!row || row.consumed) return false;
      row.consumed = true;
      return true;
    },
  };
  return { store, rows };
};

describe("generateCode", () => {
  it("is always six digits", () => {
    for (let i = 0; i < 200; i++) expect(generateCode()).toMatch(/^\d{6}$/);
  });
});

describe("hashCode", () => {
  it("depends on the secret, the email and the code", () => {
    const base = hashCode(SECRET, "a@x.com", "123456");
    expect(hashCode("t".repeat(32), "a@x.com", "123456")).not.toBe(base);
    expect(hashCode(SECRET, "b@x.com", "123456")).not.toBe(base);
    expect(hashCode(SECRET, "a@x.com", "123457")).not.toBe(base);
  });
});

describe("email codes", () => {
  it("accepts the right code once", async () => {
    const { store } = memoryStore();
    const code = await issueCode(store, SECRET, "a@x.com");
    expect(await verifyCode(store, SECRET, "a@x.com", code)).toBe(true);
    expect(await verifyCode(store, SECRET, "a@x.com", code)).toBe(false);
  });

  it("rejects a wrong code", async () => {
    const { store } = memoryStore();
    const code = await issueCode(store, SECRET, "a@x.com");
    const wrong = code === "000000" ? "000001" : "000000";
    expect(await verifyCode(store, SECRET, "a@x.com", wrong)).toBe(false);
  });

  it("rejects a code for another email", async () => {
    const { store } = memoryStore();
    const code = await issueCode(store, SECRET, "a@x.com");
    expect(await verifyCode(store, SECRET, "b@x.com", code)).toBe(false);
  });

  it("rejects an expired code", async () => {
    const { store } = memoryStore();
    const now = new Date("2026-01-01T00:00:00Z");
    const code = await issueCode(store, SECRET, "a@x.com", now);
    const later = new Date(now.getTime() + CODE_TTL_MS + 1);
    expect(await verifyCode(store, SECRET, "a@x.com", code, later)).toBe(false);
  });

  it("accepts a code just before it expires", async () => {
    const { store } = memoryStore();
    const now = new Date("2026-01-01T00:00:00Z");
    const code = await issueCode(store, SECRET, "a@x.com", now);
    const later = new Date(now.getTime() + CODE_TTL_MS - 1);
    expect(await verifyCode(store, SECRET, "a@x.com", code, later)).toBe(true);
  });

  it("locks the code after too many wrong guesses, even for the right one", async () => {
    const { store } = memoryStore();
    const code = await issueCode(store, SECRET, "a@x.com");
    const wrong = code === "000000" ? "000001" : "000000";
    for (let i = 0; i < MAX_CODE_ATTEMPTS; i++) {
      expect(await verifyCode(store, SECRET, "a@x.com", wrong)).toBe(false);
    }
    expect(await verifyCode(store, SECRET, "a@x.com", code)).toBe(false);
  });

  it("lets the right code in on the last allowed attempt", async () => {
    const { store } = memoryStore();
    const code = await issueCode(store, SECRET, "a@x.com");
    const wrong = code === "000000" ? "000001" : "000000";
    for (let i = 0; i < MAX_CODE_ATTEMPTS - 1; i++) {
      await verifyCode(store, SECRET, "a@x.com", wrong);
    }
    expect(await verifyCode(store, SECRET, "a@x.com", code)).toBe(true);
  });

  it("replaces an older unused code when a new one is requested", async () => {
    const { store, rows } = memoryStore();
    const first = await issueCode(store, SECRET, "a@x.com");
    const second = await issueCode(store, SECRET, "a@x.com");
    expect(rows).toHaveLength(1);
    if (first !== second) {
      expect(await verifyCode(store, SECRET, "a@x.com", first)).toBe(false);
    }
    expect(await verifyCode(store, SECRET, "a@x.com", second)).toBe(true);
  });

  it("answers false when no code was requested", async () => {
    const { store } = memoryStore();
    expect(await verifyCode(store, SECRET, "a@x.com", "123456")).toBe(false);
  });
});
