import { expect, it } from "vitest";
import { localeRedirects } from "@sharadox/web-library/internationalization/locale-redirect";

it("sends Portuguese browsers to /pt and everyone else to the default", () => {
  expect(localeRedirects(["en", "pt"], "en")).toEqual([
    {
      source: "/",
      has: [{ type: "header", key: "accept-language", value: "pt.*" }],
      destination: "/pt",
      permanent: false,
    },
    { source: "/", destination: "/en", permanent: false },
  ]);
});
