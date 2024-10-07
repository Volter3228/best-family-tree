export default function http(endpoint: string, init?: RequestInit) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, init);
}
