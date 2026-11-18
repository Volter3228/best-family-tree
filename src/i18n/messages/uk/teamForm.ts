import { plural } from "../../plural";

export const teamForm = {
  namePlaceholder: "Назва команди",
  chooseType: "Обери тип",
  period: "Період",
  deleteTeam: "Видалити команду",
  deleteTitle: "Видалити команду?",
  deleteMessage: "Команду буде видалено.",
  deleteWithPositions: (n: number) =>
    `Команду та ${n} ${plural("uk", n, { one: "посада", few: "посади", many: "посад", other: "посад" })} її учасників буде видалено.`,
  photoLabel: "Фото команди",
  removePhoto: "Прибрати фото",
  members: {
    title: "Учасники",
    newMember: "Новий учасник",
    remove: "Прибрати учасника",
    member: "Учасник",
    memberPlaceholder: "Імʼя",
    position: "Посада",
    add: "Додати учасника",
  },
  validation: {
    nameRequired: "Назва команди обов'язкова",
    nameOrType: "Вкажи назву команди або її тип",
    startYearRequired: (type: string) =>
      `Вкажи рік початку для «${type}» або назву команди`,
    ongoingStartYear: "Вкажи рік початку для команди, що триває",
    memberIncomplete:
      "Кожному учаснику потрібно обрати людину зі списку та посаду",
  },
  saveFailed: "Не вдалося зберегти команду",
  deleteFailed: "Не вдалося видалити команду",
};
