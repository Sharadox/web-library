import { expect, it } from "vitest";
import { localeRedirects } from "@sharadox/web-library/internationalization/locale-redirect";

it("sends / to the remembered language, then the browser's, then the default", () => {
  expect(localeRedirects(["en", "pt"], "en")).toEqual([
    { source: "/", has: [{ type: "cookie", key: "locale", value: "en" }], destination: "/en", permanent: false },
    { source: "/", has: [{ type: "cookie", key: "locale", value: "pt" }], destination: "/pt", permanent: false },
    {
      source: "/",
      has: [{ type: "header", key: "accept-language", value: "pt.*" }],
      destination: "/pt",
      permanent: false,
    },
    { source: "/", destination: "/en", permanent: false },
  ]);
});
