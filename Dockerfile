# Production image: Next.js (public port) + Express (127.0.0.1:3001) in one
# container. Nothing here is host-specific: any host that runs a Docker image
# and sets the environment variables can run it.

# --- deps: install both dependency trees (cached until a lockfile changes) ---
FROM node:22.15.1-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
WORKDIR /app/src/server
COPY src/server/package.json src/server/package-lock.json ./
RUN npm ci

# --- build: prisma client, Express (tsc), Next (standalone) ---
FROM node:22.15.1-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/src/server/node_modules ./src/server/node_modules
COPY . .
# `prisma generate` reads the config but never connects to this URL.
RUN cd src/server && DATABASE_URL="postgresql://build:build@localhost:5432/build" npx prisma generate && npx tsc --build
# Fixed at build time: the /api rewrite destination baked into the Next build.
ARG API_URL_INTERNAL=http://127.0.0.1:3001/api
ENV API_URL_INTERNAL=$API_URL_INTERNAL NEXT_TELEMETRY_DISABLED=1
RUN npm run build
# Production-only dependencies for Express (prisma stays: it runs migrations).
RUN cd src/server && npm ci --omit=dev

# --- runtime ---
FROM node:22.15.1-alpine AS runtime
# bash: start-prod.sh uses `wait -n`. openssl: the Prisma migration engine.
RUN apk add --no-cache bash openssl
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 \
    HOST=127.0.0.1 \
    API_URL_INTERNAL=http://127.0.0.1:3001/api
WORKDIR /app
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public
WORKDIR /srv/api
COPY --from=build --chown=node:node /app/src/server/dist ./dist
COPY --from=build --chown=node:node /app/src/server/node_modules ./node_modules
COPY --from=build --chown=node:node /app/src/server/package.json /app/src/server/prisma.config.ts ./
COPY --from=build --chown=node:node /app/src/server/src/db/prisma/schema ./src/db/prisma/schema
COPY --chown=node:node scripts/start-prod.sh /usr/local/bin/start-prod.sh
RUN chmod +x /usr/local/bin/start-prod.sh
USER node
# Only Next is public; the host's $PORT goes to it (see start-prod.sh).
EXPOSE 3000
CMD ["start-prod.sh"]
