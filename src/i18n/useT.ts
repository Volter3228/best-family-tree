import { useSettingsStore } from "@/store/settingsStore";
import type { Locale } from "./locale";
import { messages, type Messages } from "./messages";

export const useLocale = (): Locale => useSettingsStore((s) => s.locale);

export const useT = (): Messages => messages[useLocale()];
