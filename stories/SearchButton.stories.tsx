/* eslint-disable react/function-component-definition */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchButton } from "@/components/Buttons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Buttons",
  component: SearchButton,
  args: {
    isLoading: false,
    onClick: () => alert("search!"),
    errorMessage: "",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SearchButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof SearchButton> = ({
  isLoading,
  onClick,
  errorMessage,
}) => {
  return (
    <div className="flex items-center justify-center">
      <SearchButton
        isLoading={isLoading}
        onClick={onClick}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export const SearchBtn = Template.bind({});
