import { slugify } from "@/utils/transliterate";

/** Slug of a family name, used as its value in the URL. */
export const familySlug = slugify;

export type FamilyGroupRef = { id: string; name: string };

export const familyIdToSlug = (groups: FamilyGroupRef[], id: string): string =>
  familySlug(groups.find((g) => g.id === id)?.name ?? "") || id;

/** URL token -> id. Slugs resolve by name; anything else is treated as an id (old links). */
export const familyTokenToId = (
  groups: FamilyGroupRef[],
  token: string,
): string =>
  groups.find((g) => familySlug(g.name) === token.toLowerCase())?.id ?? token;
