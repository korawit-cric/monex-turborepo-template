import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  // darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    theme: {
      fontSize: {
        sm: ["14px", "1.25rem"],
        base: ["16px", "1.25rem"],
        lg: ["20px", "1.25rem"],
        xl: ["24px", "1.25rem"],
        "2xl": ["30px", "1.25rem"],
        "3xl": ["36px", "1.25rem"],
        "4xl": ["48px", "1.25rem"],
        "5xl": ["60px", "1.25rem"],
        header: ["36px", "1.25rem"],
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: "var(--primary-light)",
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          light: "var(--secondary-light)",
          DEFAULT: "var(--secondary)",
          dark: "var(--secondary-dark)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          light: "var(--muted-light)",
          DEFAULT: "var(--muted)",
          dark: "var(--muted-dark)",
          foreground: "var(--muted-foreground)",
        },
        destructive: {
          light: "var(--destructive-light)",
          DEFAULT: "var(--destructive)",
          dark: "var(--destructive-dark)",
          foreground: "var(--destructive-foreground)",
        },
        accent: {
          light: "var(--accent-light)",
          DEFAULT: "var(--accent)",
          dark: "var(--accent-dark)",
          foreground: "var(--accent-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".center": {
          "@apply flex justify-center items-center": {},
        },
      });
    }),
  ],
} satisfies Config;

export default config;
