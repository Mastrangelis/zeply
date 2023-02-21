import { SubscribeUnsubscribeButton } from "@/components/Buttons";
import { render, screen } from "@testing-library/react";

describe("Subscription Button Testing", () => {
  it("Should render subscription button with 'Subscribe' label button text", () => {
    render(
      <SubscribeUnsubscribeButton
        buttonText="Subscribe"
        onClick={() => {}}
        condition={false}
      />
    );
    const button = screen.getByRole("button", { name: /subscribe/i });
    expect(button).toHaveClass("subscribe-unsubscribe__btn");

    const img = screen.getByAltText("subscribe");
    expect(img).toBeInTheDocument();
  });

  it("Should render subscription button with 'Unsubscribe' label button text", () => {
    render(
      <SubscribeUnsubscribeButton
        buttonText="Unsubscribe"
        onClick={() => {}}
        condition={true}
      />
    );
    const button = screen.getByRole("button", { name: /unsubscribe/i });
    expect(button).toHaveClass("subscribe-unsubscribe__btn");

    const img = screen.getByAltText("unsubscribe");
    expect(img).toBeInTheDocument();
  });
});
