import type { Config } from "tailwindcss";
import { customHeight, customWidth } from "./src/styles/custom";
import baseConfig from "@repo/config-tailwind";

const config = {
  ...baseConfig,
  theme: {
    extend: {
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
} satisfies Config;

export default config;
