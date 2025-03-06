import { render, screen } from "@testing-library/react";
import App from "./App"; // Import the App component

test("renders DevOps To-Do List title", () => {
  render(<App />);
  const titleElement = screen.getByText(/DevOps To-Do List/i);
  expect(titleElement).toBeInTheDocument();
});