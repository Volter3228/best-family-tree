import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ReactFlowProvider } from "@xyflow/react";
import "./globals.css";
import "./animations.css";
import React from "react";

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
  drawer: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <ReactFlowProvider>
        <body className={`${nunito.className} antialiased`}>
          <div className="relative">{children}</div>
        </body>
      </ReactFlowProvider>
    </html>
  );
}
