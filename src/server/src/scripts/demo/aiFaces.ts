import { createHash } from "node:crypto";

// StyleGAN2 faces: a new, unique, photorealistic face (1024x1024 JPEG) per request.
// The terms of use are not published, so this is for the demo only.
const FACE_URL = "https://thispersondoesnotexist.com/random-person.jpeg";

type Options = {
  fetchImpl?: typeof fetch;
  sleep?: (ms: number) => Promise<void>;
  /** The site may repeat the previous face when asked again too fast. */
  gapMs?: number;
};

/**
 * Hands out one new face per call. Call it one at a time (it spaces its own
 * requests). Never returns the same picture twice; null if the site keeps failing.
 */
export const createFaceSource = ({
  fetchImpl = fetch,
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  gapMs = 1200,
}: Options = {}) => {
  const seen = new Set<string>();
  let lastRequestAt = 0;

  return async (): Promise<Buffer | null> => {
    for (let attempt = 0; attempt < 4; attempt++) {
      const wait = lastRequestAt + gapMs - Date.now();
      if (wait > 0) await sleep(wait);
      lastRequestAt = Date.now();
      try {
        const res = await fetchImpl(FACE_URL, { headers: { "User-Agent": "Mozilla/5.0" } });
        if (!res.ok || !res.headers.get("content-type")?.startsWith("image/")) continue;
        const bytes = Buffer.from(await res.arrayBuffer());
        const hash = createHash("sha1").update(bytes).digest("hex");
        if (seen.has(hash)) continue;
        seen.add(hash);
        return bytes;
      } catch {
        // try again
      }
    }
    return null;
  };
};
