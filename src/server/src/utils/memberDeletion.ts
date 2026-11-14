import { ValidationError } from "./httpErrors.js";

// A member can be deleted only once no one is mentored by them any more.
export const MENTEES_BLOCK_DELETE_MESSAGE =
  "Спочатку перепризначте або видаліть менті цього учасника";

export const assertNoMentees = (menteeCount: number): void => {
  if (menteeCount > 0) throw new ValidationError(MENTEES_BLOCK_DELETE_MESSAGE);
};
