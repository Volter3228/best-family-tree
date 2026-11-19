import { format } from "date-fns";
import type { PendingSuggestion } from "@/api/selfService";
import type { Messages } from "@/i18n/messages";

export interface PendingRow {
  key: string;
  label: string;
  text: string;
  // A pending photo suggestion is shown as a thumbnail.
  image?: string;
}

const parseDay = (value: string) => {
  const [year, month, day] = value.slice(0, 10).split("-").map(Number);
  return new Date(year, month - 1, day);
};

export const formatDay = (value: string) => {
  const date = parseDay(value);
  return Number.isNaN(date.getTime()) ? value : format(date, "dd.MM.yyyy");
};

export { parseDay };

// One line per pending suggestion: "Field: value" (phones: "old -> new").
export const buildPendingRows = (
  pending: PendingSuggestion[],
  t: Messages["suggest"],
  label: (field: string) => string,
  show: (field: string, value: string) => string,
): PendingRow[] =>
  pending.flatMap(({ field, toValue, fromValue }, index) => {
    const key = `${index}:${field}`;
    if (field === "photo" && toValue) {
      return [{ key, label: label(field), text: "", image: toValue }];
    }
    if (field === "phone:replace" && toValue) {
      return [
        {
          key,
          label: label("phoneNumbers"),
          text: fromValue ? `${fromValue} → ${toValue}` : toValue,
        },
      ];
    }
    if (field === "phone:remove") {
      const value = fromValue ?? toValue;
      return value
        ? [{ key, label: label("phoneNumbers"), text: t.removeValue(value) }]
        : [];
    }
    if (field === "phone:add" && toValue) {
      return [{ key, label: label("phoneNumbers"), text: toValue }];
    }
    return toValue
      ? [{ key, label: label(field), text: show(field, toValue) }]
      : [];
  });
