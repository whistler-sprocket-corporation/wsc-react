import { App } from "./App";
import { render, screen } from "@testing-library/react";

describe("app", () => {
  it("renders", () => {
    render(<App />);

    expect(screen.getByText(/whistler sprocket/i)).toBeInTheDocument();
  });
});
