import { defineConfig } from "tsdown";

export default defineConfig({
  copy: ["src/configs/biome"],
  dts: true,
  entry: {
    oxfmt: "./src/configs/oxfmt.ts",
    oxlint: "./src/configs/oxlint/default.ts",
    "oxlint/typeaware": "./src/configs/oxlint/typeaware.ts",
  },
  exports: {
    customExports(pkg) {
      pkg["./biome"] = "./dist/biome/default.json";
      return pkg;
    },
    enabled: true,
  },
});
