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
