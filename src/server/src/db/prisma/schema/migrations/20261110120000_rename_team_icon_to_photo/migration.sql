-- Icons belong to team types; a team has its own photo. Rename keeps the data.
ALTER TABLE "teams" RENAME COLUMN "iconUrl" TO "photoUrl";
