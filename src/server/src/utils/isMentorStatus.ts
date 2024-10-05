import { Status } from "@prisma/client";

const isMentorStatus = (status: Status): boolean =>
  status === Status.FULL || status === Status.ALUMNI;

export default isMentorStatus;
