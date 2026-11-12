import { expect, test } from "vitest";
import { SEPARATOR } from "@sharadox/web-library/text/separator";
import { separate } from "@sharadox/web-library/text/separate";

test("is the middle dot, set between labels with spaces", () => {
  expect(SEPARATOR).toBe("·");
  expect(separate(SEPARATOR, "Velvet", "Midnight")).toBe("Velvet · Midnight");
});
