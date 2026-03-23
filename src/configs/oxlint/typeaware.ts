import type { OxlintConfig } from "oxlint";

import { defineConfig as defaultDefineConfig } from "./default";

const config: OxlintConfig = defaultDefineConfig({
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules: {
    "typescript/no-floating-promises": "error",
    "typescript/no-misused-promises": [
      "error",
      { checksVoidReturn: { arguments: false } },
    ],
    "typescript/no-unnecessary-type-assertion": "error",
  },
});

function defineConfig(options?: OxlintConfig): OxlintConfig {
  return {
    ...config,
    ...options,
    rules: { ...config.rules, ...options?.rules },
  };
}

export { config, defineConfig };
