import type { AppProps } from "next/app";

import { Providers } from "@/providers";
import { CommonContact, CommonMenu, CommonNavbar } from "@/layouts";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <CommonNavbar />
      <CommonMenu />
      <Component {...pageProps} />
      <CommonContact />
    </Providers>
  );
}
