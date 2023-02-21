/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toaster from '@/components/Toaster';
import useToaster from '@/hooks/useToaster';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Toaster',
    component: Toaster
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Toaster>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const TemplateSuccess: ComponentStory<typeof Toaster> = () => {
    const { toastSuccess } = useToaster();

    useEffect(() => {
        toastSuccess('Success!!');

        return () => {};
    }, []);

    return <Toaster />;
};

export const ToasterSuccessComponent = TemplateSuccess.bind({});

const TemplateError: ComponentStory<typeof Toaster> = () => {
    const { toastError } = useToaster();

    useEffect(() => {
        toastError('Error !!');

        return () => {};
    }, []);

    return <Toaster />;
};

export const ToasterErrorComponent = TemplateError.bind({});

const TemplateInfo: ComponentStory<typeof Toaster> = () => {
    const { toastInfo } = useToaster();

    useEffect(() => {
        toastInfo('Info !!');

        return () => {};
    }, []);

    return <Toaster />;
};

export const ToasterInfoComponent = TemplateInfo.bind({});

const TemplateWarning: ComponentStory<typeof Toaster> = () => {
    const { toastWarning } = useToaster();

    useEffect(() => {
        toastWarning('Warning !!');

        return () => {};
    }, []);

    return <Toaster />;
};

export const ToasterWarningComponent = TemplateWarning.bind({});
