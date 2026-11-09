import { expect, it } from "vitest";
import { greeting } from "@sharadox/template-web-library/greeting";

it("greets in English and Portuguese", () => {
  expect(greeting({ name: "Ana" })).toBe("Hello, Ana!");
  expect(greeting({ name: "Ana", language: "pt" })).toBe("Olá, Ana!");
});
