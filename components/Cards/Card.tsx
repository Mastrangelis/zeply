import React from 'react';

import { clsx } from 'clsx';
import { CardHeaderProps, CardContentProps, CardProps } from '@/types/card';
import { LoadingComponent } from '../Skeleton';

export const Card = ({ children, fullHeight }: CardProps) => {
    return (
        <div
            data-cy="card"
            className={clsx({ card: true, 'h-fill': fullHeight })}
        >
            {children}
        </div>
    );
};

const CardHeader = ({
    children,
    header,
    onClick,
    hasBorderBottom,
    isLoading
}: CardHeaderProps) => {
    return (
        <div
            className={clsx({
                'h-[72px] flex items-center': true,
                'border-b-2 border-borderColor': hasBorderBottom,
                'cursor-pointer': onClick
            })}
            onClick={onClick}
        >
            {header && (
                <div className="pl-4 flex-1">
                    <LoadingComponent
                        isLoading={isLoading}
                        height={26}
                        fullWidth
                    >
                        {header}
                    </LoadingComponent>
                </div>
            )}
            {children}
        </div>
    );
};

const CardContent = ({ children, classes }: CardContentProps) => {
    return <div className={`px-2 ${classes}`}>{children}</div>;
};

Card.Header = CardHeader;
Card.Content = CardContent;

export default Card;
