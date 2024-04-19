import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { UIProvider } from "@yamada-ui/react";
import Navbar from "./_components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ポートフォリオ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <head></head>
      <body className={inter.className}>
        <Navbar />
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
