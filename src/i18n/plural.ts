import type { Locale } from "./locale";

export interface PluralForms {
  one: string;
  few?: string;
  many?: string;
  other: string;
}

export const plural = (
  locale: Locale,
  count: number,
  forms: PluralForms,
): string => {
  const category = new Intl.PluralRules(locale).select(count);
  if (category === "one") return forms.one;
  if (category === "few") return forms.few ?? forms.other;
  if (category === "many") return forms.many ?? forms.other;
  return forms.other;
};

export const formatCount = (
  locale: Locale,
  count: number,
  forms: PluralForms,
): string => `${count} ${plural(locale, count, forms)}`;
