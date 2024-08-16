import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xs: ["12px", "12px"],
        sm: ["14px", "14px"],
        base: ["16px", "16px"],
      },
      colors: {
        primary: {
          DEFAULT: "#2F80ED",
          dark: "#4F4F4F",
          light: "#E0E0E0",
          disabled: "#828282",
        },
        quick: {
          DEFAULT: "#2F80ED",
          inbox: "#8885FF",
          task: "#F8B76B",
          disabled: "#4F4F4F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
