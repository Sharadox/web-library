import { expect, it } from "vitest";
import { rememberLocale } from "@sharadox/web-library/internationalization/locale-preference";

it("remembers the language in a cookie", () => {
  rememberLocale("pt");
  expect(document.cookie).toContain("locale=pt");
});
