import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  CopyTextField,
  CurrencyTextField,
  DateTimeTextField,
} from "@/components/Textfields";
import { Filter } from "constants/enums";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/TextFields",
  component: CopyTextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CopyTextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template1: ComponentStory<typeof CopyTextField> = () => (
  <div className="flex flex-col items-center mt-2">
    <CopyTextField text={"Copy to clipboard"} type={Filter.ADDRESS} />
  </div>
);

export const CopyTextFieldInput = Template1.bind({});

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template2: ComponentStory<typeof CurrencyTextField> = () => (
  <div className="flex flex-col items-center mt-2">
    <CurrencyTextField total={10000} textColor="positive" />
    <CurrencyTextField total={20000} textColor="negative" />
    <CurrencyTextField total={30000} textColor="primary" />
  </div>
);

export const CurrencyTextFieldInput = Template2.bind({});

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template3: ComponentStory<typeof DateTimeTextField> = () => (
  <div className="flex flex-col items-center mt-2">
    <DateTimeTextField timestamp={Date.now()} />
  </div>
);

export const DateTimeTextFieldInput = Template3.bind({});
