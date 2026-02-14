import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";
import { deleteCloudinaryImage } from "../libs/cloudinary.js";
import {
  transformMemberPhoneNumbers,
  validateMemberBody,
  normalizeSocialLinks,
} from "../utils/index.js";
import type { MemberWithPhoneNumberRecords } from "../utils/index.js";

const router = Router();
const uploadMemberPhoto = uploadMiddleware("best-family-tree/members");

const MEMBER_INCLUDE = {
  mentees: { include: { phoneNumbers: true as const } },
  mentor: { include: { phoneNumbers: true as const } },
  phoneNumbers: true as const,
};

router.get("/member/:id", async (req, res) => {
  try {
    const member = await prisma.member.findUnique({
      where: { id: req.params.id },
      include: MEMBER_INCLUDE,
    });

    if (!member) {
      res.status(404).json({ error: "Member not found" });
      return;
    }

    const transformed = transformMemberPhoneNumbers(
      member as MemberWithPhoneNumberRecords,
    );
    res.status(200).json(transformed);
  } catch (error) {
    console.error("Failed to fetch member:", error);
    res.status(500).json({ error: "Failed to fetch member" });
  }
});

router.post(
  "/add-member",
  uploadMemberPhoto.single("photo"),
  async (req, res) => {
    const validation = validateMemberBody(req.body);
    if (!validation.success) {
      res.status(400).json({ error: validation.errors });
      return;
    }

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
    } = validation.data;

    try {
      const photoUrl = req.file?.path || null;
      const phoneNumbers: string[] = JSON.parse(validation.data.phoneNumbers);
      const normalizedLinks = normalizeSocialLinks({
        telegramLink,
        instagramLink,
        facebookLink,
        linkedinLink,
      });

      const newMember = await prisma.$transaction(async (tx) => {
        const member = await tx.member.create({
          data: {
            name: `${firstName} ${lastName}`,
            birthday: new Date(birthday),
            email: email || null,
            status,
            joinedAt: new Date(joinedAt),
            photo: photoUrl,
            mentorId,
            ...normalizedLinks,
          },
        });

        if (phoneNumbers.length) {
          await tx.phoneNumber.createMany({
            data: phoneNumbers.map((phoneNumber) => ({
              phoneNumber,
              ownerId: member.id,
            })),
          });
        }

        return tx.member.findUniqueOrThrow({
          where: { id: member.id },
          include: MEMBER_INCLUDE,
        });
      });

      const transformed = transformMemberPhoneNumbers(
        newMember as MemberWithPhoneNumberRecords,
      );
      res.status(201).json(transformed);
    } catch (error) {
      console.error("Failed to create member:", error);
      res.status(500).json({ error: "Failed to create member" });
    }
  },
);

router.put(
  "/members/:id",
  uploadMemberPhoto.single("photo"),
  async (req, res) => {
    const { id } = req.params;

    const validation = validateMemberBody(req.body);
    if (!validation.success) {
      res.status(400).json({ error: validation.errors });
      return;
    }

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
    } = validation.data;

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
      } else if (req.body.photo === "") {
        photoUrl = null;
        if (oldPhotoUrl) {
          await deleteCloudinaryImage(oldPhotoUrl);
        }
      }

      const phoneNumbers: string[] = JSON.parse(validation.data.phoneNumbers);
      const normalizedLinks = normalizeSocialLinks({
        telegramLink,
        instagramLink,
        facebookLink,
        linkedinLink,
      });

      const updatedMember = await prisma.$transaction(async (tx) => {
        await tx.member.update({
          where: { id },
          data: {
            name: `${firstName} ${lastName}`,
            birthday: new Date(birthday),
            email: email || null,
            status,
            joinedAt: new Date(joinedAt),
            photo: photoUrl,
            mentorId,
            ...normalizedLinks,
          },
        });

        await tx.phoneNumber.deleteMany({ where: { ownerId: id } });

        if (phoneNumbers.length) {
          await tx.phoneNumber.createMany({
            data: phoneNumbers.map((phoneNumber) => ({
              phoneNumber,
              ownerId: id,
            })),
          });
        }

        return tx.member.findUniqueOrThrow({
          where: { id },
          include: MEMBER_INCLUDE,
        });
      });

      const transformed = transformMemberPhoneNumbers(
        updatedMember as MemberWithPhoneNumberRecords,
      );
      res.status(200).json(transformed);
    } catch (error) {
      console.error("Failed to update member:", error);
      res.status(500).json({ error: "Failed to update member" });
    }
  },
);

export default router;
