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
        },
      },
      animation: {
        thumbnailAppear: `thumbnailAppear 0.8s cubic-bezier(0.455, 0.030, 0.155, 1.000) forwards`,
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        rubik: "var(--font-rubik)",
        nanumsquare: "var(--font-nanumsquare)",
        alliance: "var(--font-alliance)",
      },
      gridTemplateColumns: {
        'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
        'auto-fit-150': 'repeat(auto-fit, minmax(150px, 1fr))',
        'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fit-330': 'repeat(auto-fit, minmax(330px, 1fr))',
        'auto-fit-400': 'repeat(auto-fit, minmax(400px, 1fr))',
      },
    },
  },
  plugins: [
    animatePlugin
  ],
};
export default config;
