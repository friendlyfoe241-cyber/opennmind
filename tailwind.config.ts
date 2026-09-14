import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sFPro: ["--font-sf-pro"],
        sFProRounded: ["--font-sf-pro-rounded"],
        inter: ["--font-inter"],
        shadowsIntoLightTwo: ["--font-shadows-into-light-two"],
      },
    },
  },
  plugins: [],
} satisfies Config;