import type { StyleConfiguration } from "@sharadox/web-library/style/definition/type";

/** Two default styles plus a second dark one, for the style tests. */
export const CONFIGURATION: StyleConfiguration = {
  styles: [
    { name: "black", scheme: "dark", palette: { background: "#000", foreground: "#fff" } },
    { name: "white", scheme: "light", palette: { background: "#fff", foreground: "#000" } },
    { name: "midnight", scheme: "dark", palette: { background: "#001", foreground: "#eef" } },
  ],
  defaults: { dark: "black", light: "white" },
  fallback: "dark",
  storageKey: "style",
};
