import { useCallback } from "react";
import { useLocale } from "@/i18n/useT";
import type { Locale } from "@/i18n/locale";
import { romanize } from "./transliterate";

const cache = new Map<string, string>();

const romanizeCached = (text: string) => {
  let result = cache.get(text);
  if (result === undefined) {
    result = romanize(text);
    cache.set(text, result);
  }
  return result;
};

export const displayName = (text: string, locale: Locale): string =>
  locale === "en" ? romanizeCached(text) : text;

export const useDisplayName = (): ((text: string) => string) => {
  const locale = useLocale();
  return useCallback((text: string) => displayName(text, locale), [locale]);
};

const FAMILY_NAMES_EN: Record<string, string> = {
  krolyky: "Rabbits",
  lehofemeli: "Legofamily",
  monholy: "Mongols",
  prezydenty: "Presidents",
};

export const displayFamilyName = (name: string, locale: Locale): string => {
  if (locale !== "en") return name;
  const romanized = romanizeCached(name);
  return FAMILY_NAMES_EN[romanized.trim().toLowerCase()] ?? romanized;
};

export const useDisplayFamilyName = (): ((name: string) => string) => {
  const locale = useLocale();
  return useCallback(
    (name: string) => displayFamilyName(name, locale),
    [locale],
  );
};
