import cloudinary from "../../db/cloudinaryConfig.js";

// Stock photos stand in for team and group pictures, which show real people.
export const stockPhotoUrl = (seed: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/800/600.jpg`;

/**
 * Uploads face bytes as a square avatar. The crop drops the 3% bottom strip
 * that carries the generator's caption, and the size keeps storage small.
 */
export const uploadFace = (
  bytes: Buffer,
  folder: string,
  publicId: string,
): Promise<string | null> =>
  new Promise((resolve) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,
          public_id: publicId,
          overwrite: true,
          invalidate: true,
          transformation: [
            { width: 960, height: 960, x: 32, y: 0, crop: "crop", gravity: "north_west" },
            { width: 512, height: 512, crop: "scale" },
          ],
          format: "jpg",
          quality: "auto",
        },
        (error, result) => resolve(error || !result ? null : result.secure_url),
      )
      .end(bytes);
  });

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
