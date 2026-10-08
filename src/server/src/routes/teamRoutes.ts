import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";
import { deleteCloudinaryImage } from "../libs/cloudinary.js";
import {
  parseWith,
  teamBodySchema,
  teamMembersSchema,
} from "../utils/catalogValidation.js";
import { sendRouteError } from "../utils/httpErrors.js";
import {
  TEAM_INCLUDE,
  createTeam,
  deleteTeam,
  getTeamDetails,
  syncTeamMembers,
  updateTeam,
} from "./team/teamService.js";

const router = Router();
const uploadTeamIcon = uploadMiddleware("best-family-tree/teams");

router.get("/teams", async (req, res) => {
  try {
    const { teamTypeId } = req.query;
    const teams = await prisma.team.findMany({
      where: teamTypeId ? { teamTypeId: String(teamTypeId) } : {},
      include: TEAM_INCLUDE,
      orderBy: { name: "asc" },
    });
    res.status(200).json(teams);
  } catch (error) {
    sendRouteError(res, error, "Failed to fetch teams");
  }
});

router.get("/teams/:id", async (req, res) => {
  try {
    res.status(200).json(await getTeamDetails(req.params.id));
  } catch (error) {
    sendRouteError(res, error, "Failed to fetch team");
  }
});

router.post("/teams", uploadTeamIcon.single("icon"), async (req, res) => {
  const iconUrl = req.file?.path ?? null;
  const body = parseWith(teamBodySchema, req.body);

  try {
    if (!body.success) {
      res.status(400).json({ error: body.errors });
      if (iconUrl) await deleteCloudinaryImage(iconUrl);
      return;
    }
    res.status(201).json(await createTeam(body.data, iconUrl));
  } catch (error) {
    if (iconUrl) await deleteCloudinaryImage(iconUrl);
    sendRouteError(res, error, "Failed to create team");
  }
});

router.put("/teams/:id", uploadTeamIcon.single("icon"), async (req, res) => {
  const uploadedUrl = req.file?.path;
  const body = parseWith(teamBodySchema, req.body);

  try {
    if (!body.success) {
      res.status(400).json({ error: body.errors });
      if (uploadedUrl) await deleteCloudinaryImage(uploadedUrl);
      return;
    }

    // A new file replaces the logo, an empty "icon" field removes it.
    const icon = uploadedUrl ?? (req.body.icon === "" ? null : undefined);
    const { team, unusedIconUrl } = await updateTeam(
      req.params.id,
      body.data,
      icon,
    );
    if (unusedIconUrl) await deleteCloudinaryImage(unusedIconUrl);
    res.status(200).json(team);
  } catch (error) {
    if (uploadedUrl) await deleteCloudinaryImage(uploadedUrl);
    sendRouteError(res, error, "Failed to update team");
  }
});

router.delete("/teams/:id", async (req, res) => {
  try {
    const team = await deleteTeam(req.params.id);
    if (team.iconUrl) await deleteCloudinaryImage(team.iconUrl);
    res.status(204).send();
  } catch (error) {
    sendRouteError(res, error, "Failed to delete team");
  }
});

router.put("/teams/:id/members", async (req, res) => {
  const body = parseWith(teamMembersSchema, req.body);
  if (!body.success) {
    res.status(400).json({ error: body.errors });
    return;
  }

  try {
    await syncTeamMembers(req.params.id, body.data);
    res.status(200).json(await getTeamDetails(req.params.id));
  } catch (error) {
    sendRouteError(res, error, "Failed to update team members");
  }
});

export default router;
