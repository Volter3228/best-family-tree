import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";
import { MemberStatus } from "../types/index.js";

const router = Router();

router.get("/mentors-list", async (_req, res) => {
  try {
    const mentorsData = await prisma.member.findMany({
      where: {
        status: {
          in: [MemberStatus.ALUMNI, MemberStatus.FULL],
        },
      },
      select: {
        id: true,
        name: true,
      },
    });

    const mentors = mentorsData.sort((a, b) =>
      a.name.localeCompare(b.name, "uk-UA"),
    );

    res.status(200).json(mentors);
  } catch (error) {
    console.error("Failed to fetch mentors list:", error);
    res.status(500).json({ error: "Failed to fetch mentors list" });
  }
});

export default router;
