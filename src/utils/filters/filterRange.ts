/**
 * Inclusive bounds of a numeric filter range. Both ends set: the range, swapped
 * when inverted. One end set: that single value. Neither: null (no filter).
 */
export const rangeBounds = (
  from: number | null,
  to: number | null,
): [number, number] | null => {
  if (from !== null && to !== null) return from <= to ? [from, to] : [to, from];
  const single = from ?? to;
  return single === null ? null : [single, single];
};
