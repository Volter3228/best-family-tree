import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";
import { sendRouteError } from "../utils/httpErrors.js";

const router = Router();

router.get("/family-groups", async (_req, res) => {
  try {
    const familyGroups = await prisma.familyGroup.findMany({
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    });
    res.status(200).json(familyGroups);
  } catch (error) {
    sendRouteError(res, error, "Failed to fetch family groups");
  }
});

export default router;
