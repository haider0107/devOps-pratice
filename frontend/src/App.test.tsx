import { render, screen } from "@testing-library/react";
import { vi, describe, expect, it, beforeEach } from "vitest";
import App from "./App";

// Mock global fetch
// global.fetch = vi.fn();

describe("App component", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("renders heading and buttons", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /chaicode devops/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/view courses/i)).toBeInTheDocument();
    expect(screen.getByText(/seed course/i)).toBeInTheDocument();
  });
});
