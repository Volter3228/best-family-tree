-- CreateEnum
CREATE TYPE "NameBadgeIcon" AS ENUM ('LION', 'BEST');

-- AlterTable
ALTER TABLE "members" ADD COLUMN     "nameBadgeIcon" "NameBadgeIcon";
