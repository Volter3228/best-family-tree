import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";
import { deleteCloudinaryImage } from "../libs/cloudinary.js";
import { validateMemberBody } from "../utils/index.js";
import {
  validateMemberUpdate,
  validateSparseMemberBody,
} from "../utils/memberUpdateValidation.js";
import { sendRouteError } from "../utils/httpErrors.js";
import {
  parsePhoneNumbers,
  parsePositionsPayload,
} from "./member/memberPayload.js";
import { MEMBER_INCLUDE, serializeMember } from "./member/memberQueries.js";
import {
  assertCanEditMember,
  createMember,
  deleteMember,
  updateMember,
} from "./member/memberService.js";
import { toMemberResponse } from "../auth/reducedView.js";

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

    res.status(200).json(toMemberResponse(serializeMember(member), req.session!));
  } catch (error) {
    console.error("Failed to fetch member:", error);
    res.status(500).json({ error: "Failed to fetch member" });
  }
});

router.post(
  "/add-member",
  uploadMemberPhoto.single("photo"),
  async (req, res) => {
    // The photo is already in Cloudinary by now; drop it if the member is not saved.
    const uploadedPhoto = req.file?.path;
    const discardUpload = async () => {
      if (uploadedPhoto) await deleteCloudinaryImage(uploadedPhoto);
    };

    // Minimal records (old members with little data) opt in explicitly.
    const sparse = req.body.sparse === "true";
    const validation = sparse
      ? validateSparseMemberBody(req.body)
      : validateMemberBody(req.body);
    if (!validation.success) {
      await discardUpload();
      res.status(400).json({ error: validation.errors });
      return;
    }

    let phoneNumbers: string[];
    let positions;
    try {
      phoneNumbers = parsePhoneNumbers(validation.data.phoneNumbers);
      positions = parsePositionsPayload(req.body.positions) ?? [];
    } catch (error) {
      await discardUpload();
      sendRouteError(res, error, "Invalid phoneNumbers or positions payload");
      return;
    }

    try {
      const newMember = await createMember(
        validation.data,
        phoneNumbers,
        positions,
        uploadedPhoto || null,
        sparse,
      );
      res.status(201).json(toMemberResponse(serializeMember(newMember), req.session!));
    } catch (error) {
      await discardUpload();
      sendRouteError(res, error, "Failed to create member");
    }
  },
);

router.put(
  "/members/:id",
  uploadMemberPhoto.single("photo"),
  async (req, res) => {
    const { id } = req.params;
    const uploadedPhoto = req.file?.path;
    const discardUpload = async () => {
      if (uploadedPhoto) await deleteCloudinaryImage(uploadedPhoto);
    };
    const reject = async (status: number, error: string) => {
      await discardUpload();
      res.status(status).json({ error });
    };

    try {
      const existingMember = await prisma.member.findUnique({
        where: { id },
        include: { phoneNumbers: true },
      });

      if (!existingMember) {
        await reject(404, "Member not found");
        return;
      }

      try {
        await assertCanEditMember(req.session!, id);
      } catch (error) {
        await discardUpload();
        sendRouteError(res, error, "Failed to update member");
        return;
      }

      // Old records may lack data: only emptying a stored value is refused.
      const validation = validateMemberUpdate(req.body, {
        ...existingMember,
        phoneNumbers: existingMember.phoneNumbers.map((p) => p.phoneNumber),
      });
      if (!validation.success) {
        await reject(400, validation.errors);
        return;
      }

      // Validate the payload before touching the stored photo.
      let phoneNumbers: string[];
      let positions;
      try {
        phoneNumbers = parsePhoneNumbers(validation.data.phoneNumbers);
        positions = parsePositionsPayload(req.body.positions);
      } catch (error) {
        await discardUpload();
        sendRouteError(res, error, "Invalid phoneNumbers or positions payload");
        return;
      }

      const oldPhotoUrl = existingMember.photo;
      let photoUrl = oldPhotoUrl;
      if (uploadedPhoto) photoUrl = uploadedPhoto;
      else if (req.body.photo === "") photoUrl = null;

      let updatedMember;
      try {
        updatedMember = await updateMember(
          id,
          validation.data,
          phoneNumbers,
          positions,
          photoUrl,
        );
      } catch (error) {
        await discardUpload();
        throw error;
      }

      // The old photo goes only once the new data is safely stored.
      if (oldPhotoUrl && photoUrl !== oldPhotoUrl) {
        await deleteCloudinaryImage(oldPhotoUrl);
      }
      res.status(200).json(toMemberResponse(serializeMember(updatedMember), req.session!));
    } catch (error) {
      sendRouteError(res, error, "Failed to update member");
    }
  },
);

router.delete("/members/:id", async (req, res) => {
  try {
    await assertCanEditMember(req.session!, req.params.id);
    const photoUrl = await deleteMember(req.params.id);
    if (photoUrl) await deleteCloudinaryImage(photoUrl);
    res.status(204).send();
  } catch (error) {
    sendRouteError(res, error, "Failed to delete member");
  }
});

export default router;
