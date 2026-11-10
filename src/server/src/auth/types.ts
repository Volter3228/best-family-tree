import type { AuthMethod } from "../db/prisma/generated/client.js";

export type AccessRank = "VIEWER" | "EDITOR" | "ADMIN";

export type Session = {
  id: string;
  method: AuthMethod;
  memberId: string | null;
  email: string | null;
  level: AccessRank;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      session?: Session;
    }
  }
}
