import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "var(--blue-950)",
          900: "var(--blue-900)",
          850: "var(--blue-850)",
          800: "var(--blue-800)",
          700: "var(--blue-700)",
          logo: "var(--blue-logo)",
          yellow: "var(--yellow)"
        },
        afc: {
          red: "var(--afc-red)",
          graphite: "var(--afc-graphite)",
          metal: "var(--afc-metal)"
        }
      },
      boxShadow: {
        hero: "0 36px 105px rgba(0, 0, 0, 0.38)",
        panel: "0 28px 90px rgba(0, 0, 0, 0.34)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
