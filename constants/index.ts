import { PlaceholdersProps } from './types';
import { InputAttributes } from '@/types/search';

const PROXY_URL = 'http://localhost:3000/api';
const WEBSOCKET_URL = 'wss://ws.blockchain.info/inv';

const placeholders: PlaceholdersProps = {
    address: 'Search by address',
    transaction: 'Search by Txn Hash'
};

const defaultSearchInputAttributes: InputAttributes = {
    autoCapitalize: 'off',
    autoComplete: 'off',
    autoCorrect: 'off',
    spellCheck: 'false'
};

export { PROXY_URL, WEBSOCKET_URL, placeholders, defaultSearchInputAttributes };
