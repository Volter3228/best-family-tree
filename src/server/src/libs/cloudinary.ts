import cloudinary from "../db/cloudinaryConfig.js";

export const extractCloudinaryPublicId = (url: string): string | null => {
  if (!url) return null;
  const match = url.match(/\/v\d+\/(.+)\.\w+$/);
  return match ? decodeURIComponent(match[1]) : null;
};

export const deleteCloudinaryImage = async (url: string): Promise<void> => {
  const publicId = extractCloudinaryPublicId(url);
  if (publicId) {
    try {
      await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      console.error("Failed to delete Cloudinary image:", error);
    }
  }
};

/** Deletes `oldUrl` after a successful save, unless it is still in use. */
export const deleteReplacedImage = async (
  oldUrl: string | null | undefined,
  newUrl: string | null | undefined,
) => {
  if (oldUrl && oldUrl !== newUrl)
    await deleteCloudinaryImage(oldUrl);
};

/** Drops an upload whose save failed, unless the record points to it. */
export const discardUpload = async (
  uploadedUrl: string | null | undefined,
  currentUrl: string | null | undefined,
) => {
  if (uploadedUrl && uploadedUrl !== currentUrl) {
    await deleteCloudinaryImage(uploadedUrl);
  }
};
