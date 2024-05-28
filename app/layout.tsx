import type { Metadata } from "next";
import { Montserrat, Rubik, IBM_Plex_Sans_KR } from "next/font/google";

import { Providers } from "@/providers";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  variable: "--montserrat-text"
})

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  variable: "--rubik-text"
});

const ibmKR = IBM_Plex_Sans_KR({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  variable: "--ibm-kr-text"
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
      <body className={`${montserrat.variable} ${rubik.variable} ${ibmKR.variable} font-rubik`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
