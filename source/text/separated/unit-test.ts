import { expect, test } from "vitest";
import { separated } from "@sharadox/web-library/text/separated";

test("joins the parts that are set with the shared separator", () => {
  expect(separated("Algarve", "Since 1996")).toBe("Algarve · Since 1996");
  expect(separated("Ana", undefined, "", false, null, "Café")).toBe("Ana · Café");
});
