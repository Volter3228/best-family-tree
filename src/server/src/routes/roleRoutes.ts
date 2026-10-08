import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";
import { parseWith, roleBodySchema } from "../utils/catalogValidation.js";
import { sendRouteError } from "../utils/httpErrors.js";
import { sameName } from "../utils/names.js";

const router = Router();

router.get("/roles", async (_req, res) => {
  try {
    const roles = await prisma.role.findMany({
      orderBy: { name: "asc" },
    });
    res.status(200).json(roles);
  } catch (error) {
    sendRouteError(res, error, "Failed to fetch roles");
  }
});

router.post("/roles", async (req, res) => {
  const body = parseWith(roleBodySchema, req.body);
  if (!body.success) {
    res.status(400).json({ error: body.errors });
    return;
  }

  try {
    const { name, isLeaderPosition, description } = body.data;

    const existing = await prisma.role.findFirst({
      where: { name: sameName(name) },
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
    sendRouteError(res, error, "Failed to create role");
  }
});

export default router;
