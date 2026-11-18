import { plural } from "@/i18n/plural";

const memberForms = {
  one: "учасник",
  few: "учасники",
  many: "учасників",
  other: "учасників",
};

export const search = {
  members: "Пошук учасника...",
  teams: "Пошук команди...",
  clear: "Очистити пошук",
  hiddenByFilters: (n: number) => `Ще ${n} приховано фільтрами`,
  nothingFound: "Нима таких...",
  memberCount: (n: number) => `${n} ${plural("uk", n, memberForms)}`,
};
