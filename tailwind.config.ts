import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./theme.config.tsx"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#e10098",
        // primary: "#0077cc",
        "conf-black": "#0e031c",
        black: "#1b1b1b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - .5rem))",
          },
        },
      },
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
        "custom-base": "1em",
      }
    },
  },
  plugins: [typography],
  darkMode: ["class", 'html[class~="dark"]'],
}
export default config
