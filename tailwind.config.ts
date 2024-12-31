import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";
import tailwindScrollBar from "tailwind-scrollbar"
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        handwriting: ['"Dancing Script"', "cursive"],
      },
      scrollbar: {
        thin: {
          track: "bg-gray-800",
          thumb: "bg-gray-600 hover:bg-gray-500",
        },
      },
    },
  },
  plugins: [scrollbarHide, tailwindScrollBar],
} satisfies Config;
