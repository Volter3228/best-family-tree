const http = async (
  endpoint: string,
  init?: RequestInit
): Promise<Response> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;

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
