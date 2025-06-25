/*
  Warnings:

  - A unique constraint covering the columns `[memberId,roleId,teamId]` on the table `member_positions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "member_positions_memberId_roleId_teamId_startDate_key";

-- CreateIndex
CREATE UNIQUE INDEX "member_positions_memberId_roleId_teamId_key" ON "member_positions"("memberId", "roleId", "teamId");
