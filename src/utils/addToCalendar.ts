import Member from "@/models/Member";
import { format, getYear, isBefore, addYears, startOfDay } from "date-fns";

const getClosestBirthday = (birthday: Date): Date => {
  const currentYear = getYear(new Date());
  const today = startOfDay(new Date());

  const birthdayThisYear = new Date(
    currentYear,
    birthday.getMonth(),
    birthday.getDate()
  );

  // if birthday already passed this year, use next year
  return isBefore(birthdayThisYear, today)
    ? addYears(birthdayThisYear, 1)
    : birthdayThisYear;
};

export const generateGoogleCalendarLink = (member: Member): string => {
  const closestBirthdayDate = getClosestBirthday(member.birthday);
  const startDate = format(closestBirthdayDate, "yyyyMMdd");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `🎉День Народження - ${member.name}🎉`,
    dates: `${startDate}/${startDate}`,
    details: "",
    recur: "RRULE:FREQ=YEARLY", // Yearly event
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};
