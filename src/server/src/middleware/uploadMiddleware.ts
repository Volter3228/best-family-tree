import path from "path";
import type { Request } from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../db/cloudinaryConfig.js";
import { ValidationError } from "../utils/httpErrors.js";

// Phone photos are routinely several MB; anything bigger is not an avatar.
export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

type UploadOptions = {
  /**
   * Names the file after its owner. A timestamp is still appended: overwriting
   * the owner's current file before the save succeeds would lose it on failure.
   */
  namePrefix?: (req: Request) => string | undefined;
};

export default function uploadMiddleware(
  folderName: string,
  options: UploadOptions = {},
) {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => {
      const { firstName, lastName } = req.body ?? {};
      const folderPath = `${folderName.trim()}`;
      const fileExtension = path.extname(file.originalname).substring(1);
      const prefix =
        options.namePrefix?.(req) ||
        [firstName, lastName].filter(Boolean).join("-") ||
        "upload";
      const publicId = `${prefix}-${Date.now()}`;

      return {
        folder: folderPath,
        public_id: publicId,
        format: fileExtension,
      };
    },
  });

  return multer({
    storage,
    limits: { fileSize: MAX_UPLOAD_BYTES, files: 1 },
    // Rejected before anything reaches Cloudinary.
    fileFilter: (_req, file, cb) =>
      file.mimetype.startsWith("image/")
        ? cb(null, true)
        : cb(
            new ValidationError("Only image files are allowed", {
              code: "image_only",
            }),
          ),
  });
}
