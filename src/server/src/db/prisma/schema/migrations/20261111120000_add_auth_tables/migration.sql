-- CreateEnum
CREATE TYPE "AuthMethod" AS ENUM ('QUESTIONS', 'EMAIL', 'GOOGLE', 'TELEGRAM');

-- CreateEnum
CREATE TYPE "AccessLevel" AS ENUM ('EDITOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "AllowedEmailSource" AS ENUM ('GOOGLE_GROUP', 'MANUAL');

-- CreateTable
CREATE TABLE "auth_sessions" (
    "id" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "method" "AuthMethod" NOT NULL,
    "memberId" TEXT,
    "email" TEXT,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "auth_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sign_in_questions" (
    "id" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "acceptedAnswers" TEXT[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "sign_in_questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sign_in_challenges" (
    "id" TEXT NOT NULL,
    "questionIds" TEXT[],
    "solvedQuestionIds" TEXT[],
    "swapsLeft" INTEGER NOT NULL DEFAULT 1,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sign_in_challenges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "allowed_emails" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "source" "AllowedEmailSource" NOT NULL,

    CONSTRAINT "allowed_emails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_sign_in_codes" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "codeHash" TEXT NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "consumedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "email_sign_in_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "access_grants" (
    "id" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "level" "AccessLevel" NOT NULL,

    CONSTRAINT "access_grants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "auth_sessions_tokenHash_key" ON "auth_sessions"("tokenHash");

-- CreateIndex
CREATE INDEX "auth_sessions_memberId_idx" ON "auth_sessions"("memberId");

-- CreateIndex
CREATE INDEX "auth_sessions_method_idx" ON "auth_sessions"("method");

-- CreateIndex
CREATE UNIQUE INDEX "allowed_emails_email_key" ON "allowed_emails"("email");

-- CreateIndex
CREATE INDEX "email_sign_in_codes_email_idx" ON "email_sign_in_codes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "access_grants_memberId_key" ON "access_grants"("memberId");
