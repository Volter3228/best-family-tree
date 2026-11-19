import { Router } from "express";
import { z } from "zod";
import { requireAccess } from "../middleware/requireAccess.js";
import { parseWith } from "../utils/catalogValidation.js";
import {
  ValidationError,
  errorBody,
  sendRouteError,
} from "../utils/httpErrors.js";
import {
  createSuggestionBatch,
  listMySuggestions,
  type SuggestionTarget,
} from "./suggestion/suggestionCreate.js";
import { countPending, listPending } from "./suggestion/suggestionList.js";
import {
  approveSuggestion,
  rejectSuggestion,
} from "./suggestion/suggestionReview.js";

const router = Router();

const createBodySchema = z.object({
  changes: z
    .array(
      z.object({
        field: z.string().min(1).max(40),
        value: z.string().max(2000).nullable(),
      }),
    )
    .min(1)
    .max(20),
});

const targetRoutes = (path: string, kind: SuggestionTarget["kind"]) => {
  router.post(`${path}/:id/suggestions`, async (req, res) => {
    try {
      const body = parseWith(createBodySchema, req.body);
      if (!body.success) throw new ValidationError(body.errors);
      const result = await createSuggestionBatch(
        req.session!,
        { kind, id: req.params.id as string },
        body.data.changes,
      );
      res.status(201).json(result);
    } catch (error) {
      sendRouteError(res, error, "Failed to save suggestions");
    }
  });

  router.get(`${path}/:id/suggestions/mine`, async (req, res) => {
    try {
      res.status(200).json(
        await listMySuggestions(req.session!, {
          kind,
          id: req.params.id as string,
        }),
      );
    } catch (error) {
      sendRouteError(res, error, "Failed to load suggestions");
    }
  });
};

targetRoutes("/members", "member");
targetRoutes("/teams", "team");

router.get("/suggestions/count", requireAccess("EDITOR"), async (_req, res) => {
  try {
    res.status(200).json({ count: await countPending() });
  } catch (error) {
    sendRouteError(res, error, "Failed to count suggestions");
  }
});

router.get("/suggestions", requireAccess("EDITOR"), async (req, res) => {
  try {
    res.status(200).json(await listPending(req.session!));
  } catch (error) {
    sendRouteError(res, error, "Failed to load suggestions");
  }
});

router.post(
  "/suggestions/:id/approve",
  requireAccess("EDITOR"),
  async (req, res) => {
    const body = parseWith(
      z.object({ force: z.boolean().optional() }),
      req.body,
    );
    if (!body.success) {
      res.status(400).json(errorBody(body.errors, "validation"));
      return;
    }
    try {
      await approveSuggestion(
        req.session!,
        req.params.id as string,
        body.data.force === true,
      );
      res.status(200).json({ ok: true });
    } catch (error) {
      sendRouteError(res, error, "Failed to approve suggestion");
    }
  },
);

router.post(
  "/suggestions/:id/reject",
  requireAccess("EDITOR"),
  async (req, res) => {
    try {
      await rejectSuggestion(req.session!, req.params.id as string);
      res.status(200).json({ ok: true });
    } catch (error) {
      sendRouteError(res, error, "Failed to reject suggestion");
    }
  },
);

export default router;
