-- Postgres does not index foreign keys on its own. These back the mentor tree
-- (mentees lookups), phone number loading and "positions of a role" lookups.
-- Indexes only: no data or column changes.
CREATE INDEX IF NOT EXISTS "members_mentorId_idx" ON "members"("mentorId");
CREATE INDEX IF NOT EXISTS "phone_numbers_ownerId_idx" ON "phone_numbers"("ownerId");
CREATE INDEX IF NOT EXISTS "member_positions_roleId_idx" ON "member_positions"("roleId");
