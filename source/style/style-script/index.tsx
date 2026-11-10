import { applyStyle, styleApplyData } from "@sharadox/web-library/style/apply";
import { styleSheet } from "@sharadox/web-library/style/style-sheet";
import type { StyleConfiguration } from "@sharadox/web-library/style/definition/type";
import type { StyleScriptProperties } from "@sharadox/web-library/style/style-script/type";

/** The inline script: applies the remembered style, then follows the device and other tabs while the page is open. */
export function styleScript(configuration: StyleConfiguration): string {
  const data = JSON.stringify(styleApplyData(configuration)).replace(/</g, "\\u003c");
  return `(function(){var apply=${applyStyle.toString()};var data=${data};apply(data);try{matchMedia("(prefers-color-scheme: light)").addEventListener("change",function(){apply(data)});addEventListener("storage",function(event){if(event.key===data.storageKey)apply(data)})}catch(error){}})();`;
}

/**
 * Put in `<head>` (and add `suppressHydrationWarning` to `<html>`): every style's CSS custom properties, and the
 * script that picks the style before the first paint.
 */
export function StyleScript({ configuration }: StyleScriptProperties) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styleSheet(configuration) }} />
      <script dangerouslySetInnerHTML={{ __html: styleScript(configuration) }} />
    </>
  );
}
