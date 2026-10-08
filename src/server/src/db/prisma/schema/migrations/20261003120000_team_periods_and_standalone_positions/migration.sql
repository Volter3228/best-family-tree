-- Teams own their period (in whole years) and can have their own logo
ALTER TABLE "teams" ADD COLUMN "iconUrl" TEXT;
ALTER TABLE "teams" ADD COLUMN "startYear" INTEGER;
ALTER TABLE "teams" ADD COLUMN "endYear" INTEGER;

-- Positions without a team keep an organisation and their own years
ALTER TABLE "member_positions" ADD COLUMN "organization" TEXT;
ALTER TABLE "member_positions" ADD COLUMN "startYear" INTEGER;
ALTER TABLE "member_positions" ADD COLUMN "endYear" INTEGER;

-- Team period: its own dates, otherwise the widest period of its members'
-- positions (the start from year/startDate, the end only where one was set)
UPDATE "teams"
SET "startYear" = EXTRACT(YEAR FROM "startDate")::int,
    "endYear" = EXTRACT(YEAR FROM "endDate")::int;

UPDATE "teams" t
SET "startYear" = COALESCE(t."startYear", p.min_year),
    "endYear" = COALESCE(t."endYear", p.max_year)
FROM (
  SELECT "teamId",
         MIN(COALESCE("year", EXTRACT(YEAR FROM "startDate")::int)) AS min_year,
         MAX(EXTRACT(YEAR FROM "endDate")::int) AS max_year
  FROM "member_positions"
  WHERE "teamId" IS NOT NULL
  GROUP BY "teamId"
) p
WHERE p."teamId" = t.id;

-- Standalone positions: move their dates to years
UPDATE "member_positions"
SET "startYear" = COALESCE("year", EXTRACT(YEAR FROM "startDate")::int),
    "endYear" = EXTRACT(YEAR FROM "endDate")::int
WHERE "teamId" IS NULL;

ALTER TABLE "teams" DROP COLUMN "startDate";
ALTER TABLE "teams" DROP COLUMN "endDate";
ALTER TABLE "teams" DROP COLUMN "iteration";

ALTER TABLE "member_positions" DROP COLUMN "year";
ALTER TABLE "member_positions" DROP COLUMN "startDate";
ALTER TABLE "member_positions" DROP COLUMN "endDate";
