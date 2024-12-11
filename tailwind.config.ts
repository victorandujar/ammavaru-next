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
        smoke: "smoke 10s infinite", // Animación para el humo
      },
      keyframes: {
        smoke: {
          "0%": { transform: "translate(-10%, -10%) scale(1)" },
          "50%": { transform: "translate(10%, 10%) scale(1.1)" },
          "100%": { transform: "translate(-10%, -10%) scale(1)" },
        },
      },
      // boxShadow: {
      //   "3d": "0 5px 15px rgba(0, 0, 0, 0.2), 0 20px 25px rgba(0, 0, 0, 0.2)", // Sombra 3D
      // },
    },
  },
  plugins: [],
} satisfies Config;
