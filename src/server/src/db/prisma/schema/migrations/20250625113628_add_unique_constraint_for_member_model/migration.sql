/*
  Warnings:

  - A unique constraint covering the columns `[email,name,status,birthday]` on the table `members` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "members_email_name_status_birthday_key" ON "members"("email", "name", "status", "birthday");
