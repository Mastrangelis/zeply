import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CryptoIcon from "@/components/CryptoIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/CryptoIcon",
  component: CryptoIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CryptoIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Euro: ComponentStory<typeof CryptoIcon> = () => <CryptoIcon code="eur" />;

export const EuroIcon = Euro.bind({});

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Btc: ComponentStory<typeof CryptoIcon> = () => <CryptoIcon code="btc" />;

export const BtcIcon = Btc.bind({});

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Usd: ComponentStory<typeof CryptoIcon> = () => <CryptoIcon code="usd" />;

export const UsdIcon = Usd.bind({});
