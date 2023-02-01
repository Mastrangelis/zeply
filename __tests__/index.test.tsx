import { render, screen } from "@testing-library/react";
import { Layout } from "@/sections";

describe("Layout", () => {
  it("Should render the page layout", () => {
    render(<Layout />);

    const heading = screen.getByText("BTCScan");

    expect(heading).toBeInTheDocument();
  });
});
