import { beforeEach, describe, expect, it, vi } from "vitest";

const db = vi.hoisted(() => ({
  authSession: { findUnique: vi.fn(), delete: vi.fn(), update: vi.fn() },
  allowedEmail: { findUnique: vi.fn() },
  member: { findUnique: vi.fn() },
  accessGrant: { findUnique: vi.fn() },
}));
vi.mock("../db/prisma/clientInstance.js", () => ({ default: db }));

import { findSession } from "./sessions.js";

const row = (method: "EMAIL" | "GOOGLE" | "QUESTIONS") => ({
  id: "s1",
  method,
  memberId: null,
  email: "john@gmail.com",
  expiresAt: new Date(Date.now() + 1e9),
  lastSeenAt: new Date(),
});

describe("findSession: allowlist-only sessions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    db.authSession.delete.mockResolvedValue({});
  });

  it.each(["EMAIL", "GOOGLE"] as const)("%s ends when the address leaves the allowlist", async (method) => {
    db.authSession.findUnique.mockResolvedValue(row(method));
    db.allowedEmail.findUnique.mockResolvedValue(null);
    expect(await findSession("t")).toBeNull();
    expect(db.authSession.delete).toHaveBeenCalled();
  });

  it("GOOGLE stays a Viewer while the address is allowed", async () => {
    db.authSession.findUnique.mockResolvedValue(row("GOOGLE"));
    db.allowedEmail.findUnique.mockResolvedValue({ email: "john@gmail.com" });
    expect(await findSession("t")).toMatchObject({ method: "GOOGLE", level: "VIEWER" });
  });
});
