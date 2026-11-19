-- CreateEnum
CREATE TYPE "SuggestionStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "members" ADD COLUMN     "featuredPositionId" TEXT,
ADD COLUMN     "nameBadgeTeamId" TEXT;

-- CreateTable
CREATE TABLE "edit_suggestions" (
    "id" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    "memberId" TEXT,
    "teamId" TEXT,
    "field" TEXT NOT NULL,
    "fromValue" TEXT,
    "toValue" TEXT,
    "authorMemberId" TEXT,
    "authorEmail" TEXT,
    "status" "SuggestionStatus" NOT NULL DEFAULT 'PENDING',
    "reviewerId" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "edit_suggestions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "edit_suggestions_status_createdAt_idx" ON "edit_suggestions"("status", "createdAt");

-- CreateIndex
CREATE INDEX "edit_suggestions_authorMemberId_status_idx" ON "edit_suggestions"("authorMemberId", "status");

-- CreateIndex
CREATE INDEX "edit_suggestions_memberId_idx" ON "edit_suggestions"("memberId");

-- CreateIndex
CREATE INDEX "edit_suggestions_teamId_idx" ON "edit_suggestions"("teamId");

-- CreateIndex
CREATE UNIQUE INDEX "members_featuredPositionId_key" ON "members"("featuredPositionId");

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_featuredPositionId_fkey" FOREIGN KEY ("featuredPositionId") REFERENCES "member_positions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_nameBadgeTeamId_fkey" FOREIGN KEY ("nameBadgeTeamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "edit_suggestions" ADD CONSTRAINT "edit_suggestions_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "edit_suggestions" ADD CONSTRAINT "edit_suggestions_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

