-- CreateEnum
CREATE TYPE "ActivityState" AS ENUM ('ACTIVE', 'INACTIVE', 'EXCLUDED');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OBSERVER', 'BABY', 'FULL', 'ALUMNI');

-- CreateTable
CREATE TABLE "FamilyGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "founderId" TEXT,
    "photo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FamilyGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "email" TEXT,
    "familyGroupId" TEXT,
    "activityState" "ActivityState" NOT NULL DEFAULT 'ACTIVE',
    "status" "Status" NOT NULL DEFAULT 'OBSERVER',
    "course" INTEGER,
    "joinedAt" TIMESTAMP(3),
    "photo" TEXT,
    "mentorId" TEXT,
    "telegramLink" TEXT,
    "instagramLink" TEXT,
    "facebookLink" TEXT,
    "linkedinLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhoneNumber" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "PhoneNumber_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FamilyGroup_founderId_key" ON "FamilyGroup"("founderId");

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Member_telegramLink_key" ON "Member"("telegramLink");

-- CreateIndex
CREATE UNIQUE INDEX "Member_instagramLink_key" ON "Member"("instagramLink");

-- CreateIndex
CREATE UNIQUE INDEX "Member_facebookLink_key" ON "Member"("facebookLink");

-- CreateIndex
CREATE UNIQUE INDEX "Member_linkedinLink_key" ON "Member"("linkedinLink");

-- CreateIndex
CREATE UNIQUE INDEX "PhoneNumber_phoneNumber_key" ON "PhoneNumber"("phoneNumber");

-- AddForeignKey
ALTER TABLE "FamilyGroup" ADD CONSTRAINT "FamilyGroup_founderId_fkey" FOREIGN KEY ("founderId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_familyGroupId_fkey" FOREIGN KEY ("familyGroupId") REFERENCES "FamilyGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhoneNumber" ADD CONSTRAINT "PhoneNumber_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
