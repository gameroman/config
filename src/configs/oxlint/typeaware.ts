import { defineConfig, type OxlintConfig } from "oxlint";

const config: OxlintConfig = defineConfig({
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules: {
    "prefer-node-protocol": "error",
    "no-var": "error",
    "no-unused-vars": "error",
    "no-this-alias": "error",
    "prefer-const": "error",
    "no-explicit-any": "error",

    "typescript/no-unnecessary-type-assertion": "error",
    "typescript/no-floating-promises": "error",
  },
});

export default config;
