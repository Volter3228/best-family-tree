import { familyMembers } from "@/constants/familyMembers";
import { FamilyMember } from "@/types/FamilyMember";

export const getAllFamilyMembers = (): FamilyMember[] => {
  return familyMembers.map((member) => new FamilyMember(member));
};
