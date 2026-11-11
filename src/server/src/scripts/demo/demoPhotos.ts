import cloudinary from "../../db/cloudinaryConfig.js";

// Lorelei by Lisa Wischofsky, CC0 1.0 (https://www.dicebear.com/styles/lorelei/).
export const avatarUrl = (seed: string) =>
  `https://api.dicebear.com/9.x/lorelei/png?seed=${encodeURIComponent(seed)}&size=512`;

// Stock photos stand in for team and group pictures, which show real people.
export const stockPhotoUrl = (seed: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/800/600.jpg`;

/**
 * Cloudinary fetches `sourceUrl` itself. The public id is fixed, so a re-run
 * replaces the same asset instead of piling up copies. Null if the fetch fails.
 */
export const uploadFromUrl = async (
  sourceUrl: string,
  folder: string,
  publicId: string,
): Promise<string | null> => {
  try {
    const result = await cloudinary.uploader.upload(sourceUrl, {
      folder,
      public_id: publicId,
      overwrite: true,
      invalidate: true,
    });
    return result.secure_url;
  } catch {
    return null;
  }
};

/** Runs `task` over `items`, at most `limit` at a time. */
export const mapLimit = async <T, R>(
  items: T[],
  limit: number,
  task: (item: T) => Promise<R>,
): Promise<R[]> => {
  const results: R[] = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await task(items[index]);
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
};
