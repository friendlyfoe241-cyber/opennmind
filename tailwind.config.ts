import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sFPro: ["var(--font-sFPro)"],
        sFProRounded: ["var(--font-sFProRounded)"],
        inter: ["var(--font-inter)"],
        shadowsIntoLightTwo: ["var(--font-shadowsIntoLightTwo)"],
      },
      colors: {
        shadows: {
          line: "#ececec",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;