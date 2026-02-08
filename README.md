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
