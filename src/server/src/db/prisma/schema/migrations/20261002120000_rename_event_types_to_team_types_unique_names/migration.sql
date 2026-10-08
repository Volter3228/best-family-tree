-- 0. Drop the old unique indexes first: the data clean-up below (merging roles,
--    naming unnamed teams) could otherwise violate them half-way.
--    A member can hold the same role in the same team/year in separate stints.
DROP INDEX IF EXISTS "member_positions_memberId_roleId_teamId_year_key";
DROP INDEX IF EXISTS "teams_eventTypeId_name_key";

-- 1. Rename event_types -> team_types and add the isEvent flag
ALTER TABLE "event_types" RENAME TO "team_types";
ALTER TABLE "team_types" RENAME CONSTRAINT "event_types_pkey" TO "team_types_pkey";
ALTER INDEX "event_types_name_key" RENAME TO "team_types_name_key";
ALTER TABLE "team_types" ADD COLUMN "isEvent" BOOLEAN NOT NULL DEFAULT true;
-- Board is a lasting group, not a yearly event
UPDATE "team_types" SET "isEvent" = false WHERE "name" = 'Board';

ALTER TABLE "teams" RENAME COLUMN "eventTypeId" TO "teamTypeId";
ALTER TABLE "teams" RENAME CONSTRAINT "teams_eventTypeId_fkey" TO "teams_teamTypeId_fkey";

-- 2. Team types: merge names that only differ by case/whitespace, trim, and
--    enforce case-insensitive uniqueness
WITH ranked AS (
  SELECT id, lower(btrim("name")) AS key,
         ROW_NUMBER() OVER (PARTITION BY lower(btrim("name")) ORDER BY "createdAt", id) AS rn
  FROM "team_types"
), keepers AS (SELECT key, id FROM ranked WHERE rn = 1)
UPDATE "teams" t SET "teamTypeId" = k.id
FROM ranked r JOIN keepers k ON k.key = r.key
WHERE t."teamTypeId" = r.id AND r.rn > 1;

DELETE FROM "team_types" WHERE id IN (
  SELECT id FROM (
    SELECT id, ROW_NUMBER() OVER (PARTITION BY lower(btrim("name")) ORDER BY "createdAt", id) AS rn
    FROM "team_types"
  ) ranked WHERE rn > 1
);

UPDATE "team_types" SET "name" = btrim("name");
CREATE UNIQUE INDEX "team_types_name_lower_key" ON "team_types" (lower("name"));

-- 3. Roles: merge case/whitespace duplicates (a merged role is a leader role if
--    any duplicate was), trim, capitalise the first letter, case-insensitive unique
WITH ranked AS (
  SELECT id, lower(btrim("name")) AS key,
         ROW_NUMBER() OVER (PARTITION BY lower(btrim("name")) ORDER BY "createdAt", id) AS rn,
         bool_or("isLeaderPosition") OVER (PARTITION BY lower(btrim("name"))) AS any_leader
  FROM "roles"
)
UPDATE "roles" r SET "isLeaderPosition" = g.any_leader
FROM ranked g WHERE r.id = g.id AND g.rn = 1;

WITH ranked AS (
  SELECT id, lower(btrim("name")) AS key,
         ROW_NUMBER() OVER (PARTITION BY lower(btrim("name")) ORDER BY "createdAt", id) AS rn
  FROM "roles"
), keepers AS (SELECT key, id FROM ranked WHERE rn = 1)
UPDATE "member_positions" mp SET "roleId" = k.id
FROM ranked r JOIN keepers k ON k.key = r.key
WHERE mp."roleId" = r.id AND r.rn > 1;

DELETE FROM "roles" WHERE id IN (
  SELECT id FROM (
    SELECT id, ROW_NUMBER() OVER (PARTITION BY lower(btrim("name")) ORDER BY "createdAt", id) AS rn
    FROM "roles"
  ) ranked WHERE rn > 1
);

UPDATE "roles" SET "name" = upper(left(btrim("name"), 1)) || substr(btrim("name"), 2);
CREATE UNIQUE INDEX "roles_name_lower_key" ON "roles" (lower("name"));

-- 4. Teams: every team gets a name ("<type> <start year>" when it had none),
--    names become globally unique
UPDATE "teams" t
SET "name" = btrim(tt."name" || ' ' || COALESCE(EXTRACT(YEAR FROM t."startDate")::int::text, t."iteration"::text, ''))
FROM "team_types" tt
WHERE t."name" IS NULL AND t."teamTypeId" = tt.id;

UPDATE "teams" SET "name" = 'Team ' || "id" WHERE "name" IS NULL;
UPDATE "teams" SET "name" = btrim("name");

WITH ranked AS (
  SELECT id, ROW_NUMBER() OVER (PARTITION BY lower("name") ORDER BY "createdAt", id) AS rn
  FROM "teams"
)
UPDATE "teams" t SET "name" = t."name" || ' (' || r.rn || ')'
FROM ranked r WHERE t.id = r.id AND r.rn > 1;

ALTER TABLE "teams" ALTER COLUMN "name" SET NOT NULL;
CREATE UNIQUE INDEX "teams_name_key" ON "teams"("name");
CREATE UNIQUE INDEX "teams_name_lower_key" ON "teams" (lower("name"));
CREATE INDEX "teams_teamTypeId_idx" ON "teams"("teamTypeId");

-- 5. Plain indexes for the position look-ups
CREATE INDEX "member_positions_memberId_idx" ON "member_positions"("memberId");
CREATE INDEX "member_positions_teamId_idx" ON "member_positions"("teamId");
