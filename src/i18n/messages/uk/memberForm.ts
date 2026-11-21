import { plural } from "../../plural";

export const memberForm = {
  deleteMember: "Видалити учасника",
  deleteMemberTitle: "Видалити учасника?",
  deleteMemberMessage: (name: string) =>
    `Учасника «${name}» буде видалено разом з його посадами.`,
  deleteBlocked: (menteeCount: number) =>
    `Не можна видалити: перепризнач або видали менті (${menteeCount})`,
  minimalRecord: "Мінімальний запис",
  minimalRecordHint:
    "Для старих учасників, про яких мало відомо: обов'язкові лише ім'я, статус та день вступу, решта даних опціональні.",
  basics: "Основне",
  firstName: "Ім'я",
  firstNamePlaceholder: "В'ячеслав",
  lastName: "Прізвище",
  lastNamePlaceholder: "Українцев",
  birthday: "День народження",
  gender: "Стать",
  joinedAt: "День вступу",
  status: "Статус",
  activityState: "Стан активності",
  mentor: "Ментор",
  mentorPlaceholder: "Ментор Менторовенко",
  contacts: "Контакти",
  phoneNumber: "Номер телефону",
  socials: "Соцмережі",
  socialsHint:
    "Повне посилання або лише нікнейм, наприклад Vouchik або https://t.me/Vouchik. Символ @ на початку теж підійде.",
  positions: {
    title: "Посади",
    add: "Додати посаду",
    remove: "Видалити посаду",
    newPosition: "Нова посада",
    teamType: "Тип команди",
    teamName: "Назва команди",
    teamNamePlaceholder: "МО Команда",
    teamTypePlaceholder: "BTW",
    rolePlaceholder: "Президент",
    role: "Посада",
    leader: "Лідер",
    teamPeriod: (years: string) => `Роки команди: ${years || "не вказано"}`,
    activityStart: "Початок діяльності",
    activityEnd: "Кінець діяльності",
    organization: "Організація",
    organizationPlaceholder: "Міжнар",
    count: (n: number) =>
      `${n} ${plural("uk", n, { one: "посада", few: "посади", many: "посад", other: "посад" })}`,
  },
  validation: {
    required: "Обов'язкове поле.",
    invalidLink: "Некоректне посилання.",
    noSuchTeam:
      "Такої команди немає. Обери наявну або створи її у вкладці «Команди».",
    startYearRequired: (type: string) =>
      `Вкажи рік початку для «${type}» або назву команди.`,
    birthdayInvalid: "День народження некоректний.",
    joinedAtInvalid: "День вступу некоректний.",
    statusInvalid: "Некоректний статус.",
    mentorInvalid: "Некоректний ментор.",
    emailInvalid: "Некоректний email.",
    phoneInvalid: "Некоректний номер.",
  },
};
