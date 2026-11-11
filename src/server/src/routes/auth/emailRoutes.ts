import { Router, type Request, type Response } from "express";
import { ipKeyGenerator, rateLimit } from "express-rate-limit";
import { z } from "zod";
import { authSecret, isDemoMode } from "../../auth/config.js";
import { issueCode, verifyCode } from "../../auth/emailCodes.js";
import { loadEmailIdentity, prismaCodeStore } from "../../auth/emailSignIn.js";
import { normalizeEmail } from "../../auth/eligibility.js";
import { getMailer } from "../../auth/mailer/index.js";
import { renderSignInCodeEmail } from "../../auth/mailer/signInCodeEmail.js";
import { buildSessionInfo } from "../../auth/sessionInfo.js";
import { createSession, findSession, setSessionCookie } from "../../auth/sessions.js";
import { sendRouteError } from "../../utils/httpErrors.js";

const router = Router();

const MINUTE = 60 * 1000;
const bodyEmail = (req: Request) => {
  const raw = (req.body as { email?: unknown } | undefined)?.email;
  return typeof raw === "string" ? normalizeEmail(raw) : "";
};

const limiter = (
  limit: number,
  windowMs: number,
  key: (req: Request) => string,
) =>
  rateLimit({
    windowMs,
    limit,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    keyGenerator: key,
    handler: (_req, res) => {
      res.status(429).json({ error: "Too many requests" });
    },
  });

const ipKey = (req: Request) => ipKeyGenerator(req.ip ?? "unknown");
const emailKey = (req: Request) => bodyEmail(req) || ipKey(req);

// Every request counts, eligible or not, so the limits reveal nothing.
const requestLimits = [
  limiter(3, 15 * MINUTE, ipKey),
  limiter(10, 24 * 60 * MINUTE, ipKey),
  limiter(3, 15 * MINUTE, emailKey),
  limiter(10, 24 * 60 * MINUTE, emailKey),
];

const requestSchema = z.object({ email: z.string().max(254).pipe(z.email()) });
const verifySchema = z.object({
  email: z.string().max(254).pipe(z.email()),
  code: z.string().regex(/^\d{6}$/),
});

const sendCode = async (rawEmail: string) => {
  // The demo has no members to check against: any address gets a code.
  if (!isDemoMode()) {
    const identity = await loadEmailIdentity(rawEmail);
    if (identity.kind === "refused") return;
  }
  const email = normalizeEmail(rawEmail);
  const code = await issueCode(prismaCodeStore, authSecret(), email);
  const message = renderSignInCodeEmail(code, process.env.CLIENT_ORIGIN ?? "");
  await getMailer().send({ to: email, ...message });
};

router.post("/auth/email/request", ...requestLimits, (req: Request, res: Response) => {
  const body = requestSchema.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid email" });
    return;
  }
  // The answer, and the time it takes, are the same for every address: all
  // the work happens after responding, so nobody can tell members apart.
  res.json({ ok: true });
  void sendCode(body.data.email).catch((error) =>
    console.error("Failed to send sign-in code", error),
  );
});

router.post("/auth/email/verify", async (req: Request, res: Response) => {
  const fail = () => res.status(401).json({ error: "Invalid or expired code" });
  const body = verifySchema.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid body" });
    return;
  }
  try {
    const email = normalizeEmail(body.data.email);
    // Eligibility again: the member may have been excluded after the request.
    // (The demo accepts any address and ties the session to no member.)
    let memberId: string | null = null;
    if (!isDemoMode()) {
      const identity = await loadEmailIdentity(email);
      if (identity.kind === "refused") return void fail();
      memberId = identity.kind === "member" ? identity.memberId : null;
    }
    if (!(await verifyCode(prismaCodeStore, authSecret(), email, body.data.code))) {
      return void fail();
    }
    const token = await createSession({
      method: "EMAIL",
      memberId,
      email,
      userAgent: req.headers["user-agent"],
    });
    setSessionCookie(res, token, "EMAIL");
    const session = await findSession(token);
    if (!session) return void fail();
    res.json(await buildSessionInfo(session));
  } catch (error) {
    sendRouteError(res, error, "Failed to verify code");
  }
});

export default router;
