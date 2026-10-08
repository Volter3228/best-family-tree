import "dotenv/config";
import express from "express";
import cors from "cors";
import familyTreeRoutes from "./routes/familyTreeRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import teamTypeRoutes from "./routes/teamTypeRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
// JSON bodies (roles, team rosters); multipart forms are parsed per route.
app.use(express.json());
app.use("/api", familyTreeRoutes);
app.use("/api", memberRoutes);
app.use("/api", mentorRoutes);
app.use("/api", teamTypeRoutes);
app.use("/api", roleRoutes);
app.use("/api", teamRoutes);

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
