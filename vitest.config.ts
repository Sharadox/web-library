import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const { name } = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8")) as { name: string };
const source = fileURLToPath(new URL("./source/", import.meta.url));

export default defineConfig({
  plugins: [react()],
  // The library imports itself by package name; in tests that resolves to the TypeScript source.
  resolve: { alias: [{ find: new RegExp(`^${name}/(.*)$`), replacement: `${source}$1` }] },
  test: {
    environment: "happy-dom",
    css: { modules: { classNameStrategy: "non-scoped" } },
    include: ["source/**/?(*-)unit-test.{ts,tsx}"],
    benchmark: { include: ["source/**/?(*-)benchmark-test.{ts,tsx}"] },
  },
});
