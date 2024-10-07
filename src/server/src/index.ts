import "dotenv/config";
import express from "express";
import prisma from "./db/prisma/clientInstance";

import { Member, Mentor } from "./types";
import { isMentor } from "./utils";

const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api/family-tree", async (req, res) => {
  const members = await prisma.member.findMany();
  const getTree = (
    members: (Member | Mentor)[],
    mentorId: string | null = null,
  ) => {
    return members
      .filter((member) => member.mentorId === mentorId)
      .map((member): Member | Mentor => ({
        ...member,
        ...(isMentor(member) ? { mentees: getTree(members, member.id) } : {}),
      }));
  };

  // Create the hierarchy starting from the root members (mentorId = null)
  const familyTree = getTree(members);

  res.json(familyTree);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
