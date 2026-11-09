import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { Counter } from "@sharadox/template-web-library/counter";

it("counts clicks and accepts a class name", () => {
  render(<Counter label="Clicks" className="custom" />);
  const button = screen.getByRole("button", { name: "Clicks 0" });
  fireEvent.click(button);
  expect(button.textContent).toBe("Clicks 1");
  expect(button.className).toContain("custom");
});
