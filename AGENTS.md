## Stack & layout

- Client (repo root): Next.js 16 App Router (`src/app`), React 19, PixiJS 8 tree canvas (`src/components/membersTree`), Zustand stores (`src/store`), ELK layout in a Web Worker (`src/workers/layout`, `src/libs/elk.ts`).
- Server (`src/server`): Express 5 + Prisma/PostgreSQL. Routes per domain in `src/server/src/routes/`.
- Domain vocabulary: `GLOSSARY.md`. Read it before naming anything.

## Commands

- Client dev: `npm run dev`. Server: `cd src/server && npm run serve`.
- Before finishing: `npm run typecheck`, `npm run lint`, `npm test`, `cd src/server && npx tsc --noEmit`, and `cd src/server && npm test` if you touched server code.
- After changing the Prisma schema: `cd src/server && npm run prisma:generate`.

## Do not read or edit

- `graphify-out/graph.json` (2.4 MB; query it instead), `graphify-out/cache/`
- `node_modules/`, `.next/`, `src/server/dist/`, `package-lock.json`, `*.tsbuildinfo`
- `src/server/src/db/prisma/generated/`: generated. Edit `schema.prisma` and regenerate.
- Existing files in `src/server/src/db/prisma/schema/migrations/`: add a new migration instead.
- `.env*`: contains secrets. Refer to variable names only.

## Graphify

- For codebase questions, run `graphify query "<question>"` (or `path` / `explain`) before grep or raw source reads. Output is capped at ~2000 tokens; narrow the question or pass `--budget N` if answers are cut off.
- Read raw files only for lines the graph already located. Read `GRAPH_REPORT.md` only for broad architecture review.
- After code changes, run `graphify update .`. If the graph and the source disagree, trust the source.
- Put these rules in every subagent prompt that explores code.
- Large `graph.json` diffs in PRs are expected. Do not flag them.

## Conventions

- Tests: the root Vitest config picks up only `src/**/*.test.ts`, not `.tsx`. Test pure rules and cache/util logic, not rendering.
- Editing a member follows the completeness rule in `GLOSSARY.md`: never clear a stored field, and never require fields the record never had.
- When you edit a non-generated file over 250 lines, split it as part of that change. Do not do unrelated refactors.
- Ask before schema or migration changes, data-changing scripts, or anything irreversible. For other doubts, ask when the answer would change the outcome; otherwise state your assumption and proceed.
