-- Drop roleCategory from roles table
ALTER TABLE "roles" DROP COLUMN IF EXISTS "category";

-- Drop RoleCategory enum type
DROP TYPE IF EXISTS "RoleCategory";

-- Drop year from teams table
ALTER TABLE "teams" DROP COLUMN IF EXISTS "year";

-- Update unique index on teams (remove year from the index)
DROP INDEX IF EXISTS "teams_eventTypeId_year_name_key";
CREATE UNIQUE INDEX "teams_eventTypeId_name_key" ON "teams"("eventTypeId", "name");

-- Seed event_types
INSERT INTO "event_types" ("id", "name", "color", "createdAt", "updatedAt") VALUES
  (gen_random_uuid(), 'EJF', '#2a43ce', NOW(), NOW()),
  (gen_random_uuid(), 'BEST::HACKathOn', '#9ee53f', NOW(), NOW()),
  (gen_random_uuid(), 'Board', '#000000', NOW(), NOW()),
  (gen_random_uuid(), 'BEST Course', '#f97316', NOW(), NOW()),
  (gen_random_uuid(), 'CTF', '#e30000', NOW(), NOW()),
  (gen_random_uuid(), 'BTW', '#35afbe', NOW(), NOW())
ON CONFLICT ("name") DO NOTHING;
