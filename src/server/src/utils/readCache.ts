import type { RequestHandler } from "express";

// Every successful write bumps the version; cached reads are only served for
// the version they were computed under, so a write can never leave stale data.
let dataVersion = 0;

export const bumpDataVersion = () => {
  dataVersion += 1;
};

export const getDataVersion = () => dataVersion;

export const trackWrites: RequestHandler = (req, res, next) => {
  if (req.method !== "GET" && req.method !== "HEAD" && req.method !== "OPTIONS") {
    // Also bump on failures: a half-applied write must not leave stale reads.
    res.on("finish", bumpDataVersion);
    res.on("close", bumpDataVersion);
  }
  next();
};

export const createVersionedCache = <T>(load: () => Promise<T>) => {
  let entry: { version: number; value: T } | null = null;
  let inflight: { version: number; promise: Promise<T> } | null = null;

  return async (): Promise<{ value: T; version: number }> => {
    const version = dataVersion;
    if (entry?.version === version) return entry;
    if (inflight?.version !== version) {
      const promise = load().then((value) => {
        entry = { version, value };
        return value;
      });
      const current = { version, promise };
      inflight = current;
      promise
        .catch(() => undefined)
        .finally(() => {
          if (inflight === current) inflight = null;
        });
    }
    return { value: await inflight!.promise, version };
  };
};
