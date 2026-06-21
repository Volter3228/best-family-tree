import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "./animations.css";
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
    <html lang="uk">
      <body
        className={`${nunito.className} antialiased`}
        suppressHydrationWarning
      >
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
