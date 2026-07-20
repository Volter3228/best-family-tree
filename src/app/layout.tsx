import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { themeInitScript } from "@/utils/themeInitScript";
import "./globals.css";
import "../styles/background.css";
import "../styles/animations.css";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker-overrides.css";

const nunito = Nunito({
  subsets: ["cyrillic-ext"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body
        className={`${nunito.className} antialiased`}
        suppressHydrationWarning
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <AuroraBackground />
        <ThemeProvider>
          <div className="relative z-1">{children}</div>
          <div id="datepicker-portal" />
        </ThemeProvider>
      </body>
    </html>
  );
}
