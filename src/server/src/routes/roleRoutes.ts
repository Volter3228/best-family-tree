import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";
import {
  parseWith,
  roleBodySchema,
  roleUpdateSchema,
} from "../utils/catalogValidation.js";
import { sendRouteError, errorBody } from "../utils/httpErrors.js";
import { sameName } from "../utils/names.js";

const router = Router();

// Number of distinct members per role. A member may hold the same role in
// several positions, so rows are de-duplicated per (role, member) pair first.
export const countMembersByRole = (
  holdings: { roleId: string; memberId: string }[],
): Map<string, number> => {
  const membersByRole = new Map<string, Set<string>>();
  for (const { roleId, memberId } of holdings) {
    const members = membersByRole.get(roleId) ?? new Set<string>();
    members.add(memberId);
    membersByRole.set(roleId, members);
  }
  return new Map(
    [...membersByRole].map(([roleId, members]) => [roleId, members.size]),
  );
};

router.get("/roles", async (_req, res) => {
  try {
    const [roles, holdings] = await Promise.all([
      prisma.role.findMany({
        orderBy: { name: "asc" },
        include: { _count: { select: { positions: true } } },
      }),
      prisma.memberPosition.groupBy({ by: ["roleId", "memberId"] }),
    ]);
    const memberCounts = countMembersByRole(holdings);
    res.status(200).json(
      roles.map((role) => ({
        ...role,
        memberCount: memberCounts.get(role.id) ?? 0,
      })),
    );
  } catch (error) {
    sendRouteError(res, error, "Failed to fetch roles");
  }
});

router.post("/roles", async (req, res) => {
  const body = parseWith(roleBodySchema, req.body);
  if (!body.success) {
    res.status(400).json(errorBody(body.errors, "validation"));
    return;
  }

  try {
    const { name, isLeaderPosition, description } = body.data;

    const existing = await prisma.role.findFirst({
      where: { name: sameName(name) },
    });

    if (existing) {
      res.status(200).json(existing);
      return;
    }

    const role = await prisma.role.create({
      data: {
        name,
        isLeaderPosition: isLeaderPosition === true,
        description: description || null,
      },
    });

    res.status(201).json(role);
  } catch (error) {
    sendRouteError(res, error, "Failed to create role");
  }
});

router.put("/roles/:id", async (req, res) => {
  const body = parseWith(roleUpdateSchema, req.body);
  if (!body.success) {
    res.status(400).json(errorBody(body.errors, "validation"));
    return;
  }

  try {
    const { id } = req.params;
    const { name, description, isLeaderPosition } = body.data;

    const existing = await prisma.role.findUnique({ where: { id } });
    if (!existing) {
      res.status(404).json(errorBody("Role not found", "role_not_found"));
      return;
    }

    if (name && name.toLowerCase() !== existing.name.toLowerCase()) {
      const conflict = await prisma.role.findFirst({
        where: { name: sameName(name), NOT: { id } },
      });
      if (conflict) {
        res
          .status(409)
          .json(errorBody("Role with this name already exists", "role_exists"));
        return;
      }
    }

    const updated = await prisma.role.update({
      where: { id },
      data: {
        name: name || existing.name,
        description:
          description !== undefined
            ? description || null
            : existing.description,
        isLeaderPosition: isLeaderPosition ?? existing.isLeaderPosition,
      },
    });
    res.status(200).json(updated);
  } catch (error) {
    sendRouteError(res, error, "Failed to update role");
  }
});

router.delete("/roles/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const role = await prisma.role.findUnique({ where: { id } });
    if (!role) {
      res.status(404).json(errorBody("Role not found", "role_not_found"));
      return;
    }

    const positionsCount = await prisma.memberPosition.count({
      where: { roleId: id },
    });
    if (positionsCount > 0) {
      res
        .status(409)
        .json(
          errorBody(
            "Cannot delete role: positions are still using it",
            "role_in_use",
          ),
        );
      return;
    }

    await prisma.role.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    sendRouteError(res, error, "Failed to delete role");
  }
});

export default router;
