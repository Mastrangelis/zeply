import React, { MouseEventHandler } from 'react';
import Image from 'next/image';
import { useToaster } from '@/hooks';

type SubscribeUnsubscribeButtonProps = {
    buttonText: string;
    condition?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

const SubscribeUnsubscribeButton = ({
    buttonText,
    onClick,
    condition
}: SubscribeUnsubscribeButtonProps) => {
    const { toastError, toastSuccess } = useToaster();
    return (
        <div className="subscribe-unsubscribe" data-cy="subscription-btn">
            <button
                className="subscribe-unsubscribe__btn"
                onClick={(e) => {
                    if (condition) {
                        toastError(buttonText);
                    } else {
                        toastSuccess(buttonText);
                    }
                    onClick(e);
                }}
            >
                <span className="">{buttonText}</span>
                <div className="ml-2">
                    <Image
                        src={condition ? '/unsubscribe.svg' : '/subscribe.svg'}
                        alt={condition ? 'unsubscribe' : 'subscribe'}
                        height={18}
                        width={18}
                        quality={100}
                    />
                </div>
            </button>
        </div>
    );
};

export default SubscribeUnsubscribeButton;
