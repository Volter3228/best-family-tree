import path from "path";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../db/cloudinaryConfig.js";
import { ValidationError } from "../utils/httpErrors.js";

// Phone photos are routinely several MB; anything bigger is not an avatar.
export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

export default function uploadMiddleware(folderName: string) {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: ({ body: { firstName, lastName } }, file) => {
      const folderPath = `${folderName.trim()}`;
      const fileExtension = path.extname(file.originalname).substring(1);
      const publicId = `${firstName}-${lastName}-${Date.now()}`;

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
        : cb(new ValidationError("Only image files are allowed")),
  });
}
