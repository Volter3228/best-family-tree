import { Router, type Response } from "express";
import prisma from "../db/prisma/clientInstance.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";
import {
  deleteCloudinaryImage,
  deleteReplacedImage,
} from "../libs/cloudinary.js";
import {
  parseWith,
  teamTypeBodySchema,
  teamTypeUpdateSchema,
} from "../utils/catalogValidation.js";
import {
  ConflictError,
  NotFoundError,
  sendRouteError,
  errorBody,
} from "../utils/httpErrors.js";
import { sameName } from "../utils/names.js";

const router = Router();
const uploadTeamTypeIcon = uploadMiddleware("best-family-tree/team-types");

// The icon is uploaded before the body is validated; drop it on rejection.
const rejectUpload = async (
  res: Response,
  status: number,
  error: string,
  code: string,
  uploadedPath?: string,
) => {
  if (uploadedPath) await deleteCloudinaryImage(uploadedPath);
  res.status(status).json(errorBody(error, code));
};

router.get("/team-types", async (_req, res) => {
  try {
    const teamTypes = await prisma.teamType.findMany({
      orderBy: { name: "asc" },
      include: {
        _count: {
          select: { teams: true },
        },
      },
    });
    res.status(200).json(teamTypes);
  } catch (error) {
    sendRouteError(res, error, "Failed to fetch team types");
  }
});

router.post(
  "/team-types",
  uploadTeamTypeIcon.single("icon"),
  async (req, res) => {
    const body = parseWith(teamTypeBodySchema, req.body);
    if (!body.success) {
      await rejectUpload(res, 400, body.errors, "validation", req.file?.path);
      return;
    }

    try {
      const { name, description, color, isEvent } = body.data;

      const existing = await prisma.teamType.findFirst({
        where: { name: sameName(name) },
      });
      if (existing) {
        await rejectUpload(
          res,
          409,
          "Team type with this name already exists",
          "team_type_exists",
          req.file?.path,
        );
        return;
      }

      const teamType = await prisma.teamType.create({
        data: {
          name,
          description: description || null,
          color: color || null,
          isEvent: isEvent ?? true,
          iconUrl: req.file?.path || null,
        },
      });

      res.status(201).json(teamType);
    } catch (error) {
      if (req.file?.path) await deleteCloudinaryImage(req.file.path);
      sendRouteError(res, error, "Failed to create team type");
    }
  },
);

router.put(
  "/team-types/:id",
  uploadTeamTypeIcon.single("icon"),
  async (req, res) => {
    const uploadedIcon = req.file?.path;
    const body = parseWith(teamTypeUpdateSchema, req.body);
    if (!body.success) {
      await rejectUpload(res, 400, body.errors, "validation", uploadedIcon);
      return;
    }

    try {
      const { id } = req.params;
      const { name, description, color, isEvent } = body.data;

      const existing = await prisma.teamType.findUnique({ where: { id } });
      if (!existing) {
        await rejectUpload(
          res,
          404,
          "Team type not found",
          "team_type_not_found",
          uploadedIcon,
        );
        return;
      }

      if (name && name.toLowerCase() !== existing.name.toLowerCase()) {
        const conflict = await prisma.teamType.findFirst({
          where: { name: sameName(name), NOT: { id } },
        });
        if (conflict) {
          await rejectUpload(
            res,
            409,
            "Team type with this name already exists",
            "team_type_exists",
            uploadedIcon,
          );
          return;
        }
      }

      // A new file replaces the icon, an empty "icon" field removes it.
      let iconUrl = existing.iconUrl;
      if (uploadedIcon) iconUrl = uploadedIcon;
      else if (req.body.icon === "") iconUrl = null;

      const updated = await prisma.teamType.update({
        where: { id },
        data: {
          name: name || existing.name,
          description:
            description !== undefined ? description : existing.description,
          color:
            color === "" ? null : color !== undefined ? color : existing.color,
          isEvent: isEvent ?? existing.isEvent,
          iconUrl,
        },
      });

      // The old icon goes only once the new data is safely stored.
      await deleteReplacedImage(existing.iconUrl, iconUrl);
      res.status(200).json(updated);
    } catch (error) {
      if (uploadedIcon) await deleteCloudinaryImage(uploadedIcon);
      sendRouteError(res, error, "Failed to update team type");
    }
  },
);

router.delete("/team-types/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check and delete in one transaction, so a team added meanwhile blocks it.
    const iconUrl = await prisma.$transaction(async (tx) => {
      const teamType = await tx.teamType.findUnique({ where: { id } });
      if (!teamType)
        throw new NotFoundError("Team type not found", {
          code: "team_type_not_found",
        });

      const teamsCount = await tx.team.count({
        where: { teamTypeId: id },
      });
      if (teamsCount > 0)
        throw new ConflictError(
          "Cannot delete team type: teams are still referencing it",
          undefined,
          { code: "team_type_in_use" },
        );

      await tx.teamType.delete({ where: { id } });
      return teamType.iconUrl;
    });

    // The icon goes only after the row is gone.
    if (iconUrl) await deleteCloudinaryImage(iconUrl);
    res.status(204).send();
  } catch (error) {
    sendRouteError(res, error, "Failed to delete team type");
  }
});

export default router;
