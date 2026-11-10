import type { StyleConfiguration } from "@sharadox/web-library/style/definition/type";
import type { StyleApplyData } from "@sharadox/web-library/style/apply/type";

/** The configuration reduced to what `applyStyle` needs. */
export function styleApplyData(configuration: StyleConfiguration): StyleApplyData {
  return {
    storageKey: configuration.storageKey,
    schemes: Object.fromEntries(configuration.styles.map((style) => [style.name, style.scheme])),
    defaults: { ...configuration.defaults },
    fallback: configuration.fallback,
  };
}

/**
 * Writes the style to `<html>`: `data-style` (the style in use), `data-style-choice` and `color-scheme`.
 * Without a `choice` it reads the remembered one (or "system"). It is self-contained on purpose: the inline
 * script in `<head>` embeds its source, so the page never shows the wrong style before React loads.
 */
export function applyStyle(data: StyleApplyData, choice?: string): void {
  let wanted = choice;
  if (wanted === undefined) {
    try {
      wanted = localStorage.getItem(data.storageKey) || "system";
    } catch {
      wanted = "system";
    }
  }
  if (wanted !== "system" && !data.schemes[wanted]) wanted = "system";
  let name = wanted;
  if (wanted === "system") {
    let scheme = data.fallback;
    try {
      if (matchMedia("(prefers-color-scheme: light)").matches) scheme = "light";
      else if (matchMedia("(prefers-color-scheme: dark)").matches) scheme = "dark";
    } catch {
      // No media queries: keep the fallback.
    }
    name = data.defaults[scheme];
  }
  const root = document.documentElement;
  root.setAttribute("data-style", name);
  root.setAttribute("data-style-choice", wanted);
  root.style.colorScheme = data.schemes[name] ?? data.fallback;
}
