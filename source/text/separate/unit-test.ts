import { expect, test } from "vitest";
import { separate } from "@sharadox/web-library/text/separate";

test("joins the parts that are set with the spaced separator", () => {
  expect(separate("·", "Contact", "Ana (Café)")).toBe("Contact · Ana (Café)");
  expect(separate("·", "Ana", undefined, "", false, null, "Café")).toBe("Ana · Café");
  expect(separate("·")).toBe("");
});
