import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";

const router = Router();

router.get("/roles", async (_req, res) => {
  try {
    const roles = await prisma.role.findMany({
      orderBy: { name: "asc" },
    });
    res.status(200).json(roles);
  } catch (error) {
    console.error("Failed to fetch roles:", error);
    res.status(500).json({ error: "Failed to fetch roles" });
  }
});

router.post("/roles", async (req, res) => {
  try {
    const { name, isLeaderPosition, description } = req.body;

    if (!name) {
      res.status(400).json({ error: "Name is required" });
      return;
    }

    const existing = await prisma.role.findUnique({
      where: { name },
    });

    if (existing) {
      res.status(200).json(existing);
      return;
    }

    const role = await prisma.role.create({
      data: {
        name,
        isLeaderPosition: isLeaderPosition === true,
        description: description || null,
      },
    });

    res.status(201).json(role);
  } catch (error) {
    console.error("Failed to create role:", error);
    res.status(500).json({ error: "Failed to create role" });
  }
});

export default router;
