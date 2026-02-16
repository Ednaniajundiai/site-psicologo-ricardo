import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Azul Petróleo fosco
        secondary: "#749B84", // Verde Sálvia suave (custom hex)
        background: "#F9FAFB", // Off-white
        text: "#1F2937", // Dark gray for text
      },
      fontFamily: {
        serif: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;