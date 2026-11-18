import type { Response } from "express";

export type ErrorParams = Record<string, string | number>;

export interface ErrorDetails {
  /** Stable machine code; the client maps it to a localised message. */
  code?: string;
  params?: ErrorParams;
}

/** The JSON body of every API error: the English message stays as a fallback. */
export const errorBody = (
  message: string,
  code: string,
  extra: Record<string, unknown> = {},
) => ({ error: message, code, ...extra });

/** An error that maps straight to an HTTP status. */
export class HttpError extends Error {
  constructor(
    readonly status: number,
    message: string,
    readonly code: string = "error",
    readonly params?: ErrorParams,
  ) {
    super(message);
  }
}

// Well-formed input that is not acceptable.
export class ValidationError extends HttpError {
  constructor(
    message: string,
    { code = "validation", params }: ErrorDetails = {},
  ) {
    super(400, message, code, params);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message = "Sign in required") {
    super(401, message, "sign_in_required");
  }
}

export class ForbiddenError extends HttpError {
  constructor(
    message = "Not allowed",
    { code = "not_allowed", params }: ErrorDetails = {},
  ) {
    super(403, message, code, params);
  }
}

export class ConflictError extends HttpError {
  constructor(
    message: string,
    // Form field the conflict belongs to, so the client can show it there.
    readonly field?: string,
    { code = "conflict", params }: ErrorDetails = {},
  ) {
    super(409, message, code, params);
  }
}

export class NotFoundError extends HttpError {
  constructor(
    message: string,
    { code = "not_found", params }: ErrorDetails = {},
  ) {
    super(404, message, code, params);
  }
}

const getPrismaCode = (error: unknown): string | null =>
  typeof error === "object" && error !== null && "code" in error
    ? String((error as { code: unknown }).code)
    : null;

/** Map service errors and common Prisma failures to proper status codes. */
export const sendRouteError = (
  res: Response,
  error: unknown,
  fallbackMessage: string,
) => {
  if (error instanceof HttpError) {
    const field = error instanceof ConflictError ? error.field : undefined;
    res
      .status(error.status)
      .json(
        errorBody(error.message, error.code, { field, params: error.params }),
      );
    return;
  }

  switch (getPrismaCode(error)) {
    case "P2002":
      res
        .status(409)
        .json(errorBody("Such a record already exists", "record_exists"));
      return;
    case "P2003":
      res
        .status(400)
        .json(
          errorBody("Referenced record does not exist", "reference_missing"),
        );
      return;
    case "P2025":
      res.status(404).json(errorBody("Record not found", "record_not_found"));
      return;
  }

  console.error(fallbackMessage, error);
  res.status(500).json(errorBody(fallbackMessage, "internal"));
};
