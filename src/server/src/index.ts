import "dotenv/config";
import express from "express";
import prisma from "./db/prisma/clientInstance.js";
import uploadMiddleware from "./middleware/uploadMiddleware.js";
import { Member as MemberType, MemberStatus } from "./types/index.js";
import { deleteCloudinaryImage } from "./libs/cloudinary.js";
import {
  transformMembersToTree,
  transformMemberPhoneNumbers,
} from "./utils/index.js";

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
    const members = (
      (await prisma.member.findMany({
        where: {
          AND: [
            // { activityState: ActivityState.ACTIVE },
            {
              NOT: {
                AND: [
                  { status: MemberStatus.ALUMNI },
                  { mentees: { none: {} } },
                  { mentorId: null },
                ],
              },
            },
          ],
        },
        include: {
          mentees: {
            include: {
              phoneNumbers: true,
            },
          },
          mentor: {
            include: {
              phoneNumbers: true,
            },
          },
          phoneNumbers: true,
        },
      })) || []
    ).map(transformMemberPhoneNumbers) as MemberType[];

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

app.get("/api/mentors-list", async (_req, res) => {
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
      email,
      telegramLink,
      instagramLink,
      facebookLink,
      linkedinLink,
    } = req.body;

    try {
      const photoUrl = req.file?.path || null;
      const phoneNumbers = JSON.parse(req.body.phoneNumbers);

      const { id: newMemberId } = await prisma.member.create({
        data: {
          name: `${firstName} ${lastName}`,
          birthday: new Date(birthday),
          email,
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
          mentees: true,
          mentor: true,
          phoneNumbers: true,
        },
      });

      for (const phoneNumber of phoneNumbers) {
        await prisma.phoneNumber.create({
          data: {
            phoneNumber,
            ownerId: newMemberId,
          },
        });
      }

      const newMember = await prisma.member.findFirst({
        where: { id: { equals: newMemberId } },
        include: { mentees: true, mentor: true, phoneNumbers: true },
      });

      res.status(201).json(newMember);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create member" });
    }
  },
);

app.put(
  "/api/members/:id",
  uploadMemberPhoto.single("photo"),
  async (req, res) => {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      birthday,
      joinedAt,
      mentorId,
      status,
      email,
      telegramLink,
      instagramLink,
      facebookLink,
      linkedinLink,
      photo,
    } = req.body;

    try {
      const existingMember = await prisma.member.findUnique({
        where: { id },
        include: { phoneNumbers: true },
      });

      if (!existingMember) {
        res.status(404).json({ error: "Member not found" });
        return;
      }

      let photoUrl = existingMember.photo;
      const oldPhotoUrl = existingMember.photo;

      if (req.file?.path) {
        photoUrl = req.file.path;
        if (oldPhotoUrl) {
          await deleteCloudinaryImage(oldPhotoUrl);
        }
      } else if (photo === "") {
        photoUrl = null;
        if (oldPhotoUrl) {
          await deleteCloudinaryImage(oldPhotoUrl);
        }
      }

      const phoneNumbers = JSON.parse(req.body.phoneNumbers || "[]");

      await prisma.member.update({
        where: { id },
        data: {
          name: `${firstName} ${lastName}`,
          birthday: new Date(birthday),
          email,
          status,
          joinedAt: new Date(joinedAt),
          photo: photoUrl,
          mentorId,
          telegramLink: telegramLink || null,
          instagramLink: instagramLink || null,
          facebookLink: facebookLink || null,
          linkedinLink: linkedinLink || null,
        },
      });

      await prisma.phoneNumber.deleteMany({
        where: { ownerId: id },
      });

      for (const phoneNumber of phoneNumbers) {
        await prisma.phoneNumber.create({
          data: {
            phoneNumber,
            ownerId: id,
          },
        });
      }

      const updatedMember = await prisma.member.findFirst({
        where: { id: { equals: id } },
        include: {
          mentees: {
            include: { phoneNumbers: true },
          },
          mentor: {
            include: { phoneNumbers: true },
          },
          phoneNumbers: true,
        },
      });

      if (!updatedMember) {
        res.status(404).json({ error: "Member not found after update" });
        return;
      }

      const transformedMember = transformMemberPhoneNumbers(updatedMember);
      res.status(200).json(transformedMember);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update member" });
    }
  },
);

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
