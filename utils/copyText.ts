/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useToaster } from '@/hooks';
import { Filter } from 'constants/enums';
import { capitalize } from '.';

/**
 * @description Copy text to clipboard
 * @param text the text to be copied
 * @param type the filter type {transaction, address}
 */
const copyText = (text: string, type: Filter) => {
    const { toastSuccess, toastError } = useToaster();
    try {
        navigator.clipboard.writeText(text);
        toastSuccess(`${capitalize(type)} copied successfully`);
    } catch (error: any) {
        toastError(`Failed to copy ${type}`);
    }
};

export { copyText };
