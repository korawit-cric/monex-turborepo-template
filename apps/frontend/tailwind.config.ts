import sharedConfig from "@repo/tailwind-config";
import { customHeight, customWidth } from "./src/styles/custom";

const config = {
  presets: [sharedConfig],
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
};

export default config;
