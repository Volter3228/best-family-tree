import { Router, type Request } from "express";
import { rateLimit } from "express-rate-limit";
import { z } from "zod";
import {
  createChallenge,
  swapChallengeQuestion,
  verifyAnswers,
} from "../../auth/challenges.js";
import { createSession, setSessionCookie } from "../../auth/sessions.js";
import { sendRouteError } from "../../utils/httpErrors.js";

const router = Router();

// The only limit: failed verifies per IP, like a password lockout.
const failedVerifyLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  // Only wrong answers (401) count; expired challenges and bad bodies do not.
  requestWasSuccessful: (_req, res) => res.statusCode !== 401,
  skipSuccessfulRequests: true,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  handler: (req, res) => {
    const resetTime = (req as Request & { rateLimit?: { resetTime?: Date } })
      .rateLimit?.resetTime;
    const retryAfterSeconds = resetTime
      ? Math.max(1, Math.ceil((resetTime.getTime() - Date.now()) / 1000))
      : 900;
    res
      .status(429)
      .json({ error: "Too many attempts", retryAfterSeconds });
  },
});

const verifySchema = z.object({
  challengeId: z.string().min(1),
  answers: z.record(z.string(), z.string().max(200)),
});
const swapSchema = z.object({ questionId: z.string().min(1) });

router.post("/auth/questions/challenge", async (_req, res) => {
  try {
    res.status(200).json(await createChallenge());
  } catch (error) {
    sendRouteError(res, error, "Failed to start sign-in");
  }
});

router.post("/auth/questions/challenge/:id/swap", async (req, res) => {
  const body = swapSchema.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid body" });
    return;
  }
  try {
    res
      .status(200)
      .json(await swapChallengeQuestion(req.params.id, body.data.questionId));
  } catch (error) {
    sendRouteError(res, error, "Failed to swap question");
  }
});

router.post("/auth/questions/verify", failedVerifyLimit, async (req, res) => {
  const body = verifySchema.safeParse(req.body);
  if (!body.success) {
    res.status(400).json({ error: "Invalid body" });
    return;
  }
  try {
    const result = await verifyAnswers(body.data.challengeId, body.data.answers);
    if (!result.complete) {
      // 401 counts toward the lockout only when something was actually wrong.
      res.status(result.wrong.length > 0 ? 401 : 200).json({
        ok: false,
        wrong: result.wrong,
        challenge: result.view,
      });
      return;
    }
    const token = await createSession({
      method: "QUESTIONS",
      userAgent: req.headers["user-agent"],
    });
    setSessionCookie(res, token, "QUESTIONS");
    res.status(200).json({ ok: true });
  } catch (error) {
    sendRouteError(res, error, "Failed to verify answers");
  }
});

export default router;
