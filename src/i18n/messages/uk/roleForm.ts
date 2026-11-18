import { plural } from "../../plural";

export const roleForm = {
  name: "Назва",
  namePlaceholder: "Наприклад, Координатор",
  description: "Опис",
  leaderRole: "Лідерська посада",
  leaderRoleHint: "Учасників із такою посадою відзначено як лідерів команди.",
  usedBy: (n: number) =>
    `Використовується в ${n} ${plural("uk", n, {
      one: "учаснику",
      few: "учасниках",
      many: "учасниках",
      other: "учасниках",
    })}`,
  blockedByMembers: (n: number) =>
    plural("uk", n, {
      one: `Посаду використовує ${n} учасник — спершу зміни це`,
      few: `Посаду використовують ${n} учасники — спершу зміни їх`,
      many: `Посаду використовують ${n} учасників — спершу зміни їх`,
      other: `Посаду використовують ${n} учасників — спершу зміни їх`,
    }),
  deleteTitle: "Видалити посаду?",
  deleteMessage: "Посаду буде видалено.",
  nameRequired: "Назва обов'язкова",
  nameTaken: "Посада з такою назвою вже є",
  saveFailed: "Не вдалося зберегти посаду",
  deleteFailed: "Не вдалося видалити посаду",
};
