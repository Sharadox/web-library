import { defaultStyleChoice, findStyle } from "@sharadox/web-library/style/definition";
import type { StyleConfiguration, StyleDefinition } from "@sharadox/web-library/style/definition/type";

const declarations = (style: StyleDefinition) =>
  [...Object.entries(style.palette).map(([key, value]) => `--${key}:${value}`), `color-scheme:${style.scheme}`].join(
    ";",
  );

/**
 * The CSS for every style, from the configuration alone: `[data-style="<name>"]` for each style, plus a fallback for
 * the moment before the inline script runs (or when scripts are off): the default style, or when the default
 * choice is "system", the style for the device's scheme.
 */
export function styleSheet(configuration: StyleConfiguration): string {
  const styles = configuration.styles.map((style) => `:root[data-style="${style.name}"]{${declarations(style)}}`);
  const initial = findStyle(configuration, defaultStyleChoice(configuration));
  // A fixed default style: that style until the script runs, whatever the device prefers.
  if (initial) return [`:root{${declarations(initial)}}`, ...styles].join("\n");
  const fallback = findStyle(configuration, configuration.defaults[configuration.fallback]);
  const other = configuration.fallback === "dark" ? "light" : "dark";
  const otherDefault = findStyle(configuration, configuration.defaults[other]);
  if (!fallback || !otherDefault) throw new Error("style configuration: a default style is missing");
  return [
    `:root{${declarations(fallback)}}`,
    `@media (prefers-color-scheme:${other}){:root:not([data-style]){${declarations(otherDefault)}}}`,
    ...styles,
  ].join("\n");
}
