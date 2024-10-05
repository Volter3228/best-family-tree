/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "FamilyGroup" ALTER COLUMN "photo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "email" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ALTER COLUMN "photo" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Member_phoneNumber_key" ON "Member"("phoneNumber");
