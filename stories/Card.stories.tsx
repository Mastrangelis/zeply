/* eslint-disable react/function-component-definition */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AccordionCard, Card } from "@/components/Cards";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Cards",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Card> = () => {
  return (
    <Card fullHeight>
      <Card.Header header="test" hasBorderBottom isLoading={false} />
      <Card.Content>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dicta
          suscipit, est libero eligendi reprehenderit fugiat dolores repellat
          accusamus assumenda quidem ab praesentium a qui. Culpa quaerat ducimus
          voluptatem ad?
        </span>
      </Card.Content>
    </Card>
  );
};

export const SimpleCard = Template.bind({});

const Template1: ComponentStory<typeof AccordionCard> = () => {
  return <AccordionCard header="Accordion" />;
};

export const Accordion = Template1.bind({});
