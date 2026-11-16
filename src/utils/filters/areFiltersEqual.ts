import type { FilterState } from "@/types";

const sameValues = (a: readonly unknown[], b: readonly unknown[]) =>
  a.length === b.length && a.every((value) => b.includes(value));

// "Враховувати рік" means nothing without a birthday bound, so it is ignored then.
const withoutIrrelevantYear = (filters: FilterState): FilterState =>
  filters.birthdayFrom === null &&
  filters.birthdayTo === null &&
  filters.birthdayIncludeYear
    ? { ...filters, birthdayIncludeYear: false }
    : filters;

/** Same criteria and layout; list order does not matter. */
export const areFiltersEqual = (a: FilterState, b: FilterState): boolean => {
  const left = withoutIrrelevantYear(a);
  const right = withoutIrrelevantYear(b);
  const keys = new Set([...Object.keys(left), ...Object.keys(right)]) as Set<
    keyof FilterState
  >;
  return [...keys].every((key) => {
    const leftValue = left[key];
    const rightValue = right[key];
    if (Array.isArray(leftValue) && Array.isArray(rightValue))
      return sameValues(leftValue, rightValue);
    return leftValue === rightValue;
  });
};
