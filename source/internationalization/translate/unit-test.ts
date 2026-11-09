import { expect, it } from "vitest";
import { translate } from "@sharadox/web-library/internationalization/translate";

it("returns the copy for the locale", () => {
  expect(translate({ en: "Hello", pt: "Olá" }, "pt")).toBe("Olá");
});
