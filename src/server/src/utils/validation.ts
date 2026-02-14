import { z } from "zod";

const isValidDate = (val: string) => !isNaN(Date.parse(val));

const isJsonArrayOfStrings = (val: string) => {
  try {
    const parsed = JSON.parse(val);
    return (
      Array.isArray(parsed) &&
      parsed.every((p: unknown) => typeof p === "string")
    );
  } catch {
    return false;
  }
};

export const memberBodySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  birthday: z.string().refine(isValidDate, "Invalid birthday date"),
  joinedAt: z.string().refine(isValidDate, "Invalid join date"),
  mentorId: z.string().min(1, "Mentor ID is required"),
  status: z.enum(["OBSERVER", "BABY", "FULL", "ALUMNI"], {
    error: "Invalid status value",
  }),
  email: z.string().email("Invalid email").or(z.literal("")).optional(),
  phoneNumbers: z
    .string()
    .refine(
      isJsonArrayOfStrings,
      "Invalid phone numbers format (expected JSON array of strings)",
    ),
  telegramLink: z.string().optional().default(""),
  instagramLink: z.string().optional().default(""),
  facebookLink: z.string().optional().default(""),
  linkedinLink: z.string().optional().default(""),
});

export type MemberBody = z.infer<typeof memberBodySchema>;

export const validateMemberBody = (
  body: unknown,
): { success: true; data: MemberBody } | { success: false; errors: string } => {
  const result = memberBodySchema.safeParse(body);
  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors = result.error.issues
    .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
    .join("; ");

  return { success: false, errors };
};
