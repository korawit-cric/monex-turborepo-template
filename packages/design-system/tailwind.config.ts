import baseConfig from "./tailwind.base.config";
import { customHeight, customWidth } from "./design-constants";

const config = {
  presets: [baseConfig],
  theme: {
    extend: {
      colors: {
        brand: {
          red: {
            DEFAULT: "var(--brand-red)",
            secondary: "var(--brand-red-secondary)",
          },
          blue: {
            DEFAULT: "var(--brand-blue)",
            secondary: "var(--brand-blue-secondary)",
            tertiary: "var(--brand-blue-tertiary)",
          },
          "blue-light": {
            DEFAULT: "var(--brand-blue-light)",
            secondary: "var(--brand-blue-light-secondary)",
            tertiary: "var(--brand-blue-light-tertiary)",
            quaternary: "var(--brand-blue-light-quaternary)",
          },
        },
        achrom: {
          dark: {
            DEFAULT: "var(--achrom-dark)",
            secondary: "var(--achrom-dark-secondary)",
            tertiary: "var(--achrom-dark-tertiary)",
          },
          light: {
            DEFAULT: "var(--achrom-light)",
            secondary: "var(--achrom-light-secondary)",
            tertiary: "var(--achrom-light-tertiary)",
          },
        },
      },
      minHeight: {
        ...customHeight,
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
    },
  },
};

export default config;
