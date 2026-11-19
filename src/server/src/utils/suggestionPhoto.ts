export const PHOTO_FIELD = "photo";

/** Uploaded files that become orphans when these rows are dropped. */
export const photoAssetsToDiscard = (
  rows: { field: string; toValue: string | null }[],
): string[] => [
  ...new Set(
    rows.flatMap((r) =>
      r.field === PHOTO_FIELD && r.toValue ? [r.toValue] : [],
    ),
  ),
];
