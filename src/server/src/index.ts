import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import multer from "multer";
import familyTreeRoutes from "./routes/familyTreeRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import teamTypeRoutes from "./routes/teamTypeRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import questionRoutes from "./routes/auth/questionRoutes.js";
import emailRoutes from "./routes/auth/emailRoutes.js";
import googleRoutes from "./routes/auth/googleRoutes.js";
import sessionRoutes from "./routes/auth/sessionRoutes.js";
import { requireSession } from "./middleware/requireSession.js";
import { requireEditorForWrites } from "./middleware/requireAccess.js";
import { checkOrigin } from "./middleware/checkOrigin.js";
import { isDemoMode } from "./auth/config.js";
import { trackWrites } from "./utils/readCache.js";
import { HttpError } from "./utils/httpErrors.js";
import { assertConfig } from "./auth/checkConfig.js";

assertConfig();

const app = express();

const PORT = Number(process.env.PORT) || 3001;
// 0.0.0.0 keeps docker-compose dev working; production binds 127.0.0.1 so only
// the Next rewrite in the same container can reach Express.
const HOST = process.env.HOST || "0.0.0.0";

// Hops between the internet and Express whose X-Forwarded-For we trust: the
// Next rewrite is one; a platform load balancer in front of Next makes two.
// Express must not be reachable directly, or clients could forge their IP.
app.set("trust proxy", Number(process.env.TRUST_PROXY_HOPS ?? 1));
app.use(
  helmet({
    // Photos are public Cloudinary URLs; the API only serves JSON.
    crossOriginResourcePolicy: { policy: "same-site" },
  }),
);
app.use((_req, res, next) => {
  res.set("X-Robots-Tag", "noindex");
  next();
});
// The browser talks to one origin (Next rewrite); CORS stays off unless asked.
app.use(
  cors({ origin: process.env.CLIENT_ORIGIN ?? false, credentials: true }),
);
app.use(compression());
app.use(express.json());
// Health check for the host's pings: no session and no database access, so
// pings let a serverless database suspend.
app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});
app.use("/api", checkOrigin);
// Auth routes come first: sign-in must not invalidate the read cache.
app.use("/api", sessionRoutes);
app.use("/api", questionRoutes);
app.use("/api", emailRoutes);
app.use("/api", googleRoutes);

app.use("/api", requireSession);
// Demo mode: sessions are synthetic and the database stays read-only.
app.use("/api", (req, res, next) => {
  if (isDemoMode() && req.method !== "GET" && req.method !== "HEAD") {
    res.status(403).json({ error: "У демо зміни не зберігаються" });
    return;
  }
  next();
});
app.use("/api", requireEditorForWrites);
app.use(trackWrites);
app.use("/api", familyTreeRoutes);
app.use("/api", memberRoutes);
app.use("/api", mentorRoutes);
app.use("/api", teamTypeRoutes);
app.use("/api", roleRoutes);
app.use("/api", teamRoutes);

// Upload rejections (file too big / not an image) are the client's fault.
app.use(
  (
    error: unknown,
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    if (error instanceof HttpError) {
      res.status(error.status).json({ error: error.message });
    } else if (error instanceof multer.MulterError) {
      res.status(400).json({ error: error.message });
    } else {
      next(error);
    }
  },
);

app.listen(PORT, HOST, () => {
  console.log(`Running on ${HOST}:${PORT}`);
});
