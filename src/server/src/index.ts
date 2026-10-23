import "dotenv/config";
import express from "express";
import cors from "cors";
import compression from "compression";
import multer from "multer";
import familyTreeRoutes from "./routes/familyTreeRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import teamTypeRoutes from "./routes/teamTypeRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import { trackWrites } from "./utils/readCache.js";
import { HttpError } from "./utils/httpErrors.js";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(compression());
app.use(trackWrites);
// JSON bodies (roles, team rosters); multipart forms are parsed per route.
app.use(express.json());
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

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
