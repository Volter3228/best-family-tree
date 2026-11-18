import { messages } from "@/i18n/messages";
import { useSettingsStore } from "@/store/settingsStore";

export type ErrorParams = Record<string, string | number | undefined>;

/** A failed API call: the localised message plus the form field it names, if any. */
export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly field?: string,
    readonly code?: string,
    readonly params?: ErrorParams,
  ) {
    super(message);
  }
}

/** Server error text in the current language; the server's own message is the fallback. */
export const errorMessage = (
  code: string | undefined,
  fallback: string,
  params?: ErrorParams,
): string => {
  const dictionary: Record<string, unknown> =
    messages[useSettingsStore.getState().locale].errors;
  const entry = code ? dictionary[code] : undefined;
  return typeof entry === "function" ? entry(params ?? {}) : fallback;
};

export const toApiError = async (res: Response) => {
  const body = await res.json().catch(() => null);
  const fallback =
    typeof body?.error === "string" && body.error
      ? body.error
      : `HTTP Error! Status: ${res.status}`;
  return new ApiError(
    errorMessage(body?.code, fallback, body?.params),
    res.status,
    body?.field,
    body?.code,
    body?.params,
  );
};
