import { Html, Head, Main, NextScript } from "next/document";

import { montserrat, rubik, nanumSquare, alliance } from "@/utils";

export default function Document() {
  console.log(nanumSquare.variable);
  

  return (
    <Html lang="en">
      <Head />
      <body className={`${montserrat.variable} ${rubik.variable} ${nanumSquare.variable} ${alliance.variable} relative font-rubik overflow-x-hidden bg-[#232727]`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
