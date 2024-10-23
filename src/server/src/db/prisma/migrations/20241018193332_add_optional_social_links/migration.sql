/*
  Warnings:

  - A unique constraint covering the columns `[telegramLink]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[instagramLink]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[facebookLink]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[linkedinLink]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "facebookLink" TEXT,
ADD COLUMN     "instagramLink" TEXT,
ADD COLUMN     "linkedinLink" TEXT,
ADD COLUMN     "telegramLink" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Member_telegramLink_key" ON "Member"("telegramLink");

-- CreateIndex
CREATE UNIQUE INDEX "Member_instagramLink_key" ON "Member"("instagramLink");

-- CreateIndex
CREATE UNIQUE INDEX "Member_facebookLink_key" ON "Member"("facebookLink");

-- CreateIndex
CREATE UNIQUE INDEX "Member_linkedinLink_key" ON "Member"("linkedinLink");
