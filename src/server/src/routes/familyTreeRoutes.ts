import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";
import { Member as MemberType, MemberStatus } from "../types/index.js";
import {
  transformMembersToTree,
  transformMemberPhoneNumbers,
} from "../utils/index.js";
import type { MemberWithPhoneNumberRecords } from "../utils/index.js";

const router = Router();

// Flat, ordered list: each member once, mentors before their mentees. The
// client rebuilds the tree from `mentorId` and the order of the list.
router.get("/family-tree", async (_req, res) => {
  try {
    const rawMembers = await prisma.member.findMany({
      where: {
        NOT: {
          AND: [
            { status: MemberStatus.ALUMNI },
            { mentees: { none: {} } },
            { mentorId: null },
            // Alumni who hold positions still belong in team view.
            { positions: { none: {} } },
          ],
        },
      },
      include: {
        phoneNumbers: true,
        positions: {
          include: {
            role: true,
            team: { include: { teamType: true } },
          },
        },
      },
    });

    const members = rawMembers.map((m) =>
      transformMemberPhoneNumbers(m as MemberWithPhoneNumberRecords),
    ) as MemberType[];

    res.status(200).json(transformMembersToTree(members));
  } catch (error) {
    console.error("Failed to fetch family tree:", error);
    res.status(500).json({ error: "Failed to fetch family tree" });
  }
});

export default router;
