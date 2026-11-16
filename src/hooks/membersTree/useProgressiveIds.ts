import { useEffect, useState } from "react";

// Ids mounted per animation frame when a new set of nodes appears.
export const PROGRESSIVE_CHUNK_SIZE = 60;

/**
 * Next admitted set: keeps admitted ids still in `ids`, drops the rest, and
 * admits up to `chunkSize` new ids in list order. Returns the same set object
 * when nothing changes.
 */
export const nextAdmittedIds = (
  admitted: ReadonlySet<string>,
  ids: readonly string[],
  chunkSize: number,
): ReadonlySet<string> => {
  const next = new Set<string>();
  let added = 0;
  for (const id of ids) {
    if (admitted.has(id)) next.add(id);
    else if (added < chunkSize) {
      next.add(id);
      added++;
    }
  }
  // ids are unique, so equal size means no id was dropped or added.
  return next.size === admitted.size && added === 0 ? admitted : next;
};

/** Ids already admitted stay; new ids are admitted one chunk per frame. */
export const useProgressiveIds = (
  ids: readonly string[],
  chunkSize: number = PROGRESSIVE_CHUNK_SIZE,
): ReadonlySet<string> => {
  const [admitted, setAdmitted] = useState<ReadonlySet<string>>(
    () => new Set(),
  );

  useEffect(() => {
    const next = nextAdmittedIds(admitted, ids, chunkSize);
    if (next === admitted) return;
    const frame = requestAnimationFrame(() => setAdmitted(next));
    return () => cancelAnimationFrame(frame);
  }, [admitted, ids, chunkSize]);

  return admitted;
};
