import "dotenv/config";
import express from "express";

import prisma from "./db/prisma/clientInstance";
import { Member, Prisma } from "@prisma/client";

import { isMentorStatus } from "./utils";

const app = express();

const PORT = process.env.PORT || 3001;

type MemberWithMentees = Prisma.MemberGetPayload<{
  include: { mentees: true };
}>;

app.get("/api/family-tree", async (req, res) => {
  const members = await prisma.member.findMany();
  const getTree = (
    members: (Member | MemberWithMentees)[],
    mentorId: string | null = null,
  ) => {
    return members
      .filter(
        (member) =>
          member.mentorId === mentorId && isMentorStatus(member.status),
      )
      .map(
        (member): MemberWithMentees => ({
          ...member,
          mentees: getTree(members, member.id), // Recursively find mentees
        }),
      );
  };

  // Create the hierarchy starting from the root members (mentorId = null)
  const familyTree = getTree(members);

  res.json(familyTree);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
