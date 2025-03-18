import { fontFamily } from "tailwindcss/defaultTheme";
import baseConfig from "./tailwind.base.config";
import { customHeight, customWidth } from "./design-constants";

// Per-project config
const designSystemConfig = {
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        "schibsted-grotesk": [
          "var(--font-schibsted-grotesk)",
          ...fontFamily.sans,
        ],
      },
      colors: {
        "brand-red": {
          "01": "var(--brand-red-01)",
          "02": "var(--brand-red-02)",
        },
        "brand-blue": {
          "01": "var(--brand-blue-01)",
          "02": "var(--brand-blue-02)",
        },
        "brand-blue-light": {
          "01": "var(--brand-blue-light-01)",
          "02": "var(--brand-blue-light-02)",
          "03": "var(--brand-blue-light-03)",
          "04": "var(--brand-blue-light-04)",
        },
        noir: {
          dark: {
            "01": "var(--noir-dark-01)",
            "02": "var(--noir-dark-02)",
            "03": "var(--noir-dark-03)",
            "04": "var(--noir-dark-04)",
          },
          light: {
            "04": "var(--noir-light-04)",
            "03": "var(--noir-light-03)",
            "02": "var(--noir-light-02)",
            "01": "var(--noir-light-01)",
          },
        },
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

export default designSystemConfig;
