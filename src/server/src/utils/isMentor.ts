import { Member, Mentor } from "@/types";
import { Status } from "@prisma/client";

const isMentor = (member: Member | Mentor): member is Mentor =>
  member.status === Status.FULL || member.status === Status.ALUMNI;

export default isMentor;
