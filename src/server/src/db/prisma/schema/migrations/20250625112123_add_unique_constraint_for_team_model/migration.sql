/*
  Warnings:

  - A unique constraint covering the columns `[name,type,year]` on the table `teams` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "teams_name_type_year_key" ON "teams"("name", "type", "year");
