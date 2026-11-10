"use client";
import { useCallback, useMemo, useSyncExternalStore } from "react";
import { applyStyle, styleApplyData } from "@sharadox/web-library/style/apply";
import { defaultStyleChoice, STYLE_ATTRIBUTE, STYLE_CHOICE_ATTRIBUTE } from "@sharadox/web-library/style/definition";
import type { StyleConfiguration } from "@sharadox/web-library/style/definition/type";
import type { StyleState } from "@sharadox/web-library/style/use-style/type";

const subscribe = (notify: () => void) => {
  const observer = new MutationObserver(notify);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: [STYLE_ATTRIBUTE, STYLE_CHOICE_ATTRIBUTE],
  });
  return () => observer.disconnect();
};
const read = (attribute: string, fallback: string) => () =>
  document.documentElement.getAttribute(attribute) ?? fallback;

/** The visitor's style choice (the configuration's default until they pick one) and the style in use, kept in sync with `<html>`; `choose` remembers a new choice. */
export function useStyle(configuration: StyleConfiguration): StyleState {
  const initialChoice = defaultStyleChoice(configuration);
  // What the server renders: the default style, or for "system" the fallback scheme's default.
  const fallbackStyle = initialChoice === "system" ? configuration.defaults[configuration.fallback] : initialChoice;
  const choice = useSyncExternalStore(subscribe, read(STYLE_CHOICE_ATTRIBUTE, initialChoice), () => initialChoice);
  const style = useSyncExternalStore(subscribe, read(STYLE_ATTRIBUTE, fallbackStyle), () => fallbackStyle);
  const data = useMemo(() => styleApplyData(configuration), [configuration]);
  const choose = useCallback(
    (next: string) => {
      try {
        // The default choice needs no memory; any other choice (including "system") is remembered.
        if (next === data.defaultChoice) localStorage.removeItem(data.storageKey);
        else localStorage.setItem(data.storageKey, next);
      } catch {
        // Storage blocked (private mode): the choice still applies until the page closes.
      }
      applyStyle(data, next);
    },
    [data],
  );
  return { choice, style, choose };
}
