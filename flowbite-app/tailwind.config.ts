import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#334155',
        accent: '#0E7490',
      },
      fontFamily: {
        body: ["var(--font-nunito-sans)"],
        display: ["var(--font-nunito)"]
      },
    },
  },
  plugins: [],
};
export default config;
