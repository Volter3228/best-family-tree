-- Codes live 10 minutes and existing ones belong to no browser: drop them.
DELETE FROM "email_sign_in_codes";

-- DropIndex
DROP INDEX "email_sign_in_codes_email_idx";

-- AlterTable
ALTER TABLE "email_sign_in_codes" ADD COLUMN "browserHash" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "email_sign_in_codes_email_browserHash_idx" ON "email_sign_in_codes"("email", "browserHash");
