import { MongoClient, ObjectId } from "mongodb";
import {
  Status,
  ActivityState,
  Member,
  FamilyGroup,
  Role,
  Team,
} from "./prisma/generated/client.js";
import prisma from "./prisma/clientInstance.js";

interface MongoMember {
  _id: ObjectId;
  first_name: string;
  last_name: string;
  birth_date?: Date;
  email?: string;
  telegram_link?: string;
  instagram_link?: string;
  facebookLink?: string;
  member_since: Date;
  course?: number;
  state?: string;
  status: string;
  phone_number?: string[];
  family?: string;
  mentor_name?: string;
}

interface MemberMapEntry {
  member: Member;
  mongoDoc: MongoMember;
  phoneNumbers: string[];
  familyGroupName?: string;
}

const STATUSES_MAP: Record<string, Status> = {
  Observer: Status.OBSERVER,
  Baby: Status.BABY,
  Full: Status.FULL,
  Alumni: Status.ALUMNI,
  President: Status.FULL,
  Treasurer: Status.FULL,
  Secretary: Status.FULL,
  VP4HR: Status.FULL,
  VP4PR: Status.FULL,
  VP4DS: Status.FULL,
  VP4IT: Status.BABY,
  VP4CR: Status.BABY,
};

const BOARD_STATUSES = [
  "President",
  "Treasurer",
  "Secretary",
  "VP4HR",
  "VP4PR",
  "VP4DS",
  "VP4IT",
  "VP4CR",
] as const;

const ACTIVITY_MAP: Record<string, ActivityState> = {
  Inactive: ActivityState.INACTIVE,
  Active: ActivityState.ACTIVE,
};

if (!process.env.MONGODB_URI) {
  console.error("Error: MONGODB_URI environment variable is not set");
  process.exit(1);
}

const mongoClient = new MongoClient(process.env.MONGODB_URI);

function transformMemberData(mongoMember: MongoMember) {
  return {
    name: `${mongoMember.first_name} ${mongoMember.last_name}`,
    birthday: mongoMember.birth_date ? new Date(mongoMember.birth_date) : null,
    email: mongoMember.email || null,
    status: STATUSES_MAP[mongoMember.status] || Status.OBSERVER,
    telegramLink: mongoMember.telegram_link || null,
    instagramLink: mongoMember.instagram_link || null,
    facebookLink: mongoMember.facebookLink || null,
    joinedAt: new Date(mongoMember.member_since),
    course:
      (typeof mongoMember.course === "number" && mongoMember.course) || null,
    activityState:
      ACTIVITY_MAP[mongoMember.state || ""] || ActivityState.INACTIVE,
  };
}

