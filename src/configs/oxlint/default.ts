import type { OxlintConfig } from "oxlint";

const config: OxlintConfig = {
  rules: {
    "no-eval": "error",
    "no-explicit-any": "error",
    "no-this-alias": "error",
    "no-unused-vars": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-node-protocol": "error",
  },
};

function defineConfig(options?: OxlintConfig): OxlintConfig {
  return {
    ...config,
    ...options,
    rules: { ...config.rules, ...options?.rules },
  };
}

export { config, defineConfig };
