import type { Config } from "tailwindcss";
import designSystemConfig from "@repo/design-system/tailwind.config.ts";

const config: Pick<Config, "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [designSystemConfig],
};

export default config;
