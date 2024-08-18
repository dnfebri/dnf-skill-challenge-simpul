import type { Config } from "tailwindcss";

const size = {
  p22: "22px",
};

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
      gap: size,
      margin: size,
      padding: size,
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
        indicator: {
          orange: "#F8B76B",
          purple: "#8785FF",
          red: "#EB5757",
          yellow: "#F2C94C",
        },
        chats: {
          "bubble-orange": "#FCEED3",
          "bubble-purple": "#EEDCFF",
          "bubble-green": "#D2F2EA",
          "name-orange": "#E5A443",
          "name-purple": "#9B51E0",
          "name-green": "#43B78D",
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
