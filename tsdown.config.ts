import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    oxfmt: "./src/configs/oxfmt.ts",
    oxlint: "./src/configs/oxlint/default.ts",
    "oxlint/typeaware": "./src/configs/oxlint/typeaware.ts",
  },
  copy: ["./src/configs/biome.json"],
  dts: true,
  exports: {
    enabled: true,
    customExports(pkg) {
      pkg["./biome"] = "./dist/biome.json";
      return pkg;
    },
  },
});
