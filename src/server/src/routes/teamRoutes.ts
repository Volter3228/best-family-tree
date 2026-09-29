import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";

const router = Router();

router.get("/teams", async (req, res) => {
  try {
    const { eventTypeId } = req.query;
    const where = eventTypeId ? { eventTypeId: String(eventTypeId) } : {};
    const teams = await prisma.team.findMany({
      where,
      include: { eventType: true },
      orderBy: { name: "asc" },
    });
    res.status(200).json(teams);
  } catch (error) {
    console.error("Failed to fetch teams:", error);
    res.status(500).json({ error: "Failed to fetch teams" });
  }
});

export default router;
