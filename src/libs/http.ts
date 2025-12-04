const http = async (
  endpoint: string,
  init?: RequestInit
): Promise<Response> => {
  // Use internal Docker URL for server-side, public URL for client-side
  const isServer = typeof window === "undefined";
  const baseUrl = isServer
    ? process.env.API_URL_INTERNAL || process.env.NEXT_PUBLIC_API_URL
    : process.env.NEXT_PUBLIC_API_URL;

  const url = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
      ...init,
    });

    return response;
  } catch (error) {
    console.error(`HTTP request failed for ${url}:`, error);
    throw error;
  }
};

export default http;
