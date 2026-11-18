import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { cookies, headers } from "next/headers";
import LocaleProvider from "@/i18n/LocaleProvider";
import { LOCALE_COOKIE, detectLocale, isLocale } from "@/i18n/locale";
import { ThemeProvider } from "@/context/ThemeContext";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { themeInitScript } from "@/utils/themeInitScript";
import { slideInScript } from "@/utils/navigateWithSlide";
import "./globals.css";
import "../styles/background.css";
import "../styles/animations.css";
import "../styles/brand-spinner.css";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker-overrides.css";
import "../styles/color-picker.css";

const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEST Family Tree",
  description: "Vouchik's Pet Project",
  icons: {
    icon: [
      { media: "(prefers-color-scheme: light)", url: "/images/lion.svg" },
      { media: "(prefers-color-scheme: dark)", url: "/images/lion-light.svg" },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieLocale = (await cookies()).get(LOCALE_COOKIE)?.value;
  const locale = isLocale(cookieLocale)
    ? cookieLocale
    : detectLocale((await headers()).get("accept-language"));
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${nunito.className} antialiased`}
        suppressHydrationWarning
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: slideInScript }} />
        <AuroraBackground />
        <LocaleProvider locale={locale}>
          <ThemeProvider>
            <div className="page-root relative z-1">{children}</div>
            <div id="datepicker-portal" />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
