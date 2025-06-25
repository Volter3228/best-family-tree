/*
  Warnings:

  - A unique constraint covering the columns `[name,status,joinedAt]` on the table `members` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "members_email_name_status_birthday_key";

-- CreateIndex
CREATE UNIQUE INDEX "members_name_status_joinedAt_key" ON "members"("name", "status", "joinedAt");
