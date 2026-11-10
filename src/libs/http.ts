export class UnauthorizedError extends Error {
  constructor() {
    super("Sign in required");
  }
}

export const http = async (
  endpoint: string,
  init?: RequestInit,
  isFormData?: boolean,
): Promise<Response> => {
  const isServer = typeof window === "undefined";
  // Browser: same-origin /api (Next rewrites it to Express). Server: direct.
  const baseUrl = isServer
    ? process.env.API_URL_INTERNAL || process.env.NEXT_PUBLIC_API_URL
    : "/api";

  const url = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...init,
      credentials: "same-origin",
      headers: isFormData
        ? init?.headers
        : { "Content-Type": "application/json", ...init?.headers },
    });

    // An expired or missing session sends the browser to the login page.
    // Auth calls handle their own 401s (wrong answers, "who am I").
    if (
      response.status === 401 &&
      !isServer &&
      !endpoint.startsWith("/auth/")
    ) {
      window.location.assign("/login?expired=1");
    }

    return response;
  } catch (error) {
    console.error(`HTTP request failed for ${url}:`, error);
    throw error;
  }
};

export default http;
