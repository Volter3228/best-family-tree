import { Router } from "express";
import type { RequestHandler } from "express";
import { z } from "zod";
import prisma from "../db/prisma/clientInstance.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";
import { canSelfServe } from "../auth/access.js";
import {
  deleteCloudinaryImage,
  deleteReplacedImage,
  discardUpload,
} from "../libs/cloudinary.js";
import {
  ForbiddenError,
  ValidationError,
  sendRouteError,
} from "../utils/httpErrors.js";
import { parseWith } from "../utils/catalogValidation.js";

const router = Router();

const selfServeGuard: RequestHandler = (req, res, next) => {
  if (!canSelfServe(req.session!)) {
    sendRouteError(
      res,
      new ForbiddenError("Sign in with a personal account to do this", {
        code: "self_service_only",
      }),
      "Not allowed",
    );
    return;
  }
  next();
};

const holdsPositionIn = async (memberId: string, teamId: string) =>
  (await prisma.memberPosition.count({ where: { memberId, teamId } })) > 0;

// Guards run before the upload: a stable Cloudinary id overwrites the asset.
const teamMemberGuard: RequestHandler = async (req, res, next) => {
  try {
    if (
      !(await holdsPositionIn(req.session!.memberId!, req.params.id as string))
    ) {
      throw new ForbiddenError("Only team members can change the team photo", {
        code: "not_team_member",
      });
    }
    next();
  } catch (error) {
    sendRouteError(res, error, "Failed to update team photo");
  }
};

const ownPhoto = uploadMiddleware("best-family-tree/members", {
  namePrefix: (req) => `member-${req.session?.memberId}`,
});
const teamPhoto = uploadMiddleware("best-family-tree/teams", {
  namePrefix: (req) => `team-${req.params.id}`,
});

router.put(
  "/me/photo",
  selfServeGuard,
  ownPhoto.single("photo"),
  async (req, res) => {
    const uploaded = req.file?.path;
    const memberId = req.session!.memberId!;
    let stored: string | null = null;
    try {
      if (!uploaded) {
        throw new ValidationError("Photo is required", {
          code: "photo_required",
        });
      }
      const member = await prisma.member.findUnique({
        where: { id: memberId },
        select: { photo: true },
      });
      stored = member?.photo ?? null;
      await prisma.member.update({
        where: { id: memberId },
        data: { photo: uploaded },
      });
      await deleteReplacedImage(stored, uploaded);
      res.status(200).json({ photo: uploaded });
    } catch (error) {
      await discardUpload(uploaded, stored);
      sendRouteError(res, error, "Failed to update photo");
    }
  },
);

// Privacy exception to the completeness rule: only the owner removes a photo.
router.delete("/me/photo", selfServeGuard, async (req, res) => {
  try {
    const memberId = req.session!.memberId!;
    const member = await prisma.member.findUnique({
      where: { id: memberId },
      select: { photo: true },
    });
    await prisma.member.update({
      where: { id: memberId },
      data: { photo: null },
    });
    if (member?.photo) await deleteCloudinaryImage(member.photo);
    res.status(204).send();
  } catch (error) {
    sendRouteError(res, error, "Failed to remove photo");
  }
});

router.put("/me/featured-position", selfServeGuard, async (req, res) => {
  const body = parseWith(
    z.object({ positionId: z.string().min(1).nullable() }),
    req.body,
  );
  try {
    if (!body.success) throw new ValidationError(body.errors);
    const memberId = req.session!.memberId!;
    const { positionId } = body.data;
    if (positionId) {
      const own = await prisma.memberPosition.count({
        where: { id: positionId, memberId },
      });
      if (!own) {
        throw new ValidationError("This is not your position", {
          code: "not_your_position",
        });
      }
    }
    await prisma.member.update({
      where: { id: memberId },
      data: { featuredPositionId: positionId },
    });
    res.status(204).send();
  } catch (error) {
    sendRouteError(res, error, "Failed to update featured position");
  }
});

router.put("/me/name-badge", selfServeGuard, async (req, res) => {
  const body = parseWith(
    z.object({
      teamId: z.string().min(1).nullable().optional(),
      icon: z.enum(["LION", "BEST"]).nullable().optional(),
    }),
    req.body,
  );
  try {
    if (!body.success) throw new ValidationError(body.errors);
    const memberId = req.session!.memberId!;
    // At most one of the two is stored; neither clears the badge.
    const teamId = body.data.icon ? null : (body.data.teamId ?? null);
    const nameBadgeIcon = body.data.icon ?? null;
    if (teamId && !(await holdsPositionIn(memberId, teamId))) {
      throw new ValidationError("You are not a member of this team", {
        code: "not_team_member",
      });
    }
    await prisma.member.update({
      where: { id: memberId },
      data: { nameBadgeTeamId: teamId, nameBadgeIcon },
    });
    res.status(204).send();
  } catch (error) {
    sendRouteError(res, error, "Failed to update name badge");
  }
});

router.put(
  "/teams/:id/photo",
  selfServeGuard,
  teamMemberGuard,
  teamPhoto.single("icon"),
  async (req, res) => {
    const uploaded = req.file?.path;
    const id = req.params.id as string;
    let stored: string | null = null;
    try {
      if (!uploaded) {
        throw new ValidationError("Photo is required", {
          code: "photo_required",
        });
      }
      const team = await prisma.team.findUnique({
        where: { id },
        select: { photoUrl: true },
      });
      stored = team?.photoUrl ?? null;
      await prisma.team.update({ where: { id }, data: { photoUrl: uploaded } });
      await deleteReplacedImage(stored, uploaded);
      res.status(200).json({ photoUrl: uploaded });
    } catch (error) {
      await discardUpload(uploaded, stored);
      sendRouteError(res, error, "Failed to update team photo");
    }
  },
);

export default router;
