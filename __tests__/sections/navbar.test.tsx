import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "@/sections";

describe("Navbar Testing", () => {
  it("Should render the Navbar", () => {
    render(<Navbar />);

    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("header");
  });

  it("Should be wrapped in Container Component", () => {
    render(<Navbar />);

    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("header");

    // Check container wrapping
    expect(header.firstChild).toHaveClass("container");
  });

  it("Should display btc logo", () => {
    render(<Navbar />);

    const btcLogo = screen.getByRole("img");

    expect(btcLogo).toBeInTheDocument();
    expect(btcLogo).toHaveClass("btc-img");
  });

  it("Should display btc logo", () => {
    render(<Navbar />);

    const heading = screen.getByText(/btcscan/i);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("header__title");
  });

  it("Should display btc logo", () => {
    render(<Navbar />);

    const heading = screen.getByText(/btcscan/i);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("header__title");
  });

  it("Should display Select Currency input", () => {
    render(<Navbar />);

    const select = screen.getByTestId("react-select")?.firstChild;

    expect(select).toBeInTheDocument();
  });
});
