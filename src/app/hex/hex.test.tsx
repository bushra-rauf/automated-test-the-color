import { render, screen, fireEvent } from "@testing-library/react";
import Hex from "../hex/page";

it("initial color is white (#ffffff)", () => {
  render(<Hex />);
  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("#ffffff");
});


test("generates a valid HEX color format", () => {
  render(<Hex />);
  
  const button = screen.getByRole("link", { name: /click me!/i });
  
  expect(button).toBeInTheDocument();
  
  fireEvent.click(button);

  const colorValue = screen.getByRole("heading", { level: 2 }).textContent;

  expect(colorValue).toMatch(/^#[0-9a-fA-F]{6}$/);
});

test("generates a new HEX color different from the previous one", () => {
  render(<Hex />);

  const button = screen.getByRole("link", { name: /click me!/i });

  const beforeClickColor = screen.getByRole("heading", { level: 2 }).textContent;

  fireEvent.click(button);

  const afterClickColor = screen.getByRole("heading", { level: 2 }).textContent;

  expect(afterClickColor).not.toBe(beforeClickColor);
});
