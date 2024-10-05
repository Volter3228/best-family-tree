-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OBSERVER', 'BABY', 'FULL', 'ALUMNI');

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'OBSERVER';
