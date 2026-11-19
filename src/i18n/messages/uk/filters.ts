import { plural } from "@/i18n/plural";

const familyForms = {
  one: "сім'я",
  few: "сім'ї",
  many: "сімей",
  other: "сімей",
};
const roleForms = { one: "роль", few: "ролі", many: "ролей", other: "ролей" };
const memberForms = {
  one: "учасник",
  few: "учасники",
  many: "учасників",
  other: "учасників",
};
const teamForms = {
  one: "команда",
  few: "команди",
  many: "команд",
  other: "команд",
};

export const filters = {
  title: "Фільтри",
  clear: "Очистити фільтри",
  close: "Закрити фільтри",
  cancel: "Скасувати",
  show: (count: number) => `Показати ${count}`,
  memberCount: (n: number) => `${n} ${plural("uk", n, memberForms)}`,
  teamCount: (n: number) => `${n} ${plural("uk", n, teamForms)}`,
  categories: {
    dates: "Дати",
    member: "Учасник",
    teams: "Команди",
    roles: "Посади",
  },
  seasons: { spring: "Весна", autumn: "Осінь" },
  genders: { male: "Чоловіча", female: "Жіноча" },
  statuses: {
    observer: "Observer",
    baby: "Baby",
    full: "Full member",
    alumni: "Alumni",
  },
  activity: { active: "Active", inactive: "Inactive", excluded: "Excluded" },
  member: {
    status: "Статус",
    activityState: "Стан активності",
    gender: "Стать",
    family: "Сім'я",
    findFamily: "Знайти сім'ю",
    moreFamilies: (n: number) => `Ще ${n} ${plural("uk", n, familyForms)}`,
  },
  teams: {
    events: "Івенти",
    other: "Інше",
    teamTypes: "Типи команд",
    findTeamType: "Знайти тип команди",
    activityPeriod: "Період активності",
    activeNow: "Активні зараз",
  },
  roles: {
    title: "Посади",
    find: "Знайти роль",
    more: (n: number) => `Ще ${n} ${plural("uk", n, roleForms)}`,
  },
  dates: {
    recruitmentSeason: "Сезон вступу",
    joinYear: "Рік вступу",
    birthday: "День народження",
    from: "Від",
    to: "До",
    includeYear: "Враховувати рік",
  },
  list: { nothingFound: "Нічого не знайдено", collapse: "Згорнути" },
};
