import type { FormatConfig } from "oxfmt";

const config: FormatConfig = {
  printWidth: 80,
  sortImports: {},
};

function defineConfig(options?: FormatConfig): FormatConfig {
  return { ...config, ...options };
}

export { config, defineConfig };
