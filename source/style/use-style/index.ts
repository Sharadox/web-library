"use client";
import { useCallback, useMemo, useSyncExternalStore } from "react";
import { applyStyle, styleApplyData } from "@sharadox/web-library/style/apply";
import { STYLE_ATTRIBUTE, STYLE_CHOICE_ATTRIBUTE, SYSTEM_STYLE } from "@sharadox/web-library/style/definition";
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

/** The visitor's style choice and the style in use, kept in sync with `<html>`; `choose` remembers a new choice. */
export function useStyle(configuration: StyleConfiguration): StyleState {
  const fallbackStyle = configuration.defaults[configuration.fallback];
  const choice = useSyncExternalStore(subscribe, read(STYLE_CHOICE_ATTRIBUTE, SYSTEM_STYLE), () => SYSTEM_STYLE);
  const style = useSyncExternalStore(subscribe, read(STYLE_ATTRIBUTE, fallbackStyle), () => fallbackStyle);
  const data = useMemo(() => styleApplyData(configuration), [configuration]);
  const choose = useCallback(
    (next: string) => {
      try {
        if (next === SYSTEM_STYLE) localStorage.removeItem(data.storageKey);
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
