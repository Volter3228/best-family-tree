## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- When graphify-out/graph.json exists, run `graphify query "<question>"` before your first grep, search or source-file read for a codebase question, and put this rule in every subagent prompt that explores code. Read raw files only for lines the graph or an earlier read already located. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
- A committed graphify-out/graph.json is rewritten whole on every build, so a large diff to it in a pull request is expected. Do not flag it as churn or suggest skipping the graph rebuild or its hooks.

## Project conventions

- Read `GLOSSARY.md` for domain vocabulary (member, status, tree mode, ...) before naming things.
- Tests: `npm test` (client, Vitest) and `cd src/server && npm test` (server). Only add tests at agreed seams: pure rules and cache logic, not rendering.
- Checks before finishing: `npm run typecheck`, `npm run lint`, `npm test`, and `cd src/server && npx tsc --noEmit`.
- Editing a member follows the completeness rule (see glossary): never empty a stored required field, never demand fields the record never had.
