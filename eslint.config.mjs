import javaScript from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";
import typeScriptEslint from "typescript-eslint";

export default defineConfig([
  javaScript.configs.recommended,
  ...typeScriptEslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  prettier,
  globalIgnores(["documentation/**", "distribution/**"]),
]);
