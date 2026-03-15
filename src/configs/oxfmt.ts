import { defineConfig, type FormatOptions } from "oxfmt";

const config: FormatOptions = defineConfig({
  printWidth: 80,
  sortImports: {},
});

export default config;
