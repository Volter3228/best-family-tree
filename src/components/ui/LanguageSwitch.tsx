"use client";

import { twMerge } from "tailwind-merge";
import { LOCALES, type Locale } from "@/i18n/locale";
import { useLocale, useT } from "@/i18n/useT";
import { useSettingsStore } from "@/store/settingsStore";

const SHORT_LABELS: Record<Locale, string> = { uk: "UA", en: "EN" };

const LanguageSwitch = ({ className }: { className?: string }) => {
  const locale = useLocale();
  const setLocale = useSettingsStore((s) => s.setLocale);
  const t = useT().common;

  return (
    <div
      role="radiogroup"
      aria-label={t.language}
      className={twMerge(
        "flex rounded-full bg-surface/80 p-0.5 text-xs font-semibold shadow-md backdrop-blur-xl",
        className,
      )}
    >
      {LOCALES.map((value) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={locale === value}
          aria-label={t.languageNames[value]}
          onClick={() => setLocale(value)}
          className={twMerge(
            "rounded-full px-2.5 py-1 transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-green",
            locale === value
              ? "bg-accent-green text-white"
              : "text-foreground/60 hover:text-foreground",
          )}
        >
          {SHORT_LABELS[value]}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
