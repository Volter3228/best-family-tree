import "dotenv/config";
import express from "express";
import prisma from "./db/prisma/clientInstance";
import { transformMembersToTree } from "./utils";

const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api/family-tree", async (req, res) => {
  try {
    const members = await prisma.member.findMany();
    const familyTree = transformMembersToTree(members);

    res.json(familyTree);
  } catch {
    res.status(500);
  }
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
