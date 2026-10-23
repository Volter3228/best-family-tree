import { z } from "zod";
import { memberBodySchema } from "./validation.js";

// Updates are lenient about fields the stored record never had (old records
// miss data), but a value that already exists can only be replaced, never
// emptied ("ratchet" rule: completeness may only go up).
const isValidDate = (val: string) => val === "" || !isNaN(Date.parse(val));

export const memberUpdateBodySchema = memberBodySchema.extend({
  firstName: z.string(),
  lastName: z.string().default(""),
  birthday: z.string().refine(isValidDate, "Invalid birthday date").default(""),
  joinedAt: z.string().refine(isValidDate, "Invalid join date").default(""),
  mentorId: z.string().default(""),
});

export type MemberUpdateBody = z.infer<typeof memberUpdateBodySchema>;

// Minimal records (old members known only by name): everything but the name,
// status and join date may be left empty. Malformed values are still refused.
export const sparseMemberBodySchema = memberUpdateBodySchema.extend({
  firstName: z.string().trim().min(1, "First name is required"),
  joinedAt: z
    .string()
    .min(1, "Join date is required")
    .refine(isValidDate, "Invalid join date"),
});

export const validateSparseMemberBody = (
  body: unknown,
): { success: true; data: MemberUpdateBody } | { success: false; errors: string } => {
  const result = sparseMemberBodySchema.safeParse(body);
  if (result.success) return { success: true, data: result.data };

  const errors = result.error.issues
    .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
    .join("; ");
  return { success: false, errors };
};

export interface ExistingMember {
  name: string;
  joinedAt: Date | null;
  birthday: Date | null;
  mentorId: string | null;
  email: string | null;
  phoneNumbers: string[];
}

const splitName = (name: string) => {
  const [firstName = "", ...rest] = name.trim().split(/\s+/);
  return { firstName, lastName: rest.join(" ") };
};

const parsePhones = (raw: string): string[] => {
  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((p) => p !== "") : [];
  } catch {
    return [];
  }
};

const findClearedFields = (
  existing: ExistingMember,
  body: MemberUpdateBody,
): string[] => {
  const { firstName, lastName } = splitName(existing.name);
  const wasSet: Record<string, boolean> = {
    firstName: !!firstName,
    lastName: !!lastName,
    birthday: !!existing.birthday,
    joinedAt: !!existing.joinedAt,
    mentorId: !!existing.mentorId,
    email: !!existing.email,
    phoneNumbers: existing.phoneNumbers.length > 0,
  };
  const isSet: Record<string, boolean> = {
    firstName: !!body.firstName.trim(),
    lastName: !!body.lastName.trim(),
    birthday: !!body.birthday,
    joinedAt: !!body.joinedAt,
    mentorId: !!body.mentorId,
    email: !!body.email,
    phoneNumbers: parsePhones(body.phoneNumbers).length > 0,
  };

  return Object.keys(wasSet).filter((field) => wasSet[field] && !isSet[field]);
};

export const validateMemberUpdate = (
  body: unknown,
  existing: ExistingMember,
):
  | { success: true; data: MemberUpdateBody }
  | { success: false; errors: string } => {
  const result = memberUpdateBodySchema.safeParse(body);
  if (!result.success) {
    const errors = result.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("; ");
    return { success: false, errors };
  }

  const cleared = findClearedFields(existing, result.data);
  if (cleared.length > 0) {
    return {
      success: false,
      errors: cleared
        .map((field) => `${field}: Can not be emptied once it has a value`)
        .join("; "),
    };
  }

  return { success: true, data: result.data };
};
