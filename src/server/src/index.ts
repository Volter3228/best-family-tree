import "dotenv/config";
import express from "express";
import prisma from "./db/prisma/clientInstance";
import uploadMiddleware from "./middleware/uploadMiddleware";
import { Member as MemberType, MemberStatus } from "./types";
import { transformMembersToTree } from "./utils";

const app = express();
const PORT = process.env.PORT || 3001;

const uploadMemberPhoto = uploadMiddleware("best-family-tree/members");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api/family-tree", async (req, res) => {
  try {
    const members = (await prisma.member.findMany({
      include: {
        mentees: true,
        mentor: true,
      },
    })) as MemberType[];
    const familyTree = transformMembersToTree(members);

    res.status(200).json(familyTree);
  } catch {
    res.status(500);
  }
});

app.get("/api/member/:id", async (req, res) => {
  try {
    const memberId = req.params.id;
    const member = (await prisma.member.findFirst({
      where: { id: { equals: memberId } },
      include: { mentees: true, mentor: true },
    })) as MemberType;

    res.status(200).json(member);
  } catch {
    res.status(500);
  }
});

app.get("/api/mentors-list", async (req, res) => {
  try {
    const mentors = await prisma.member.findMany({
      where: {
        status: {
          in: [MemberStatus.ALUMNI, MemberStatus.FULL],
        },
      },
      include: {
        mentees: true, // Optional: to include mentees in the result
      },
    });

    const mentorsData = mentors.map(({ id, name }) => ({ id, name }));

    res.status(200).json(mentorsData);
  } catch {
    res.status(500);
  }
});

app.post(
  "/api/add-member",
  uploadMemberPhoto.single("photo"),
  async (req, res) => {
    const {
      firstName,
      lastName,
      birthday,
      joinedAt,
      mentorId,
      status,
      phoneNumber,
      email,
      telegramLink,
      instagramLink,
      facebookLink,
      linkedinLink,
    } = req.body;

    try {
      const photoUrl = req.file?.path || null;

      const newMember = await prisma.member.create({
        data: {
          name: `${firstName} ${lastName}`,
          birthday: new Date(birthday),
          email,
          phoneNumber,
          status,
          joinedAt, // Ensure this is passed in the correct format
          photo: photoUrl,
          mentorId,
          telegramLink: telegramLink || null,
          instagramLink: instagramLink || null,
          facebookLink: facebookLink || null,
          linkedinLink: linkedinLink || null,
        },
        include: {
          mentees: true, // Optional: to include mentees in the result
        },
      });
      res.status(201).json(newMember);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create member" });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
