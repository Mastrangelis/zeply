import { SearchButton } from "@/components/Buttons";
import { render, screen } from "@testing-library/react";

describe("Search Button Testing", () => {
  it("Should render search button", () => {
    render(<SearchButton isLoading={false} onClick={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("searchbar__search-btn");
    expect(button).not.toHaveClass("btn-disabled");
  });

  it("Should render disabled search button due to loading and spinner should be visible", () => {
    render(<SearchButton isLoading={true} onClick={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("searchbar__search-btn");
    expect(button).toHaveClass("btn-disabled");

    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass("border-blackWhite-350");
    expect(spinner).toHaveClass("w-[22px] h-[22px]");
  });

  it("Should render cursor-not-allowed style if errorMessage exists", () => {
    render(
      <SearchButton isLoading={false} onClick={() => {}} errorMessage="error" />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("searchbar__search-btn");
    expect(button).not.toHaveClass("btn-disabled");
    expect(button).toHaveClass("cursor-not-allowed");
  });

  it("Should render search svg", () => {
    render(<SearchButton isLoading={false} onClick={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("searchbar__search-btn");
    expect(button).not.toHaveClass("btn-disabled");

    const svg = screen.getByAltText("Search");
    expect(svg).toBeInTheDocument();
  });
});
