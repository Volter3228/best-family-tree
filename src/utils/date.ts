import { format, isValid, parse } from "date-fns";

// this function converts a date string to a Date object
export const toDate = (
  raw: string | null,
  includeYear: boolean,
): Date | null => {
  if (!raw) return null;

  const parsed = parse(
    raw,
    includeYear ? "yyyy-M-d" : "M-d",
    new Date(2000, 0, 1),
  );

  return isValid(parsed) ? parsed : null;
};

// this function converts a Date object to a date string
export const fromDate = (
  date: Date | null,
  includeYear: boolean,
): string | null => {
  if (!date) return null;
  return format(date, includeYear ? "yyyy-M-d" : "M-d");
};
