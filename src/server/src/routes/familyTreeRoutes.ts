import { Router } from "express";
import prisma from "../db/prisma/clientInstance.js";
import { Member as MemberType } from "../types/index.js";
import {
  transformMembersToTree,
  transformMemberPhoneNumbers,
} from "../utils/index.js";
import type { MemberWithPhoneNumberRecords } from "../utils/index.js";
import { createVersionedCache } from "../utils/readCache.js";
import { toMemberResponse } from "../auth/reducedView.js";

const router = Router();

// Flat, ordered list: each member once, mentors before their mentees. The
// client rebuilds the tree from `mentorId` and the order of the list.
const loadFamilyTree = createVersionedCache(async () => {
  const rawMembers = await prisma.member.findMany({
    include: {
      phoneNumbers: true,
      positions: {
        include: {
          role: true,
          team: { include: { teamType: true } },
        },
      },
    },
  });

  const members = rawMembers.map((m) =>
    transformMemberPhoneNumbers(m as MemberWithPhoneNumberRecords),
  ) as MemberType[];

  return JSON.stringify(transformMembersToTree(members));
});

// The same list without contacts, for Questions sessions.
const loadReducedFamilyTree = createVersionedCache(async () => {
  const { value } = await loadFamilyTree();
  const members = JSON.parse(value) as (MemberType & Record<string, unknown>)[];
  return JSON.stringify(
    members.map((m) => toMemberResponse(m, { method: "QUESTIONS" })),
  );
});

// Served from memory until any write happens; clients always revalidate
// (`no-cache`) and get a 304 while the data version is unchanged.
router.get("/family-tree", async (req, res) => {
  try {
    const reduced = req.session?.method === "QUESTIONS";
    const { value, version } = await (reduced
      ? loadReducedFamilyTree()
      : loadFamilyTree());
    res.set("Cache-Control", "private, no-cache");
    res.set("Vary", "Cookie");
    res.set("ETag", `W/"ft-${reduced ? "r" : "f"}${version}-${value.length}"`);
    if (req.fresh) {
      res.status(304).end();
      return;
    }
    res.status(200).type("json").send(value);
  } catch (error) {
    console.error("Failed to fetch family tree:", error);
    res.status(500).json({ error: "Failed to fetch family tree" });
  }
});

export default router;
