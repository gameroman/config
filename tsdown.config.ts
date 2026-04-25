import { defineConfig } from "tsdown";

export default defineConfig({
  copy: ["src/configs/biome", "src/configs/tsconfig"],
  dts: true,
  entry: {
    oxfmt: "./src/configs/oxfmt.ts",
    oxlint: "./src/configs/oxlint/default.ts",
    "oxlint/typeaware": "./src/configs/oxlint/typeaware.ts",
  },
  exports: {
    customExports(pkg) {
      return Object.assign(pkg, {
        "./biome": "./dist/biome/default.json",
        "./oxlint/ts": "./dist/oxlint/typeaware.mjs",
        "./ts": "./dist/tsconfig/default.json",
        "./ts/isolated": "./dist/tsconfig/isolated.json",
        "./tsconfig": "./dist/tsconfig/default.json",
        "./tsconfig/isolated": "./dist/tsconfig/isolated.json",
      });
    },
    enabled: true,
  },
});
