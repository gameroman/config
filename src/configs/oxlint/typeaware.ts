import type { OxlintConfig } from "oxlint";

import { defineConfig as extendDefaultConfig } from "./default";

const config: OxlintConfig = extendDefaultConfig({
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
    "typescript/no-unnecessary-condition": [
      "error",
      { allowConstantLoopConditions: true },
    ],
    "typescript/no-unnecessary-type-assertion": "error",
  },
});

function defineConfig(userConfig?: OxlintConfig): OxlintConfig {
  return {
    ...config,
    ...userConfig,
    options: { ...config.options, ...userConfig?.options },
    rules: { ...config.rules, ...userConfig?.rules },
  };
}

export { config, defineConfig };
