import { expect, it } from "vitest";
import { readField } from "@sharadox/web-library/form/field";

it("trims, caps and defaults to empty", () => {
  const form = new FormData();
  form.set("name", "  Ana  ");
  expect(readField(form, "name", 2)).toBe("An");
  expect(readField(form, "missing", 10)).toBe("");
});
