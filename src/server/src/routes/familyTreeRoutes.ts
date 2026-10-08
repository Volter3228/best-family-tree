import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";
import { Member as MemberType, MemberStatus } from "../types/index.js";
import {
  transformMembersToTree,
  transformMemberPhoneNumbers,
} from "../utils/index.js";
import type { MemberWithPhoneNumberRecords } from "../utils/index.js";

const router = Router();

router.get("/family-tree", async (_req, res) => {
  try {
    const rawMembers = await prisma.member.findMany({
      where: {
        AND: [
          {
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
        ],
      },
      include: {
        mentees: {
          include: {
            phoneNumbers: true,
            positions: {
              include: {
                role: true,
                team: { include: { teamType: true } },
              },
            },
          },
        },
        mentor: {
          include: {
            phoneNumbers: true,
            positions: {
              include: {
                role: true,
                team: { include: { teamType: true } },
              },
            },
          },
        },
        phoneNumbers: true,
        positions: {
          include: {
            role: true,
            team: { include: { teamType: true } },
          },
        },
      },
    });

    const members = (rawMembers || []).map((m) =>
      transformMemberPhoneNumbers(m as MemberWithPhoneNumberRecords),
    ) as MemberType[];

    const familyTree = transformMembersToTree(members);

    res.status(200).json(familyTree);
  } catch (error) {
    console.error("Failed to fetch family tree:", error);
    res.status(500).json({ error: "Failed to fetch family tree" });
  }
});

export default router;
