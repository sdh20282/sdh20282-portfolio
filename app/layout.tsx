import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "@/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | sdh20282's Portfolio",
    default: "sdh20282's Portfolio",
  },
  description: "sdh20282's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
