/* eslint-disable react/function-component-definition */
import React, { ChangeEvent, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Search } from '@/components/Search';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Search',
    component: Search,
    args: {
        placeholerText: 'Placeholder..Please write something..',
        isDisabled: false,
        onSubmit: () => alert('Submitted!')
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Search>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Search> = ({
    onSubmit,
    isDisabled,
    placeholderTxt
}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setSearchTerm(e.target.value);

    return (
        <div className="flex items-center justify-center bg-primary-100 w-[300px]">
            <Search
                onChange={handleChange}
                onSubmit={onSubmit}
                searchTerm={searchTerm}
                isDisabled={isDisabled}
                placeholderTxt={placeholderTxt}
            />
        </div>
    );
};

export const SearchInput = Template.bind({});
