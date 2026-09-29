import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";
import { deleteCloudinaryImage } from "../libs/cloudinary.js";

const router = Router();
const uploadEventTypeIcon = uploadMiddleware("best-family-tree/event-types");

router.get("/event-types", async (_req, res) => {
  try {
    const eventTypes = await prisma.eventType.findMany({
      orderBy: { name: "asc" },
      include: {
        _count: {
          select: { teams: true },
        },
      },
    });
    res.status(200).json(eventTypes);
  } catch (error) {
    console.error("Failed to fetch event types:", error);
    res.status(500).json({ error: "Failed to fetch event types" });
  }
});

router.post(
  "/event-types",
  uploadEventTypeIcon.single("icon"),
  async (req, res) => {
    try {
      const { name, description, color } = req.body;
      const iconUrl = req.file?.path || null;

      if (!name) {
        res.status(400).json({ error: "Name is required" });
        return;
      }

      const existing = await prisma.eventType.findUnique({
        where: { name },
      });

      if (existing) {
        res
          .status(409)
          .json({ error: "Event type with this name already exists" });
        return;
      }

      const eventType = await prisma.eventType.create({
        data: {
          name,
          description: description || null,
          color: color || null,
          iconUrl,
        },
      });

      res.status(201).json(eventType);
    } catch (error) {
      console.error("Failed to create event type:", error);
      res.status(500).json({ error: "Failed to create event type" });
    }
  },
);

router.put(
  "/event-types/:id",
  uploadEventTypeIcon.single("icon"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, color } = req.body;

      const existing = await prisma.eventType.findUnique({ where: { id } });
      if (!existing) {
        res.status(404).json({ error: "Event type not found" });
        return;
      }

      if (name && name !== existing.name) {
        const conflict = await prisma.eventType.findUnique({ where: { name } });
        if (conflict) {
          res
            .status(409)
            .json({ error: "Event type with this name already exists" });
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

      const updated = await prisma.eventType.update({
        where: { id },
        data: {
          name: name || existing.name,
          description:
            description !== undefined ? description : existing.description,
          color:
            color === "" ? null : color !== undefined ? color : existing.color,
          iconUrl,
        },
      });

      res.status(200).json(updated);
    } catch (error) {
      console.error("Failed to update event type:", error);
      res.status(500).json({ error: "Failed to update event type" });
    }
  },
);

router.delete("/event-types/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const teamsCount = await prisma.team.count({
      where: { eventTypeId: id },
    });

    if (teamsCount > 0) {
      res.status(409).json({
        error: "Cannot delete event type: teams are still referencing it",
      });
      return;
    }

    const eventType = await prisma.eventType.findUnique({ where: { id } });
    if (!eventType) {
      res.status(404).json({ error: "Event type not found" });
      return;
    }

    if (eventType.iconUrl) {
      await deleteCloudinaryImage(eventType.iconUrl);
    }

    await prisma.eventType.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error("Failed to delete event type:", error);
    res.status(500).json({ error: "Failed to delete event type" });
  }
});

export default router;
