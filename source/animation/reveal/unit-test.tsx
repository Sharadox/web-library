import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { Reveal } from "@sharadox/web-library/animation/reveal";

it("renders its children with the given class", () => {
  render(<Reveal className="custom">Inside</Reveal>);
  expect(screen.getByText("Inside").className).toBe("custom");
});
