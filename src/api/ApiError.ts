/** A failed API call: the server's message plus the form field it names, if any. */
export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly field?: string,
  ) {
    super(message);
  }
}

export const toApiError = async (res: Response) => {
  const body = await res.json().catch(() => null);
  return new ApiError(
    body?.error || `HTTP Error! Status: ${res.status}`,
    res.status,
    body?.field,
  );
};
