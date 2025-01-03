import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,css}"],

  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        foreground: "var(--foreground)",
        mainColor: "#888aff",
        primary: "#6bcbb8",
        secondary: "#005d63",
        tertiary: "#ff8958",
      },
      fontSize: {
        xxl: "var(--font-XXL)",
        xl: "var(--font-XL)",
        l: "var(--font-L)",
        m: "var(--font-M)",
        s: "var(--font-S)",
        ms: "var(--font-MS)",
        mss: "var(--font-MSS)",
      },
      animation: {
        smoke: "smoke 30s infinite ",
        move: "move 6s infinite ease-in-out",
        moveReverse: "move-reverse 6s infinite ease-in-out",
      },
      keyframes: {
        smoke: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "10%": { transform: "translate(-10px, 15px) scale(1.05)" },
          "20%": { transform: "translate(25px, -20px) scale(1.5)" },
          "30%": { transform: "translate(-30px, 10px) scale(0.95)" },
          "40%": { transform: "translate(15px, 25px) scale(1.15)" },
          "50%": { transform: "translate(-20px, -25px) scale(1.35)" },
          "60%": { transform: "translate(30px, 15px) scale(1)" },
          "70%": { transform: "translate(-25px, -10px) scale(1.4)" },
          "80%": { transform: "translate(20px, -15px) scale(0.9)" },
          "90%": { transform: "translate(-15px, 30px) scale(1.4)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        move: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -15px) scale(1.1)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        moveReverse: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-20px, 15px) scale(0.9)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
      },
      boxShadow: {
        custom: "0px 0px 50px 0.1em #888aff",
      },
      screens: {
        desktop: { min: "1200px" },
        mobile: { max: "800px" },
      },

      // boxShadow: {
      //   "3d": "0 5px 15px rgba(0, 0, 0, 0.2), 0 20px 25px rgba(0, 0, 0, 0.2)", // Sombra 3D
      // },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
