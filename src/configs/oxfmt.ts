import type { OxfmtConfig } from "oxfmt";

const config: OxfmtConfig = { printWidth: 80, sortImports: true };

function defineConfig(options?: OxfmtConfig): OxfmtConfig {
  return { ...config, ...options };
}

export { config, defineConfig };
