/*
  Warnings:

  - Made the column `joinedAt` on table `members` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "members" ALTER COLUMN "joinedAt" SET NOT NULL;
