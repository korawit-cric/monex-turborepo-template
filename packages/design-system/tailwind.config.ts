import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { customHeight, customWidth } from "./design-constants";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  // darkMode: ["class"], // Add dark mode
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontSize: {
      sm: [
        "var(--font-size-sm, 14px)",
        { lineHeight: "var(--line-height-sm, 1.25rem)" },
      ],
      base: [
        "var(--font-size-base, 16px)",
        { lineHeight: "var(--line-height-base, 1.5rem)" },
      ],
      lg: [
        "var(--font-size-lg, 20px)",
        { lineHeight: "var(--line-height-lg, 1.75rem)" },
      ],
      xl: [
        "var(--font-size-xl, 24px)",
        { lineHeight: "var(--line-height-xl, 2rem)" },
      ],
      "2xl": [
        "var(--font-size-2xl, 30px)",
        { lineHeight: "var(--line-height-2xl, 2.25rem)" },
      ],
      "3xl": [
        "var(--font-size-3xl, 36px)",
        { lineHeight: "var(--line-height-3xl, 2.5rem)" },
      ],
      "4xl": [
        "var(--font-size-4xl, 48px)",
        { lineHeight: "var(--line-height-4xl, 1)" },
      ],
      "5xl": [
        "var(--font-size-5xl, 60px)",
        { lineHeight: "var(--line-height-5xl, 1)" },
      ],
      header: [
        "var(--font-size-header, 36px)",
        { lineHeight: "var(--line-height-header, 1.1)" },
      ],
    },
    fontFamily: {
      primary: ["var(--font-primary)", ...fontFamily.sans],
      secondary: ["var(--font-secondary)", ...fontFamily.sans],
      tertiary: ["var(--font-secondary)", ...fontFamily.sans],
    },
    // Replace default colors
    colors: {
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      colors: {
        // Design System Colors
        primary: {
          lightest: "var(--primary-lightest)",
          lighter: "var(--primary-lighter)",
          light: "var(--primary-light)",
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
          darker: "var(--primary-darker)",
          darkest: "var(--primary-darkest)",
        },
        secondary: {
          lightest: "var(--secondary-lightest)",
          lighter: "var(--secondary-lighter)",
          light: "var(--secondary-light)",
          DEFAULT: "var(--secondary)",
          dark: "var(--secondary-dark)",
          darker: "var(--secondary-darker)",
          darkest: "var(--secondary-darkest)",
        },
        tertiary: {
          lightest: "var(--tertiary-lightest)",
          lighter: "var(--tertiary-lighter)",
          light: "var(--tertiary-light)",
          DEFAULT: "var(--tertiary)",
          dark: "var(--tertiary-dark)",
          darker: "var(--tertiary-darker)",
          darkest: "var(--tertiary-darkest)",
        },
        noir: {
          dark: {
            "01": "var(--noir-dark-01)",
            "02": "var(--noir-dark-02)",
            "03": "var(--noir-dark-03)",
            "04": "var(--noir-dark-04)",
            "05": "var(--noir-dark-05)",
          },
          light: {
            "05": "var(--noir-light-05)",
            "04": "var(--noir-light-04)",
            "03": "var(--noir-light-03)",
            "02": "var(--noir-light-02)",
            "01": "var(--noir-light-01)",
          },
        },
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Semantic UI status colors
        success: {
          light: "var(--success-light)",
          DEFAULT: "var(--success)",
          dark: "var(--success-dark)",
        },
        info: {
          light: "var(--info-light)",
          DEFAULT: "var(--info)",
          dark: "var(--info-dark)",
        },
        warning: {
          light: "var(--warning-light)",
          DEFAULT: "var(--warning)",
          dark: "var(--warning-dark)",
        },
        error: {
          light: "var(--error-light)",
          DEFAULT: "var(--error)",
          dark: "var(--error-dark)",
        },

        // Shadcn-ui colors
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
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

        // Custom gradient colors
        gradient: {
          start: "var(--gradient-start)",
          middle: "var(--gradient-middle)",
          end: "var(--gradient-end)",
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
      maxHeight: {
        ...customHeight,
      },
      height: {
        ...customHeight,
      },
      minWidth: {
        ...customWidth,
      },
      maxWidth: {
        ...customWidth,
      },
      width: {
        ...customWidth,
      },
      // Add gradient utilities
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to right, var(--gradient-start), var(--gradient-end))",
        "gradient-secondary":
          "linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))",
        "gradient-radial":
          "radial-gradient(var(--gradient-start), var(--gradient-end))",
        "gradient-three-colors":
          "linear-gradient(to right, var(--gradient-start), var(--gradient-middle), var(--gradient-end))",
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
        // Add gradient utility classes
        ".gradient-text": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
          color: "transparent",
          "background-image":
            "linear-gradient(to right, var(--gradient-start), var(--gradient-end))",
        },
      });
    }),
  ],
} satisfies Config;

export default config;