async function migrateData(): Promise<void> {
  try {
    // Connect to MongoDB
    await mongoClient.connect();
    console.log("✓ Connected to MongoDB");

    const db = mongoClient.db("infobook");
    const collection = db.collection<MongoMember>("users");

    // Fetch data from MongoDB
    const mongoData = await collection
      .find({ last_name: { $ne: "" }, first_name: { $ne: "" } })
      .toArray();
    console.log(`Found ${mongoData.length} records to migrate\n`);

    // Phase 1: Create members
    console.log("=== Phase 1: Creating members ===");
    const memberMap = new Map<string, MemberMapEntry>();
    let membersCreated = 0;
    let membersFailed = 0;

    for (const mongoDoc of mongoData) {
      const memberData = transformMemberData(mongoDoc);

      try {
        const member = await prisma.member.upsert({
          where: {
            name_status_joinedAt: {
              name: memberData.name,
              status: memberData.status,
              joinedAt: memberData.joinedAt,
            },
          },
          update: memberData,
          create: memberData,
        });

        memberMap.set(String(mongoDoc._id), {
          member,
          mongoDoc,
          phoneNumbers: mongoDoc.phone_number || [],
          familyGroupName: mongoDoc.family,
        });
        membersCreated++;
      } catch (error) {
        const err = error as Error;
        console.error(
          `✗ Failed to create member ${memberData.name}:`,
          err.message,
        );
        membersFailed++;
      }
    }
    console.log(
      `Members: ${membersCreated} created/updated, ${membersFailed} failed\n`,
    );

    // Phase 2: Add phone numbers
    console.log("=== Phase 2: Adding phone numbers ===");
    let phonesAdded = 0;

    for (const [_mongoId, { member, phoneNumbers }] of memberMap) {
      for (const phone of phoneNumbers) {
        if (!phone) continue;
        try {
          await prisma.phoneNumber.upsert({
            where: { phoneNumber: phone },
            update: {},
            create: {
              phoneNumber: phone,
              ownerId: member.id,
            },
          });
          phonesAdded++;
        } catch (error) {
          const err = error as Error;
          console.error(
            `✗ Failed to add phone for ${member.name}:`,
            err.message,
          );
        }
      }
    }
    console.log(`Phone numbers: ${phonesAdded} added\n`);

    // Phase 3: Create and assign family groups
    console.log("=== Phase 3: Creating and assigning family groups ===");

    // Collect all unique family group names
    const uniqueFamilyNames = new Set<string>();
    for (const [_mongoId, { familyGroupName }] of memberMap) {
      if (familyGroupName) {
        uniqueFamilyNames.add(familyGroupName);
      }
    }

    // Create family groups if they don't exist
    const familyGroupMap = new Map<string, FamilyGroup>();
    for (const familyName of uniqueFamilyNames) {
      try {
        // Check if family group already exists
        let familyGroup = await prisma.familyGroup.findFirst({
          where: { name: familyName },
        });

        // Create if it doesn't exist
        if (!familyGroup) {
          familyGroup = await prisma.familyGroup.create({
            data: {
              name: familyName,
            },
          });
          console.log(`✓ Created family group: ${familyName}`);
        }

        familyGroupMap.set(familyName, familyGroup);
      } catch (error) {
        const err = error as Error;
        console.error(
          `✗ Failed to create family group "${familyName}":`,
          err.message,
        );
      }
    }
    console.log(`Total family groups: ${familyGroupMap.size}`);

    // Assign members to family groups
    let familyGroupsSet = 0;
    for (const [_mongoId, { member, familyGroupName }] of memberMap) {
      if (!familyGroupName) continue;

      const familyGroup = familyGroupMap.get(familyGroupName);
      if (familyGroup) {
        try {
          await prisma.member.update({
            where: { id: member.id },
            data: { familyGroupId: familyGroup.id },
          });
          familyGroupsSet++;
        } catch (error) {
          const err = error as Error;
          console.error(
            `✗ Failed to set family group for ${member.name}:`,
            err.message,
          );
        }
      }
    }
    console.log(`Family groups: ${familyGroupsSet} members assigned\n`);

    // Phase 4: Set mentor relationships
    console.log("=== Phase 4: Setting mentor relationships ===");
    let mentorsSet = 0;
    let mentorsNotFound = 0;

    for (const [_mongoId, { member, mongoDoc }] of memberMap) {
      if (mongoDoc.mentor_name) {
        const mentorName = mongoDoc.mentor_name.trim();
        const mentorNameParts = mentorName
          .split(/\s+/)
          .filter((part) => part.length > 0);

        // Build search names array - include reversed name only if we have 2+ parts
        const searchNames = [mentorName];
        if (mentorNameParts.length >= 2) {
          searchNames.push(`${mentorNameParts[1]} ${mentorNameParts[0]}`);
        }

        try {
          const mentor = await prisma.member.findFirst({
            where: {
              name: {
                in: searchNames,
              },
            },
          });

          if (mentor) {
            await prisma.member.update({
              where: { id: member.id },
              data: { mentorId: mentor.id },
            });
            mentorsSet++;
          } else {
            console.warn(
              `⚠ Could not find mentor "${mentorName}" for ${member.name}`,
            );
            mentorsNotFound++;
          }
        } catch (error) {
          const err = error as Error;
          console.error(
            `✗ Failed to set mentor "${mentorName}" for ${member.name}:`,
            err.message,
          );
        }
      }
    }
    console.log(`Mentors: ${mentorsSet} set, ${mentorsNotFound} not found\n`);

    // Phase 5: Create board roles and positions
    console.log("=== Phase 5: Creating board roles and positions ===");
    const boardMembers = Array.from(memberMap.values()).filter(({ mongoDoc }) =>
      BOARD_STATUSES.includes(
        mongoDoc.status as (typeof BOARD_STATUSES)[number],
      ),
    );

    if (boardMembers.length > 0) {
      // Create board roles (using for...of to properly await)
      const boardRoles = new Map<string, Role>();
      for (const roleName of BOARD_STATUSES) {
        try {
          const role = await prisma.role.upsert({
            where: { name: roleName },
            update: {},
            create: {
              name: roleName,
            },
          });
          boardRoles.set(roleName, role);
        } catch (error) {
          const err = error as Error;
          console.error(`✗ Failed to create role ${roleName}:`, err.message);
        }
      }
      console.log(`Created ${boardRoles.size} board roles`);

      // Create VEIN BOARD team for 2025
      let veinBoard: Team;
      try {
        const existingBoard = await prisma.team.findFirst({
          where: {
            name: "VEIN Board",
            eventTypeId: null,
          },
        });
        if (existingBoard) {
          veinBoard = existingBoard;
        } else {
          veinBoard = await prisma.team.create({
            data: {
              name: "VEIN Board",
              startDate: new Date(2025, 0, 1),
              endDate: new Date(2025, 11, 31),
            },
          });
        }
        console.log("Created VEIN Board team");
      } catch (error) {
        const err = error as Error;
        console.error("✗ Failed to create VEIN BOARD team:", err.message);
        return;
      }

      // Create board member positions
      let positionsCreated = 0;
      for (const { member, mongoDoc } of boardMembers) {
        const status = mongoDoc.status;
        const role = boardRoles.get(status);

        if (role) {
          try {
            const existingPos = await prisma.memberPosition.findFirst({
              where: {
                memberId: member.id,
                roleId: role.id,
                teamId: veinBoard.id,
              },
            });
            if (!existingPos) {
              await prisma.memberPosition.create({
                data: {
                  memberId: member.id,
                  roleId: role.id,
                  teamId: veinBoard.id,
                  startDate: new Date("2025-02-08"),
                },
              });
            }
            positionsCreated++;
          } catch (error) {
            const err = error as Error;
            console.error(
              `✗ Failed to create position for ${member.name}:`,
              err.message,
            );
          }
        }
      }
      console.log(`Created ${positionsCreated} board positions\n`);
    } else {
      console.log("No board members found\n");
    }

    console.log("=== Migration completed successfully! ===");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await mongoClient.close();
    await prisma.$disconnect();
    console.log("Connections closed");
  }
}

// Run the migration
migrateData();
