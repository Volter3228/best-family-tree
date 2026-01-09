import type { Metadata } from "next";
import { Nunito } from "next/font/google";
// import { ReactFlowProvider } from "@xyflow/react";
import "./globals.css";
import "./animations.css";

const nunito = Nunito({
  subsets: ["cyrillic-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEST Family Tree",
  description: "Vouchik's Pet Project",
  icons: {
    icon: "/images/favicon.ico",
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
