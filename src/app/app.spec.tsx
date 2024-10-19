import { App } from "./app.tsx";
import { render, screen } from "@testing-library/react";

describe("app", () => {
  it("renders", () => {
    render(<App />);

    expect(screen.getByText(/whistler sprocket/i)).toBeInTheDocument();
  });
});
