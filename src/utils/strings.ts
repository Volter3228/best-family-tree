export const capitalizeFirstLetter = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const capitalizeOnlyFirstLetter = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

export const normalize = (str: string) => str.toLowerCase().trim();

export const camelToCssVar = (key: string): string =>
  `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;

export const hashString = (s: string): number => {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

type PluralForms = readonly [one: string, few: string, many: string];

export const PARTICIPANT_FORMS: PluralForms = ["учасник", "учасники", "учасників"];
export const TEAM_FORMS: PluralForms = ["команда", "команди", "команд"];

// Ukrainian plural: 1 учасник, 2-4 учасники, 5+ учасників (11-14 are "many").
export const pluralizeUk = (count: number, [one, few, many]: PluralForms) => {
  const lastTwo = count % 100;
  const last = count % 10;
  if (last === 1 && lastTwo !== 11) return one;
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return few;
  return many;
};

export const formatCount = (count: number, forms: PluralForms) =>
  `${count} ${pluralizeUk(count, forms)}`;
