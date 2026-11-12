import { createHmac, randomInt, timingSafeEqual } from "node:crypto";

export const CODE_TTL_MS = 10 * 60 * 1000;
export const MAX_CODE_ATTEMPTS = 5;

/**
 * Who a code belongs to: the address and the browser that asked for it (a
 * hash of its sign-in cookie). Requests and guesses from another browser
 * never touch the code, so nobody can spoil someone else's sign-in.
 */
export type CodeOwner = { email: string; browserHash: string };

export type StoredCode = CodeOwner & {
  id: string;
  codeHash: string;
  attempts: number;
  expiresAt: Date;
};

/** Persistence for codes; Prisma in production, a Map in tests. */
export interface CodeStore {
  /** Deletes unused codes of the same owner and stores the new one. */
  replace(code: Omit<StoredCode, "id" | "attempts">): Promise<void>;
  /** Newest unused, unexpired code of the owner. */
  findActive(owner: CodeOwner, now: Date): Promise<StoredCode | null>;
  /** Counts one guess; false when the attempts are already used up. */
  tryAttempt(id: string, maxAttempts: number): Promise<boolean>;
  /** Marks the code used; false when someone else used it first. */
  consume(id: string): Promise<boolean>;
}

export const generateCode = () =>
  String(randomInt(0, 1_000_000)).padStart(6, "0");

/**
 * HMAC with a server secret: only a million codes exist, so a plain hash
 * leaked from the database could be reversed at once. The secret makes the
 * database alone useless.
 */
export const hashCode = (secret: string, email: string, code: string) =>
  createHmac("sha256", secret).update(`${email}:${code}`).digest("hex");

const sameHash = (a: string, b: string) => {
  const left = Buffer.from(a, "hex");
  const right = Buffer.from(b, "hex");
  return left.length === right.length && timingSafeEqual(left, right);
};

/** Creates a code for the owner, replacing their older unused ones. */
export const issueCode = async (
  store: CodeStore,
  secret: string,
  owner: CodeOwner,
  now = new Date(),
) => {
  const code = generateCode();
  await store.replace({
    ...owner,
    codeHash: hashCode(secret, owner.email, code),
    expiresAt: new Date(now.getTime() + CODE_TTL_MS),
  });
  return code;
};

/** True once, for the right code on an unexpired record within its attempts. */
export const verifyCode = async (
  store: CodeStore,
  secret: string,
  owner: CodeOwner,
  code: string,
  now = new Date(),
) => {
  const record = await store.findActive(owner, now);
  if (!record) return false;
  // Count the guess before comparing, so parallel guesses can not exceed the cap.
  if (!(await store.tryAttempt(record.id, MAX_CODE_ATTEMPTS))) return false;
  if (!sameHash(record.codeHash, hashCode(secret, owner.email, code))) return false;
  return store.consume(record.id);
};
