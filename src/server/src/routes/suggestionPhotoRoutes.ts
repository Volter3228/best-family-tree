import { Router } from "express";
import type { RequestHandler } from "express";
import uploadMiddleware from "../middleware/uploadMiddleware.js";
import { deleteCloudinaryImage } from "../libs/cloudinary.js";
import { ValidationError, sendRouteError } from "../utils/httpErrors.js";
import type { SuggestionTarget } from "./suggestion/suggestionAuthor.js";
import {
  assertCanSuggestPhoto,
  createPhotoSuggestion,
} from "./suggestion/suggestionPhoto.js";

const router = Router();
const upload = uploadMiddleware("best-family-tree/suggestions");

const photoRoute = (path: string, kind: SuggestionTarget["kind"]) => {
  const target = (id: unknown): SuggestionTarget => ({
    kind,
    id: id as string,
  });
  const guard: RequestHandler = async (req, res, next) => {
    try {
      await assertCanSuggestPhoto(req.session!, target(req.params.id));
      next();
    } catch (error) {
      sendRouteError(res, error, "Failed to save suggestion");
    }
  };

  router.post(
    `${path}/:id/suggestions/photo`,
    guard,
    upload.single("photo"),
    async (req, res) => {
      const url = req.file?.path;
      try {
        if (!url) {
          throw new ValidationError("Photo is required", {
            code: "photo_required",
          });
        }
        res
          .status(201)
          .json(
            await createPhotoSuggestion(
              req.session!,
              target(req.params.id),
              url,
            ),
          );
      } catch (error) {
        if (url) await deleteCloudinaryImage(url);
        sendRouteError(res, error, "Failed to save suggestion");
      }
    },
  );
};

photoRoute("/members", "member");
photoRoute("/teams", "team");

export default router;
