export const LOCALES = ["uk", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const LOCALE_COOKIE = "locale";

export const isLocale = (value: unknown): value is Locale =>
  typeof value === "string" && (LOCALES as readonly string[]).includes(value);

export const detectLocale = (
  acceptLanguage: string | null | undefined,
): Locale => {
  const first = acceptLanguage
    ?.split(",")[0]
    ?.trim()
    .toLowerCase()
    .split(/[-;]/)[0];
  if (!first || first === "*" || first === "uk" || first === "ru") return "uk";
  return "en";
};
