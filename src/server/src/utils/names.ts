// Trim and collapse inner whitespace.
export const normalizeName = (value: string) =>
  value.trim().replace(/\s+/g, " ");

export const capitalizeFirst = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

// Roles always start with a capital letter ("main organizer" -> "Main organizer").
export const normalizeRoleName = (value: string) =>
  capitalizeFirst(normalizeName(value));

// Case-insensitive equality filter for Prisma (Postgres).
export const sameName = (name: string) => ({
  equals: name,
  mode: "insensitive" as const,
});
