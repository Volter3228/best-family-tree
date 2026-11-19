import { Router } from "express";
import { z } from "zod";
import prisma from "../db/prisma/clientInstance.js";
import { canManageGrant, isOwnGrant } from "../auth/access.js";
import { requireAccess } from "../middleware/requireAccess.js";
import { parseWith } from "../utils/catalogValidation.js";
import {
  NotFoundError,
  ValidationError,
  sendRouteError,
} from "../utils/httpErrors.js";

const router = Router();
router.use("/access", requireAccess("ADMIN"));

const ownGrantError = () =>
  new ValidationError("You can not change your own access", {
    code: "own_grant",
  });

const adminGrantLocked = () =>
  new ValidationError(
    "Another admin's access can only be changed via the CLI",
    {
      code: "admin_grant_locked",
    },
  );

const toItem = (
  member: {
    id: string;
    name: string;
    photo: string | null;
    activityState: string;
  },
  level: "EDITOR" | "ADMIN",
) => ({
  memberId: member.id,
  name: member.name,
  photo: member.photo,
  activityState: member.activityState,
  level,
});

router.get("/access/grants", async (_req, res) => {
  try {
    const grants = await prisma.accessGrant.findMany();
    const members = await prisma.member.findMany({
      where: { id: { in: grants.map((g) => g.memberId) } },
      select: { id: true, name: true, photo: true, activityState: true },
    });
    const byId = new Map(members.map((m) => [m.id, m]));
    const items = grants.flatMap((g) => {
      const member = byId.get(g.memberId);
      return member ? [toItem(member, g.level)] : [];
    });
    items.sort((a, b) => a.name.localeCompare(b.name));
    res.status(200).json(items);
  } catch (error) {
    sendRouteError(res, error, "Failed to load access grants");
  }
});

router.put("/access/grants/:memberId", async (req, res) => {
  const body = parseWith(
    z.object({ level: z.enum(["EDITOR", "ADMIN"]) }),
    req.body,
  );
  try {
    const memberId = req.params.memberId as string;
    if (isOwnGrant(req.session!, memberId)) throw ownGrantError();
    if (!body.success) throw new ValidationError(body.errors);
    if (body.data.level === "ADMIN") {
      throw new ValidationError("Admins can only be added via the CLI", {
        code: "admin_cli_only",
      });
    }

    const member = await prisma.member.findUnique({
      where: { id: memberId },
      select: { id: true, name: true, photo: true, activityState: true },
    });
    if (!member)
      throw new NotFoundError("Member not found", { code: "member_not_found" });
    if (member.activityState === "EXCLUDED") {
      throw new ValidationError("An excluded member can not get access", {
        code: "member_excluded",
      });
    }
    const current = await prisma.accessGrant.findUnique({
      where: { memberId },
    });
    if (!canManageGrant(req.session!, current?.level ?? null)) {
      throw adminGrantLocked();
    }
    const grant = await prisma.accessGrant.upsert({
      where: { memberId },
      create: { memberId, level: body.data.level },
      update: { level: body.data.level },
    });
    res.status(200).json(toItem(member, grant.level));
  } catch (error) {
    sendRouteError(res, error, "Failed to save access grant");
  }
});

router.delete("/access/grants/:memberId", async (req, res) => {
  try {
    const memberId = req.params.memberId as string;
    if (isOwnGrant(req.session!, memberId)) throw ownGrantError();
    const current = await prisma.accessGrant.findUnique({
      where: { memberId },
    });
    if (!canManageGrant(req.session!, current?.level ?? null)) {
      throw adminGrantLocked();
    }
    await prisma.accessGrant.deleteMany({ where: { memberId } });
    res.status(204).send();
  } catch (error) {
    sendRouteError(res, error, "Failed to remove access grant");
  }
});

export default router;
