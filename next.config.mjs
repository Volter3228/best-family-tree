// The browser talks to one origin: /api is proxied to the Express server.
const apiOrigin = (
  process.env.API_URL_INTERNAL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3001/api"
).replace(/\/api\/?$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Self-contained server bundle for the Docker image (`node server.js`).
  output: "standalone",
  // The Express server has its own node_modules; never trace it into the bundle.
  outputFileTracingExcludes: { "*": ["src/server/**"] },
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${apiOrigin}/api/:path*` }];
  },
};

export default nextConfig;
