import { plural } from "../../plural";

export const teamTypeForm = {
  kindEvent: "Івент",
  kindOther: "Інше",
  kind: "Вид",
  namePlaceholder: "EJF",
  deleteTitle: "Видалити тип команди?",
  deleteMessage: (name: string) =>
    `Видалити «${name}»? Цю дію не можна скасувати.`,
  inUse: (n: number) =>
    plural("uk", n, {
      one: `Тип використовує ${n} команда — спершу зміни її`,
      few: `Тип використовують ${n} команди — спершу зміни їх`,
      many: `Тип використовують ${n} команд — спершу зміни їх`,
      other: `Тип використовують ${n} команд — спершу зміни їх`,
    }),
  usedByTeams: "Тип використовують команди — спершу зміни їх",
  nameRequired: "Назва обов'язкова",
  saveFailed: "Не вдалося зберегти тип",
  deleteFailed: "Не вдалося видалити тип",
  changeIcon: "Змінити іконку",
  removeIcon: "Прибрати іконку",
};
