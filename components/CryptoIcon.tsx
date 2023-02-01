import GenericIcon from 'cryptocurrency-icons/svg/color/generic.svg';
import Image from 'next/image';
import React from 'react';

export default function CryptoIcon({ code }: { code: string }) {
    const getIcon = () => {
        try {
            return require(`cryptocurrency-icons/svg/color/${code}.svg`);
        } catch (e) {
            return GenericIcon;
        }
    };
    return (
        <Image
            src={getIcon()}
            alt="crypto-icon"
            height={24}
            width={24}
            quality={100}
        />
    );
}
