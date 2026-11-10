import { ApiError } from "@/api/ApiError";
import type { MemberFormData } from "@/types";

/** Where a failed save should be shown: on a form field, or as a form-level message. */
export const describeSubmitError = (
  error: unknown,
  formKeys: readonly string[],
): { field: keyof MemberFormData | null; message: string } => {
  const message =
    error instanceof Error && error.message
      ? error.message
      : "Не вдалося зберегти. Спробуйте ще раз";
  const field =
    error instanceof ApiError && error.field && formKeys.includes(error.field)
      ? (error.field as keyof MemberFormData)
      : null;
  return { field, message };
};
