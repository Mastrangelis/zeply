/* eslint-disable react/function-component-definition */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from '@/components/Search';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Search',
    component: SearchBar,
    args: {
        listItems: [
            { label: 'Address', value: 'address' },
            { label: 'Transaction', value: 'transaction' }
        ]
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const SearchBarTemplate: ComponentStory<typeof SearchBar> = ({ listItems }) => {
    return <SearchBar listItems={listItems} />;
};

export const SearchBarComponent = SearchBarTemplate.bind({});
