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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#00f0ff",
          dark: "#00b8cc",
        },
        secondary: {
          DEFAULT: "#a855f7",
          dark: "#7c3aed",
        },
        accent: {
          DEFAULT: "#10ff00",
          dark: "#0cc900",
        },
        dark: {
          DEFAULT: "#0a0a0a",
          lighter: "#1a1a1a",
          card: "#151515",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00f0ff, 0 0 10px #00f0ff" },
          "100%": { boxShadow: "0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
