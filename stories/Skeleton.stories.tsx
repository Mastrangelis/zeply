import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoadingComponent } from '@/components/Skeleton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Skeleton',
    component: LoadingComponent

    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LoadingComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof LoadingComponent> = ({
    isLoading,
    width
}) => (
    <LoadingComponent isLoading={isLoading} width={width}>
        <span>Loading Component</span>
    </LoadingComponent>
);

Template.args = {
    isLoading: true,
    width: 300
};

export const SkeletonLoading = Template.bind({});
