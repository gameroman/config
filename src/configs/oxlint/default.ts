import { defineConfig, type OxlintConfig } from "oxlint";

const config: OxlintConfig = defineConfig({
  rules: {
    "prefer-node-protocol": "error",
    "no-var": "error",
    "no-unused-vars": "error",
    "no-this-alias": "error",
    "prefer-const": "error",
    "no-explicit-any": "error",
  },
});

export default config;
