import { expect, test } from "vitest";
import { assertNever } from "@sharadox/web-library/assert/never";

test("throws with the unexpected value", () => {
  expect(() => assertNever("surprise" as never)).toThrow('Unexpected value: "surprise"');
});
