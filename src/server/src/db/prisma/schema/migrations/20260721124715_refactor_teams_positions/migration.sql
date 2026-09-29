-- Step 1: Add new columns to "teams" table
ALTER TABLE "teams" ADD COLUMN "eventTypeId" TEXT;
ALTER TABLE "teams" ADD COLUMN "iteration" INTEGER;
ALTER TABLE "teams" ADD COLUMN "startDate" TIMESTAMP(3);
ALTER TABLE "teams" ADD COLUMN "endDate" TIMESTAMP(3);

-- Step 2: Add new columns to "event_types" table
ALTER TABLE "event_types" ADD COLUMN "color" TEXT;
ALTER TABLE "event_types" ADD COLUMN "iconUrl" TEXT;

-- Step 3: Add isLeaderPosition to "roles" table
ALTER TABLE "roles" ADD COLUMN "isLeaderPosition" BOOLEAN NOT NULL DEFAULT false;

-- Step 4: Add year to "member_positions" table
ALTER TABLE "member_positions" ADD COLUMN "year" INTEGER;

-- Step 5: Migrate data from "events" to "teams"
-- For each event, update the corresponding team with eventTypeId, iteration, startDate, endDate
UPDATE "teams" t
SET
  "eventTypeId" = e."eventTypeId",
  "iteration"   = e."iteration",
  "startDate"   = e."startDate",
  "endDate"     = e."endDate"
FROM "events" e
WHERE t."id" = e."teamId";

-- Step 6: Add foreign key constraint for teams.eventTypeId -> event_types.id
ALTER TABLE "teams" ADD CONSTRAINT "teams_eventTypeId_fkey" FOREIGN KEY ("eventTypeId") REFERENCES "event_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Step 7: Drop old unique index on teams (includes "type" column which will be removed)
DROP INDEX "teams_name_type_year_key";

-- Step 8: Add new unique index on teams
CREATE UNIQUE INDEX "teams_eventTypeId_year_name_key" ON "teams"("eventTypeId", "year", "name");

-- Step 9: Drop old unique index on member_positions
DROP INDEX "member_positions_memberId_roleId_teamId_key";

-- Step 10: Add new unique index on member_positions
CREATE UNIQUE INDEX "member_positions_memberId_roleId_teamId_year_key" ON "member_positions"("memberId", "roleId", "teamId", "year");

-- Step 11: Drop foreign keys from events table before dropping it
ALTER TABLE "events" DROP CONSTRAINT "events_eventTypeId_fkey";
ALTER TABLE "events" DROP CONSTRAINT "events_teamId_fkey";

-- Step 12: Drop the "events" table
DROP TABLE "events";

-- Step 13: Drop the "type" column from teams
ALTER TABLE "teams" DROP COLUMN "type";

-- Step 14: Drop the "TeamType" enum
DROP TYPE "TeamType";
