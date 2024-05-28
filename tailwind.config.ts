import animatePlugin from 'tailwindcss-animate';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "var(--montserrat-text)",
        rubik: "var(--rubik-text)",
        ibmkr: "var(--ibm-kr-text)",
      }
    },
  },
  plugins: [
    animatePlugin
  ],
};
export default config;
