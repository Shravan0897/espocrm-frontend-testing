import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hello from "../src/Hello.jsx";

test("renders a greeting with provided name", () => {
  render(<Hello name="Shravan" />);
  expect(screen.getByLabelText("greeting")).toHaveTextContent("Hello, Shravan!");
});

test("falls back to default name when none provided", () => {
  render(<Hello />);
  expect(screen.getByLabelText("greeting")).toHaveTextContent("Hello, world!");
});
