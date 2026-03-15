import { defineConfig } from "oxlint";

export default defineConfig({
  rules: {
    "prefer-node-protocol": "error",
    "no-var": "error",
    "no-unused-vars": "error",
    "no-this-alias": "error",
    "prefer-const": "error",
    "no-explicit-any": "error",
  },
});
