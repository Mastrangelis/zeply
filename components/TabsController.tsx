import React from 'react';
import clsx from 'clsx';
import { TabsControllerProps, TabOption } from '@/types/tabs';

export default function TabsController({
    tabs,
    activeTab,
    onClick
}: TabsControllerProps) {
    const renderTab = (item: TabOption, index: number) => {
        return (
            <div
                key={index}
                className={clsx({
                    'tabs-controller': true,
                    'cursor-pointer font-medium hover:text-text-200':
                        item.key !== activeTab,
                    'text-blackWhite-500 font-bold underline decoration-2 underline-offset-4':
                        item.key === activeTab
                })}
                onClick={() => onClick(item.key)}
                data-cy="tab"
            >
                {item.label}
            </div>
        );
    };

    return (
        <div
            className="py-3 flex items-center justify-between"
            data-cy="tabs-controller"
        >
            {tabs.map(renderTab)}
        </div>
    );
}
