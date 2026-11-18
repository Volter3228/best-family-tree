import type { Messages } from "../types";

export const memberInfo = {
  mentees: "Mentees",
  showAll: "Show all",
  positions: "Positions",
  showInTeam: "Show in team",
  mentor: "Mentor",
  memberSince: "Member since",
  birthday: "Birthday",
  addToCalendar: "Add to calendar",
  phone: "Phone",
  call: "Call",
  emailInGmail: "Email in Gmail",
  copy: "Copy",
  copied: "Copied",
  years: { one: "year", few: "years", many: "years", other: "years" },
  yearsShort: "y.",
  calendarTitle: (name: string) => `🎉 Birthday - ${name} 🎉`,
} satisfies Messages["memberInfo"];
