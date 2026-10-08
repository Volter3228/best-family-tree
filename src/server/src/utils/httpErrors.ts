import type { Response } from "express";

/** An error that maps straight to an HTTP status. */
export class HttpError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

// Well-formed input that is not acceptable.
export class ValidationError extends HttpError {
  constructor(message: string) {
    super(400, message);
  }
}

export class ConflictError extends HttpError {
  constructor(message: string) {
    super(409, message);
  }
}

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super(404, message);
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
    res.status(error.status).json({ error: error.message });
    return;
  }

  switch (getPrismaCode(error)) {
    case "P2002":
      res.status(409).json({ error: "Such a record already exists" });
      return;
    case "P2003":
      res.status(400).json({ error: "Referenced record does not exist" });
      return;
    case "P2025":
      res.status(404).json({ error: "Record not found" });
      return;
  }

  console.error(fallbackMessage, error);
  res.status(500).json({ error: fallbackMessage });
};
