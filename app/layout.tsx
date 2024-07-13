import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, Gothic_A1 } from "next/font/google";

import { Providers } from "@/providers";
import { montserrat, rubik, nanumSquare, alliance } from "@/utils";
import { Contact } from "@/layouts";

import "./globals.css";

const ibmKR = IBM_Plex_Sans_KR({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  variable: "--ibm-kr-text"
});

const gothicA1 = Gothic_A1({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  variable: "--gothic-ai-text"
});

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
      <body className={`${montserrat.variable} ${rubik.variable} ${ibmKR.variable} ${gothicA1.variable} ${nanumSquare.variable} ${alliance.variable} relative font-rubik overflow-x-hidden bg-[#232727]`}>
        <Providers>
          {children}
          <Contact />
        </Providers>
      </body>
    </html>
  );
}
