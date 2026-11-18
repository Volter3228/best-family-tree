type Params = Record<string, string | number | undefined>;

const platformLabels: Record<string, string> = {
  email: "Пошта",
  telegram: "Telegram",
  instagram: "Instagram",
  facebook: "Facebook",
  linkedin: "LinkedIn",
};

export const errors = {
  saveFailed: "Не вдалося зберегти. Спробуй ще раз",
  validation: () => "Перевір введені дані",
  sign_in_required: () => "Потрібно увійти",
  not_allowed: () => "Недостатньо прав",
  conflict: () => "Конфлікт даних",
  not_found: () => "Не знайдено",
  internal: () => "Щось пішло не так",
  record_exists: () => "Такий запис уже існує",
  reference_missing: () => "Пов'язаного запису не існує",
  record_not_found: () => "Запис не знайдено",
  demo_readonly: () => "У демо зміни не зберігаються",
  upload_rejected: () => "Не вдалося завантажити файл",
  image_only: () => "Можна завантажувати лише зображення",
  team_type_not_found: (p: Params) =>
    p.name ? `Тип команди «${p.name}» не знайдено` : "Тип команди не знайдено",
  team_create_event_only: () =>
    "Нову команду тут можна створити лише як випуск івенту",
  member_has_mentees: () =>
    "Спочатку перепризнач або видали менті цього учасника",
  contact_taken: (p: Params) => {
    const label = platformLabels[String(p.platform)];
    return label
      ? `${label} належить іншому учаснику`
      : "Цей контакт належить іншому учаснику";
  },
  team_type_in_use: () => "Тип використовують команди — спершу зміни їх",
  team_type_exists: () => "Тип команди з такою назвою вже існує",
  role_in_use: () => "Посаду використовують — спершу зміни її",
  role_exists: () => "Посада з такою назвою вже існує",
  role_not_found: () => "Посаду не знайдено",
  member_not_found: () => "Учасника не знайдено",
  mentor_not_found: () => "Ментора не знайдено",
  mentor_cycle: () =>
    "Учасника не можна призначити ментором самого себе чи свого менті",
  admin_only_member: () => "Цього учасника може редагувати лише адмін",
  team_not_found: () => "Команду не знайдено",
  team_exists: () => "Команда з такою назвою вже існує",
  team_in_other_type: (p: Params) =>
    p.name ? `Команда «${p.name}» уже є в іншому типі` : "Команда вже є в іншому типі",
  team_start_year_required: () => "Вкажи рік початку",
  team_name_required: () => "Вкажи назву команди",
  team_end_before_start: () => "Рік завершення не може бути раніше за рік початку",
  member_unknown: () => "Невідомий учасник",
  role_unknown: () => "Невідома посада",
  team_type_unknown: () => "Невідомий тип команди",
  positions_invalid: () => "Некоректні посади",
  too_many_requests: () => "Забагато спроб. Спробуй пізніше",
  invalid_email: () => "Некоректна пошта",
  invalid_code: () => "Невірний або застарілий код",
  challenge_not_found: () => "Спробу входу не знайдено",
  challenge_expired: () => "Спроба входу застаріла",
};
