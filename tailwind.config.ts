import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,css}"],

  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        s: "var(--font-S)",
        ms: "var(--font-MS)",
        mss: "var(--font-MSS)",
      },
    },
  },
  plugins: [],
} satisfies Config;
