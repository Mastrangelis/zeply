/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchButton, SubscribeUnsubscribeButton } from "@/components/Buttons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Buttons",
  component: SubscribeUnsubscribeButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SubscribeUnsubscribeButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof SubscribeUnsubscribeButton> = () => {
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const handleOnClick = () => setSubscribed((prev: boolean) => !prev);

  return (
    <div className="flex items-center justify-center">
      <SubscribeUnsubscribeButton
        buttonText={subscribed ? "Unsubscribe" : "Subscribe"}
        onClick={handleOnClick}
        condition={subscribed}
      />
    </div>
  );
};

export const SubscribeBtn = Template.bind({});
