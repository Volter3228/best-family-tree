import type { SuggestionDto } from "@/api/suggestionReview";
import type { Locale } from "@/i18n/locale";

export interface SuggestionBatch {
  batchId: string;
  target: SuggestionDto["target"];
  author: SuggestionDto["author"];
  createdAt: string;
  items: SuggestionDto[];
}

// Keeps the order of the first row of each batch.
export const groupByBatch = (items: readonly SuggestionDto[]) => {
  const batches = new Map<string, SuggestionBatch>();
  for (const item of items) {
    const { author } = item;
    const key = `${item.target.kind}:${item.target.id}:${author.memberId ?? author.email ?? author.name ?? ""}`;
    const batch = batches.get(key);
    if (batch) {
      batch.items.push(item);
      if (item.createdAt > batch.createdAt) batch.createdAt = item.createdAt;
    } else {
      batches.set(key, {
        batchId: key,
        target: item.target,
        author: item.author,
        createdAt: item.createdAt,
        items: [item],
      });
    }
  }
  return [...batches.values()];
};

// Key of the field's name in the review.fields messages; a photo is a logo on a team.
export const fieldLabelKey = (field: string, kind: "member" | "team") =>
  field === "photo" ? (kind === "team" ? "logo" : "photo") : field;

const LOCALE_TAG: Record<Locale, string> = { uk: "uk-UA", en: "en-GB" };

export const PHONE_FIELDS = [
  "phone:add",
  "phone:remove",
  "phone:replace",
] as const;

export const isPhoneField = (field: string) =>
  (PHONE_FIELDS as readonly string[]).includes(field);

// The stored value may carry a time part.
export const formatDay = (value: string, locale: Locale) => {
  const date = new Date(`${value.slice(0, 10)}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(LOCALE_TAG[locale], {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export const formatSent = (
  iso: string,
  locale: Locale,
  justNow: string,
  now = Date.now(),
) => {
  const time = new Date(iso).getTime();
  if (Number.isNaN(time)) return "";
  const diff = now - time;
  if (diff < MINUTE) return justNow;
  const rtf = new Intl.RelativeTimeFormat(LOCALE_TAG[locale], {
    numeric: "auto",
  });
  if (diff < HOUR) return rtf.format(-Math.floor(diff / MINUTE), "minute");
  if (diff < DAY) return rtf.format(-Math.floor(diff / HOUR), "hour");
  if (diff < 7 * DAY) return rtf.format(-Math.floor(diff / DAY), "day");
  return new Date(iso).toLocaleDateString(LOCALE_TAG[locale], {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const omit = <T>(record: Record<string, T>, key: string) => {
  const next = { ...record };
  delete next[key];
  return next;
};
