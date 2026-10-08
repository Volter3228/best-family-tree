-- A team can still be running: it has a start year and no end yet.
-- Existing teams stay as they are (a start-only team is usually a one-year event).
ALTER TABLE "teams" ADD COLUMN "isOngoing" BOOLEAN NOT NULL DEFAULT false;
