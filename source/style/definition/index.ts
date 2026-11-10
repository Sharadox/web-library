import type { ColorScheme, StyleConfiguration, StyleDefinition } from "@sharadox/web-library/style/definition/type";

/** The choice that follows the device's light or dark setting. It is the default and is never stored. */
export const SYSTEM_STYLE = "system";
/** `<html>` attribute holding the style in use, for CSS (`[data-style="black"]`). */
export const STYLE_ATTRIBUTE = "data-style";
/** `<html>` attribute holding the visitor's choice ("system" or a style name), for the picker. */
export const STYLE_CHOICE_ATTRIBUTE = "data-style-choice";

/** Finds a style by name. */
export function findStyle(configuration: StyleConfiguration, name: string): StyleDefinition | undefined {
  return configuration.styles.find((style) => style.name === name);
}

/** The style shown for a choice: the chosen style, or for "system" (and unknown names) the default for the scheme. */
export function resolveStyle(
  configuration: StyleConfiguration,
  choice: string,
  systemScheme: ColorScheme | undefined,
): StyleDefinition {
  const chosen = choice === SYSTEM_STYLE ? undefined : findStyle(configuration, choice);
  if (chosen) return chosen;
  const style = findStyle(configuration, configuration.defaults[systemScheme ?? configuration.fallback]);
  if (!style)
    throw new Error(
      `style configuration: no style named "${configuration.defaults[systemScheme ?? configuration.fallback]}"`,
    );
  return style;
}
