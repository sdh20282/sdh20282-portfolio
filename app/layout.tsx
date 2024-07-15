import type { Metadata } from "next";

import { Providers } from "@/providers";
import { montserrat, rubik, nanumSquare, alliance } from "@/utils";
import { CommonNavbar, CommonMenu, CommonContact } from "@/layouts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - sdh20282",
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
      <body className={`${montserrat.variable} ${rubik.variable} ${nanumSquare.variable} ${alliance.variable} relative font-rubik overflow-x-hidden bg-[#232727]`}>
        <Providers>
          <CommonNavbar />
          <CommonMenu />
          {children}
          <CommonContact />
        </Providers>
      </body>
    </html>
  );
}
