import { Router, type Response } from "express";
import prisma from "../db/prisma/clientInstance.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";
import { deleteCloudinaryImage } from "../libs/cloudinary.js";
import {
  parseWith,
  teamTypeBodySchema,
  teamTypeUpdateSchema,
} from "../utils/catalogValidation.js";
import { sendRouteError } from "../utils/httpErrors.js";
import { sameName } from "../utils/names.js";

const router = Router();
const uploadTeamTypeIcon = uploadMiddleware("best-family-tree/team-types");

// The icon is uploaded before the body is validated; drop it on rejection.
const rejectUpload = async (
  res: Response,
  status: number,
  error: string,
  uploadedPath?: string,
) => {
  if (uploadedPath) await deleteCloudinaryImage(uploadedPath);
  res.status(status).json({ error });
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
      await rejectUpload(res, 400, body.errors, req.file?.path);
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
    const body = parseWith(teamTypeUpdateSchema, req.body);
    if (!body.success) {
      await rejectUpload(res, 400, body.errors, req.file?.path);
      return;
    }

    try {
      const { id } = req.params;
      const { name, description, color, isEvent } = body.data;

      const existing = await prisma.teamType.findUnique({ where: { id } });
      if (!existing) {
        await rejectUpload(res, 404, "Team type not found", req.file?.path);
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
            req.file?.path,
          );
          return;
        }
      }

      let iconUrl = existing.iconUrl;
      if (req.file?.path) {
        iconUrl = req.file.path;
        if (existing.iconUrl) {
          await deleteCloudinaryImage(existing.iconUrl);
        }
      } else if (req.body.icon === "") {
        iconUrl = null;
        if (existing.iconUrl) {
          await deleteCloudinaryImage(existing.iconUrl);
        }
      }

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

      res.status(200).json(updated);
    } catch (error) {
      sendRouteError(res, error, "Failed to update team type");
    }
  },
);

router.delete("/team-types/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const teamsCount = await prisma.team.count({
      where: { teamTypeId: id },
    });

    if (teamsCount > 0) {
      res.status(409).json({
        error: "Cannot delete team type: teams are still referencing it",
      });
      return;
    }

    const teamType = await prisma.teamType.findUnique({ where: { id } });
    if (!teamType) {
      res.status(404).json({ error: "Team type not found" });
      return;
    }

    if (teamType.iconUrl) {
      await deleteCloudinaryImage(teamType.iconUrl);
    }

    await prisma.teamType.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    sendRouteError(res, error, "Failed to delete team type");
  }
});

export default router;
