# BEST Family Tree

A mentorship tree visualization app for the BEST (Board of European Students of Technology) volunteering organization. Displays mentor-mentee relationships in an interactive tree view.

## Tech Stack

- **Frontend**: Next.js, React, TailwindCSS, React Flow
- **Backend**: Express.js, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Infrastructure**: Docker Compose

## Prerequisites

- [Docker](https://www.docker.com/get-started) and Docker Compose
- Node.js 20+ (for local IDE support)

## Getting Started with Docker

### 1. Clone and configure environment

```bash
# Copy environment files
cp .env.example .env
cp src/server/.env.example src/server/.env
```

Edit `src/server/.env` and add your credentials:

```
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/best_family_tree
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MONGODB_URI=your_mongodb_uri  # Only needed for data migration
```

### 2. Start the application

```bash
docker compose up --build
```

### 3. Run database migrations

```bash
docker compose exec backend npm run prisma:migrate-dev
```

### 4. Access the app

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001/api

## IDE Setup (VSCode / Cursor)

To enable TypeScript IntelliSense and remove import errors in your IDE, install dependencies locally:

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd src/server
npm install

# Generate Prisma client for type definitions
npx prisma generate --schema=src/db/prisma/schema
```

> Note: Docker uses its own isolated `node_modules` at runtime. Local installation is only for IDE type checking.

## Available Commands

### Docker Commands

```bash
# Start all services
docker compose up

# Start in detached mode
docker compose up -d

# Rebuild containers
docker compose build

# Stop services
docker compose down

# Reset database (removes all data)
docker compose down -v
```

### Backend Commands (run inside container)

```bash
# Run Prisma migrations
docker compose exec backend npm run prisma:migrate-dev

# Open Prisma Studio (database GUI)
docker compose exec backend npm run prisma:studio

# Migrate data from MongoDB
docker compose exec backend npm run migrate:mongodb
```

## Demo mode (anonymized data)

A public-safe copy of the app: fake names, contacts and photos, easy sign-in
questions, and every edit refused. The tree structure is kept.

**Build the demo database** (once, or to refresh it; needs the dev Postgres running):

```bash
docker compose up -d postgres
docker exec best-family-tree-db createdb -U postgres best_family_tree_demo
docker exec best-family-tree-db pg_dump -U postgres -Fc best_family_tree | docker exec -i best-family-tree-db pg_restore -U postgres -d best_family_tree_demo --no-owner
cd src/server
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/best_family_tree_demo" npm run db:anonymize-demo -- --yes
```

The last step takes about 20 minutes, because it downloads AI-generated faces one at a time
and uploads them to Cloudinary. Add `--skip-photos` to skip them (members get no photo).
Restart the backend afterwards (`docker compose restart backend`): it caches the tree in
memory and does not notice changes made directly to the database.
The script refuses any database whose name does not contain `demo`, and it rolls back if
any real name, email, phone, handle or photo URL is left. To start over, drop the demo
database (`dropdb -U postgres best_family_tree_demo --force` inside the container) and repeat.

**Run the app on it:**

```bash
docker compose -f compose.yml -f compose.demo.yml up -d   # demo
docker compose up -d                                      # real data again
```

Sign in with the demo questions (capital of Ukraine, 2 + 2, ...) or with any email address.
Locally no mail is sent: the code is printed in the backend log (`docker compose logs -f backend`).

**Deploy it:** the same image, with `DEMO_MODE=true` and `DATABASE_URL` pointing at a
database whose name contains `demo`. Sign-in codes then need the Resend variables.

## Deployment

One Docker image (root `Dockerfile`) runs Next.js on `$PORT` and Express on `127.0.0.1:3001`;
Next proxies `/api/*` to Express, so the browser sees one origin. Current setup, all free tiers:
Render (Docker, Frankfurt, auto-deploy from `master`, health check `/api/health`), Neon Postgres 17
(direct connection string), Cloudinary for photos, Resend for sign-in emails on `mail.best-tree.app`
(Render blocks SMTP, so mail goes over HTTPS). The app is served on `best-tree.app`.

Required environment variables (names only; values live in Render and your local `.env`):

| Variable | Notes |
|---|---|
| `NODE_ENV=production`, `HOST=127.0.0.1`, `TRUST_PROXY_HOPS=2` | proxy chain: Render's load balancer plus the Next rewrite |
| `DATABASE_URL` | Neon direct string, `sslmode=require` |
| `AUTH_SECRET` | 32+ chars, unique per service (`openssl rand -base64 32`) |
| `CLIENT_ORIGIN` | `https://best-tree.app`; the API rejects other origins |
| `MAIL_TRANSPORT`, `MAIL_FROM`, `RESEND_API_KEY` | `console` (log only, local), `resend` or `gmail` |
| `CLOUDINARY_*` | photo storage |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | optional, set together: shows "Увійти через Google" (OAuth client, redirect `/api/auth/google/callback`) |
| `TELEGRAM_CLIENT_ID`, `TELEGRAM_CLIENT_SECRET` | optional, set together (bot ID and secret from BotFather → Bot Settings → Login Widget, OpenID Connect): shows "Увійти через Telegram"; redirect `/api/auth/telegram/callback`. Members are matched by the confirmed phone only; hidden in the demo |
| `DEMO_MODE=true` | optional, see above |

The server refuses to start in production with a missing or invalid value (`checkConfig`).
Migrations run on start (`prisma migrate deploy`). Free instances sleep after 15 minutes idle.

Admin scripts run from your laptop with the production URL passed inline, never stored in `.env`:
`DATABASE_URL="$(cat ~/.config/best-tree/neon-prod.url)" npm run auth:grant -- <memberId|name> <editor|admin|none>`
(also `auth:seed-questions`, `auth:import-emails`). Back up with `npm run db:backup-prod` weekly and
before any deploy that contains a migration (Neon free keeps only about 6 hours of history).

To make a demo of the same service, set `DATABASE_URL` to the demo database and `DEMO_MODE=true`.

## Backups

```bash
npm run db:backup-prod                              # dated dump of production in ~/backups/best-tree
npm run db:restore-local -- <file.dump> --yes       # replaces your LOCAL best_family_tree with it
```

## Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   ├── api/              # Frontend API calls
│   ├── libs/             # Utility libraries
│   ├── types/            # TypeScript types
│   └── server/           # Express.js backend
│       ├── src/
│       │   ├── db/       # Prisma schema & migrations
│       │   ├── utils/    # Backend utilities
│       │   └── index.ts  # Server entry point
│       └── package.json
├── compose.yml
├── Dockerfile.dev        # Frontend Docker config
└── package.json
```

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    compose.yml                        │
├─────────────────┬─────────────────┬─────────────────────────┤
│   frontend      │    backend      │      postgres           │
│   (Next.js)     │   (Express)     │   (PostgreSQL 16)       │
│   Port: 3000    │   Port: 3001    │   Port: 5432            │
│   Hot-reload    │   Hot-reload    │   Persistent volume     │
└─────────────────┴─────────────────┴─────────────────────────┘
```

## Docs

Tailwind - https://tailwindcss.com/docs/styling-with-utility-classes
PixiJS - https://pixijs.download/release/docs/index.html
PixiJS Guides - https://pixijs.com/8.x/guides/getting-started/intro
NextJS - https://nextjs.org/docs
React - https://react.dev/reference/react
GSAP - https://gsap.com/docs/v3/
Prisma - https://www.prisma.io/docs
NodeJS - https://nodejs.org/docs/latest/api/
ExpressJS - https://expressjs.com/en/guide/routing.html
Typescript - https://www.typescriptlang.org/docs/
Elkjs (nodes layouting) - https://github.com/kieler/elkjs
