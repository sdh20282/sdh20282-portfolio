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
      keyframes: {
        thumbnailAppear: {
          '0%': { transform: `translate(0, 300px)` },
          '100%': { transform: `translate(0, 0)` }
        }
      },
      animation: {
        thumbnailAppear: `thumbnailAppear 0.8s cubic-bezier(0.455, 0.030, 0.155, 1.000) forwards`
      },
      fontFamily: {
        montserrat: "var(--montserrat-text)",
        rubik: "var(--rubik-text)",
        ibmkr: "var(--ibm-kr-text)",
      },
    },
  },
  plugins: [
    animatePlugin
  ],
};
export default config;
