import type { RequestHandler } from "express";
import { sendRouteError } from "../../utils/httpErrors.js";
import { assertCanEditMember } from "./memberService.js";

/**
 * Runs before the photo upload: a stable Cloudinary id would let an Editor
 * overwrite the photo of a member they are not allowed to edit.
 */
export const guardMemberEdit: RequestHandler = async (req, res, next) => {
  try {
    await assertCanEditMember(req.session!, req.params.id as string);
    next();
  } catch (error) {
    sendRouteError(res, error, "Failed to update member");
  }
};
