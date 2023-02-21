/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';
import { validateAddress, validateTxnHash } from '@/utils/validators';
import { Filter } from 'constants/enums';

type useSearchInputValidationProps = {
    searchFilter: string;
    searchTerm: string;
};

export default function useSearchInputValidation({
    searchFilter,
    searchTerm
}: useSearchInputValidationProps) {
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        if (searchFilter === Filter.TRANSACTION) {
            if (!validateTxnHash(searchTerm)) {
                setErrorMessage('Invalid bitcoin transaction hash');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!validateAddress(searchTerm)) {
                setErrorMessage('Invalid bitcoin address');
            } else {
                setErrorMessage('');
            }
        }
    }, [searchTerm]);

    return {
        errorMessage
    };
}
