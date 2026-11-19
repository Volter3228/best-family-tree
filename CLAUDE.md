## Stack & layout

- Client (repo root): Next.js 16 App Router (`src/app`), React 19, PixiJS 8 tree canvas (`src/components/membersTree`), Zustand stores (`src/store`), ELK layout in a Web Worker (`src/workers/layout`, `src/libs/elk.ts`).
- Server (`src/server`): Express 5 + Prisma/PostgreSQL. Routes per domain in `src/server/src/routes/`.
- Domain vocabulary: `GLOSSARY.md`. Read it before naming anything.

## Commands

- Client dev: `npm run dev`. Server: `cd src/server && npm run serve`.
- Before finishing: `npm run typecheck`, `npm run lint`, `npm test`, `cd src/server && npx tsc --noEmit`, and `cd src/server && npm test` if you touched server code.
- **Every time you add or change a server dependency** (`npm install` in `src/server`), in the same turn run `docker compose up -d --build -V --no-deps backend` (the container has its own `node_modules` volume), then check `docker compose logs --tail 20 backend` for errors. Never hand the user a backend that can't start.
- After changing the Prisma schema: `cd src/server && npm run prisma:generate`.

## Do not read or edit

- `graphify-out/graph.json` (2.4 MB; query it instead), `graphify-out/cache/`
- `node_modules/`, `.next/`, `src/server/dist/`, `package-lock.json`, `*.tsbuildinfo`
- `src/server/src/db/prisma/generated/`: generated. Edit `schema.prisma` and regenerate.
- Existing files in `src/server/src/db/prisma/schema/migrations/`: add a new migration instead.
- `.env*`: contains secrets. Refer to variable names only.

## Graphify

- For codebase questions, run `graphify query "<question>"` (or `path` / `explain`) before grep or raw source reads. Output is capped at ~2000 tokens; narrow the question or pass `--budget N` if answers are cut off.
- Read raw files only for lines the graph already located. Read `graphify-out/GRAPH_REPORT.md` only for broad architecture review.
- After code changes, run `graphify update .`. If the graph and the source disagree, trust the source.
- Put these rules in every subagent prompt that explores code.
- Large `graph.json` diffs in PRs are expected. Do not flag them.

## Delegating to subagents

Subagents start with no context, and every token they spend re-discovering things is paid by the user. Hand over what you already know.

- Give exact file paths, and line numbers or symbol names when you have them, taken from your context or earlier agent reports. Tell the agent to edit those files directly. Do not ask it to "find every place" when you, or an earlier report, already listed the places.
- Only send an agent exploring (graphify/grep) when the locations really are unknown. If you know most of the files, list them and ask it to grep only for stragglers.
- Paste the decisions and the exact strings, signatures or APIs it needs into the prompt. Do not make it read CLAUDE.md, GLOSSARY.md or long scratchpad files to find a few facts. Quote only the rules that apply to the task, e.g. CRLF for the files it edits, or the 250-line split.
- Scope verification to the change. For small edits, run typecheck plus the affected tests. Run the full lint, test, prettier and `graphify update` once, in the final pass, not in every agent.
- Do small follow-up corrections (a few known files, label or wording tweaks) in one tight agent with a short prompt, or by resuming the agent that wrote the code (SendMessage). Resuming keeps its context, so it does not start cold.
- Ask for short reports: files changed, check results, and open questions. No restating of the task.

## Conventions

- Tests: the root Vitest config picks up only `src/**/*.test.ts`, not `.tsx`. Test pure rules and cache/util logic, not rendering.
- Line endings are mixed: many files are CRLF. Keep each file's existing endings. Prefer Edit/Write; if you script an edit (Python, sed), open with `newline=''` and check `git diff --stat` shows only the lines you changed, not the whole file.
- Editing a member follows the completeness rule in `GLOSSARY.md`: never clear a stored field, and never require fields the record never had.
- When you edit a non-generated file over 250 lines, split it as part of that change. Do not do unrelated refactors.
- Ask before schema or migration changes, data-changing scripts, or anything irreversible. For other doubts, ask when the answer would change the outcome; otherwise state your assumption and proceed.
- Add comments only when it's very important and can help in the future code maintenance.
- Year and date ranges shown in the UI use an en dash with a space on each side: `2019 – 2022`, never `2019–2022` or `2019-2022`.

## Run & browser testing (WSL2 + Windows Chrome)

- Code and dev servers run in WSL; Chrome runs on Windows. WSL uses mirrored networking, so `localhost` is shared: Windows Chrome opens `http://localhost:3000` (client); the API is on `:3001`.
- Start servers yourself in the background (`npm run dev`; `cd src/server && npm run serve` if the API is needed) and wait until `curl -s localhost:3000` answers. Don't ask the user to start anything.
- Browser MCPs (`.mcp.json`: `playwright`, `chrome-devtools`) attach over CDP to Windows Chrome at `127.0.0.1:9222`. Their wrappers (`~/.local/bin/*-mcp-win.sh`) run `~/.local/bin/ensure-win-chrome.sh`, which launches Chrome through `powershell.exe` (profile `C:\temp\chrome-debug`) when the port is down. The MCP tools may be deferred or still connecting: load them with ToolSearch. Never launch a Linux browser.
- If the browser is unreachable: `curl -s 127.0.0.1:9222/json/version` should return JSON; otherwise run `~/.local/bin/ensure-win-chrome.sh`.
- Sign-in bypass for testing: with the local docker backend (`compose.yml` sets `DEV_LOGIN=true`), navigate the browser to `http://localhost:3000/api/auth/dev-login?level=ADMIN` (or `EDITOR`, `VIEWER`; optional `&next=/path`). It sets the session cookie and redirects. It refuses production and any non-local `DATABASE_URL` (also at boot, via `checkConfig`). Never set `DEV_LOGIN` in `compose.prod.yml`/Render.
- Mobile checks: emulate Pixel 10 (~412px wide, DPR 2.6) in the browser's emulate/resize tool.

## Deployment & data

- Production: Render (one Docker image) + Neon + Cloudinary + Resend; see README "Deployment". Local `.env` must never point at production: pass the Neon URL inline for admin scripts (`~/.config/best-tree/*.url`, never print them).
- Demo: `DEMO_MODE=true` on a database whose name contains `demo`; build it with `cd src/server && npm run db:anonymize-demo` (README). The backend caches the tree in memory: restart it after changing the database directly.
- Ask before writing to Neon or running scripts that change data.
- `pkill -f` in a shell command can kill that shell; find the pid with `ss -ltnp` instead.
