import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";
import { deleteCloudinaryImage } from "../libs/cloudinary.js";
import { validateMemberBody } from "../utils/index.js";
import { sendRouteError } from "../utils/httpErrors.js";
import {
  parsePhoneNumbers,
  parsePositionsPayload,
} from "./member/memberPayload.js";
import { MEMBER_INCLUDE, serializeMember } from "./member/memberQueries.js";
import {
  createMember,
  deleteMember,
  updateMember,
} from "./member/memberService.js";

const router = Router();
const uploadMemberPhoto = uploadMiddleware("best-family-tree/members");

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

    res.status(200).json(serializeMember(member));
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

    let phoneNumbers: string[];
    let positions;
    try {
      phoneNumbers = parsePhoneNumbers(validation.data.phoneNumbers);
      positions = parsePositionsPayload(req.body.positions) ?? [];
    } catch (error) {
      sendRouteError(res, error, "Invalid phoneNumbers or positions payload");
      return;
    }

    try {
      const photoUrl = req.file?.path || null;
      const newMember = await createMember(
        validation.data,
        phoneNumbers,
        positions,
        photoUrl,
      );
      res.status(201).json(serializeMember(newMember));
    } catch (error) {
      sendRouteError(res, error, "Failed to create member");
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

    try {
      const existingMember = await prisma.member.findUnique({
        where: { id },
        include: { phoneNumbers: true },
      });

      if (!existingMember) {
        res.status(404).json({ error: "Member not found" });
        return;
      }

      // Validate the payload before touching the stored photo.
      let phoneNumbers: string[];
      let positions;
      try {
        phoneNumbers = parsePhoneNumbers(validation.data.phoneNumbers);
        positions = parsePositionsPayload(req.body.positions);
      } catch (error) {
        sendRouteError(res, error, "Invalid phoneNumbers or positions payload");
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

      const updatedMember = await updateMember(
        id,
        validation.data,
        phoneNumbers,
        positions,
        photoUrl,
      );
      res.status(200).json(serializeMember(updatedMember));
    } catch (error) {
      sendRouteError(res, error, "Failed to update member");
    }
  },
);

router.delete("/members/:id", async (req, res) => {
  try {
    const photoUrl = await deleteMember(req.params.id);
    if (photoUrl) await deleteCloudinaryImage(photoUrl);
    res.status(204).send();
  } catch (error) {
    sendRouteError(res, error, "Failed to delete member");
  }
});

export default router;
