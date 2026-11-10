/** Whether a style is dark or light. The system preference (`prefers-color-scheme`) is one of these. */
export type ColorScheme = "dark" | "light";

/** One style (what other projects call a theme): a name, its scheme and the CSS custom properties it sets. */
export interface StyleDefinition {
  /** Lower-case identifier, stored and written to `<html data-style>`, for example `black`. */
  name: string;
  scheme: ColorScheme;
  /** CSS custom properties without the leading dashes, for example `{ background: "#000" }` → `--background`. */
  palette: Readonly<Record<string, string>>;
}

/** Every style a site offers, and how one is picked when the visitor hasn't chosen. */
export interface StyleConfiguration {
  /** Any number of dark and light styles. */
  styles: readonly StyleDefinition[];
  /** The style used for each system scheme when the choice is "system". */
  defaults: Readonly<Record<ColorScheme, string>>;
  /** The scheme used when the system preference is unknown, and before scripts run. */
  fallback: ColorScheme;
  /** Browser storage key that remembers a manual choice. */
  storageKey: string;
}

/** What the visitor picked: "system" (follow the device) or a style name. */
export type StyleChoice = string;
