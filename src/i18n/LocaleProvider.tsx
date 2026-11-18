"use client";

import { useEffect, useState } from "react";
import { useSettingsStore } from "@/store/settingsStore";
import { LOCALE_COOKIE, type Locale } from "./locale";
import { writeLocaleCookie } from "./cookie";

// The cookie read on the server is the source of truth for the locale.
const LocaleProvider = ({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) => {
  useState(() => {
    useSettingsStore.setState({ locale });
  });

  useEffect(() => {
    if (
      !document.cookie
        .split("; ")
        .some((c) => c.startsWith(`${LOCALE_COOKIE}=`))
    ) {
      writeLocaleCookie(locale);
    }
  }, [locale]);

  return children;
};

export default LocaleProvider;
