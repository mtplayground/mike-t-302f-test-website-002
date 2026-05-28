import type { Config } from "tailwindcss";

const semanticColor = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1180px",
      },
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: semanticColor("--color-accent"),
          contrast: semanticColor("--color-accent-contrast"),
          soft: semanticColor("--color-accent-soft"),
          strong: semanticColor("--color-accent-strong"),
        },
        background: semanticColor("--color-background"),
        border: semanticColor("--color-border"),
        foreground: semanticColor("--color-foreground"),
        muted: semanticColor("--color-muted"),
        ring: semanticColor("--color-ring"),
        surface: {
          DEFAULT: semanticColor("--color-surface"),
          raised: semanticColor("--color-surface-raised"),
        },
        support: {
          coral: semanticColor("--color-support-coral"),
          teal: semanticColor("--color-support-teal"),
        },
      },
      boxShadow: {
        panel: "0 18px 45px rgb(var(--shadow-panel) / 10%)",
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        sans: [
          "var(--font-sans)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        body: ["1rem", { lineHeight: "1.65" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "display-sm": [
          "clamp(2rem, 5vw, 3rem)",
          { lineHeight: "1.04", letterSpacing: "0" },
        ],
        "display-md": [
          "clamp(2.5rem, 6vw, 4rem)",
          { lineHeight: "1", letterSpacing: "0" },
        ],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        "section-sm": "clamp(3.5rem, 8vw, 5rem)",
        section: "clamp(5rem, 10vw, 7.5rem)",
      },
    },
  },
  plugins: [],
};

export default config;
