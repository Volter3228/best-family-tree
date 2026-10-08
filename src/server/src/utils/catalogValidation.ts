import { z } from "zod";
import { normalizeName, normalizeRoleName } from "./names.js";

const HEX_COLOR = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
const MIN_YEAR = 1990;

// JSON payloads may send null for "nothing"; keep only `undefined`.
const optional = <T extends z.ZodType>(schema: T) =>
  schema.nullish().transform((value) => value ?? undefined);

// Multipart forms send "" for "clear this"; map it to null.
const clearable = <T extends z.ZodType>(schema: T) =>
  z.preprocess((value) => (value === "" ? null : value), schema.nullish());

const name = (label: string, max: number) =>
  z
    .string()
    .transform(normalizeName)
    .pipe(
      z
        .string()
        .min(1, `${label} is required`)
        .max(max, `${label} is too long`),
    );

const optionalName = (label: string, max: number) =>
  optional(
    z
      .string()
      .transform(normalizeName)
      .pipe(z.string().max(max, `${label} is too long`)),
  ).transform((value) => value || undefined);

const year = z
  .number()
  .int("Year must be an integer")
  .min(MIN_YEAR, `Year must be ${MIN_YEAR} or later`)
  .max(new Date().getFullYear() + 1, "Year is too far in the future");

// Years arrive as numbers (JSON) or strings (multipart).
const yearField = z.preprocess(
  (value) =>
    value === "" ? null : typeof value === "string" ? Number(value) : value,
  year.nullish(),
);

const booleanLike = z.union([
  z.boolean(),
  z.enum(["true", "false"]).transform((value) => value === "true"),
]);

const isValidPeriod = ({
  startYear,
  endYear,
}: {
  startYear?: number | null;
  endYear?: number | null;
}) => startYear == null || endYear == null || startYear <= endYear;

const PERIOD_ERROR = { message: "End year must not be before start year" };

export const teamTypeBodySchema = z.object({
  name: name("Name", 60),
  description: optional(z.string().trim().max(300, "Description is too long")),
  color: optional(
    z.union([
      z.literal(""),
      z.string().regex(HEX_COLOR, "Color must be a hex value"),
    ]),
  ),
  isEvent: optional(booleanLike),
});

export const teamTypeUpdateSchema = teamTypeBodySchema.partial();

export const roleBodySchema = z.object({
  name: z
    .string()
    .transform(normalizeRoleName)
    .pipe(z.string().min(1, "Name is required").max(60, "Name is too long")),
  description: optional(z.string().trim().max(300, "Description is too long")),
  isLeaderPosition: optional(booleanLike),
});

// A role is referenced by id or, when it is new, by name.
const roleRef = {
  roleId: optional(z.string().min(1)),
  roleName: optional(
    z
      .string()
      .transform(normalizeRoleName)
      .pipe(z.string().max(60, "Role name is too long")),
  ).transform((value) => value || undefined),
  isLeaderPosition: optional(z.boolean()),
};

const hasRole = (ref: { roleId?: string; roleName?: string }) =>
  Boolean(ref.roleId || ref.roleName);

// A team is referenced by name and/or type; `teamStartYear` / `teamEndYear`
// only matter when this reference creates the team.
const teamRef = {
  teamTypeId: optional(z.string().min(1)),
  teamTypeName: optionalName("Team type name", 60),
  teamName: optionalName("Team name", 80),
};

export const positionSchema = z
  .object({
    ...roleRef,
    ...teamRef,
    teamStartYear: optional(year),
    teamEndYear: optional(year),
    // Only for positions without a team.
    organization: optionalName("Organization", 80),
    startYear: optional(year),
    endYear: optional(year),
  })
  .refine(hasRole, { message: "Position needs a role" })
  .refine(
    ({ teamStartYear, teamEndYear }) =>
      isValidPeriod({ startYear: teamStartYear, endYear: teamEndYear }),
    PERIOD_ERROR,
  )
  .refine(isValidPeriod, PERIOD_ERROR);

export type PositionInput = z.infer<typeof positionSchema>;

// Create/update body of a team (multipart: "" clears, missing keeps).
export const teamBodySchema = z
  .object({
    name: z.preprocess(
      (value) => (value === "" ? undefined : value),
      name("Name", 80).optional(),
    ),
    teamTypeId: clearable(z.string().min(1)),
    teamTypeName: optionalName("Team type name", 60),
    description: clearable(z.string().trim().max(500, "Description is too long")),
    startYear: yearField,
    endYear: yearField,
    isOngoing: optional(booleanLike),
  })
  .refine(isValidPeriod, PERIOD_ERROR);

export type TeamBody = z.infer<typeof teamBodySchema>;

export const teamMembersSchema = z.object({
  members: z
    .array(
      z
        .object({ memberId: z.string().min(1), ...roleRef })
        .refine(hasRole, { message: "Every member needs a role" }),
    )
    .max(300, "Too many members"),
});

export type TeamMembersBody = z.infer<typeof teamMembersSchema>;

export const formatZodErrors = (error: z.ZodError) =>
  error.issues
    .map((issue) =>
      issue.path.length
        ? `${issue.path.join(".")}: ${issue.message}`
        : issue.message,
    )
    .join("; ");

// A request without a parsed body (no JSON/multipart payload) is validated as an
// empty object, so the client gets field-level errors instead of a bare
// "expected object, received undefined".
export const parseWith = <T extends z.ZodType>(schema: T, body: unknown) => {
  const result = schema.safeParse(body ?? {});
  return result.success
    ? ({ success: true, data: result.data } as const)
    : ({ success: false, errors: formatZodErrors(result.error) } as const);
};
