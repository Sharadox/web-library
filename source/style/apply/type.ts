import type { ColorScheme } from "@sharadox/web-library/style/definition/type";

/** The plain data `applyStyle` needs; it is serialized into the inline script, so it holds no functions. */
export interface StyleApplyData {
  storageKey: string;
  /** Style name → scheme. */
  schemes: Record<string, ColorScheme>;
  defaults: Record<ColorScheme, string>;
  fallback: ColorScheme;
  /** "system" or a style name: used when nothing is remembered. */
  defaultChoice: string;
}
