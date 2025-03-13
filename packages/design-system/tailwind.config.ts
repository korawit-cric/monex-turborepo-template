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
        noir: {
          dark: {
            DEFAULT: "var(--noir-dark)",
            secondary: "var(--noir-dark-secondary)",
            tertiary: "var(--noir-dark-tertiary)",
          },
          light: {
            DEFAULT: "var(--noir-light)",
            secondary: "var(--noir-light-secondary)",
            tertiary: "var(--noir-light-tertiary)",
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
