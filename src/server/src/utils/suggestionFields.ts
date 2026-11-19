import { ValidationError } from "./httpErrors.js";
import { normalizeName } from "./names.js";
import { normalizeSocialLink } from "./transformSocialLinks.js";
import { memberBodySchema } from "./validation.js";

// A normalizer returns the canonical string, or null when the value is invalid.
export type Normalizer = (value: string) => string | null;

const MIN_YEAR = 1990;

const text =
  (max: number): Normalizer =>
  (v) => {
    const clean = normalizeName(v);
    return clean && clean.length <= max ? clean : null;
  };

const longText =
  (max: number): Normalizer =>
  (v) =>
    v.length <= max ? v : null;

const date: Normalizer = (v) =>
  /^\d{4}-\d{2}-\d{2}$/.test(v) &&
  !isNaN(Date.parse(v)) &&
  new Date(v).toISOString().slice(0, 10) === v
    ? v
    : null;

const oneOf =
  (values: string[]): Normalizer =>
  (v) =>
    values.includes(v) ? v : null;

const link =
  (platform: Parameters<typeof normalizeSocialLink>[1]): Normalizer =>
  (v) => {
    const normalized = normalizeSocialLink(v, platform);
    return normalized && normalized.length <= 300 ? normalized : null;
  };

const year: Normalizer = (v) => {
  const n = Number(v);
  return Number.isInteger(n) &&
    n >= MIN_YEAR &&
    n <= new Date().getFullYear() + 1
    ? String(n)
    : null;
};

export const MEMBER_NORMALIZERS: Record<string, Normalizer> = {
  name: text(120),
  birthday: date,
  joinedAt: date,
  status: oneOf(["OBSERVER", "BABY", "FULL", "ALUMNI"]),
  mentorId: longText(60),
  email: (v) =>
    v.length <= 200 && memberBodySchema.shape.email.safeParse(v).success
      ? v
      : null,
  telegramLink: link("telegram"),
  instagramLink: link("instagram"),
  facebookLink: link("facebook"),
  linkedinLink: link("linkedin"),
};

export const TEAM_NORMALIZERS: Record<string, Normalizer> = {
  name: text(80),
  description: (v) => (v.length <= 500 ? v : null),
  startYear: year,
  endYear: year,
  isOngoing: oneOf(["true", "false"]),
  teamTypeId: longText(60),
};

export const invalid = (field: string) =>
  new ValidationError(`Invalid value for ${field}`, {
    code: "invalid_value",
    params: { field },
  });

export const cannotEmpty = (field: string) =>
  new ValidationError(`${field} can not be emptied once it has a value`, {
    code: "cannot_empty",
    params: { field },
  });
