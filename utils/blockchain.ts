import {
    TxnOut,
    TxnInput,
    Txn,
    LatestBlock,
    AddressDetails,
    UnspentOutput
} from '@/types/blockchain';
import { Currency, Prices } from 'context/SelectCurrencyContext';

/**
 * @description Convert shatoshis to BTC
 * @param n {number} The number of shatoshis to convert to BTC
 * @returns {number} the amount of shatoshis in BTC
 */
const convertToBTC = (n: number) => {
    return n / Math.pow(10, 9);
};

/**
 * @description Calculates the total output amount of the tx in shatoshis
 * @param out An array of all the outputs for a tx
 * @returns {number} The number of shatoshis for all the ouputs of the tx
 */
const calculateTotalBtcOut = (out: TxnOut[]) => {
    return out?.reduce((acc: number, val: TxnOut) => (acc += val.value), 0);
};

/**
 * @description Calculates the total input amount of the tx in shatoshis
 * @param inputs An array of all the inputs for a tx
 * @returns {number} The number of shatoshis for all the inputs of the tx
 */
const calculateTotalBtcIn = (inputs: TxnInput[]) => {
    return inputs?.reduce(
        (acc: number, val: TxnInput) => (acc += val.prev_out.value),
        0
    );
};

/**
 * @description Calculates the fees for a tx. Fees are supposed to be
 * the amount of total input minus the amount of total outputs (totalInput - totalOutput)
 * @param inputs An array of all the inputs for a tx
 * @param out An array of all the inputs for a tx
 * @returns {number} the diff of totalInput and totalOutput in shatoshis
 */
const calculateFees = ({ inputs, out }: Txn) => {
    return calculateTotalBtcIn(inputs) - calculateTotalBtcOut(out);
};

/**
 * @description Calculates the number of confirmations for a tx.
 * Tha number is supposed to be the difference of the latest's block height minus the
 * tx's block height plus + 1
 * $height - $block_height + 1;
 * @param latestBlock the latest block in the BTC blockchain
 * @param txn the transaction
 * @returns {number} the total block confirmations
 */
const numberOfConfirmations = (latestBlock: LatestBlock, txn: Txn) => {
    if (!txn?.block_height) return 0;
    else {
        const { block_height } = txn;
        return latestBlock?.height - block_height + 1;
    }
};

/**
 * @description Format bytes in a human readable format
 * @param bytes the number of bytes
 * @param decimals the number of desired decimals to display eg. 1.2KB, 1.33KB, 1.444, KB..
 * @returns {string} the number of bytes plus the size in a string e.g "5 KB"
 */
const formatBytes = (bytes: number, decimals?: number) => {
    if (bytes == 0) return '0 Bytes';
    const k = 1024,
        dm = decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * @description Convert shatoshis to number depending on
 * the real time price between USD and EUR and BTC.
 * @param amount {number} amount the amount to be converted in shatoshis
 * @param prices {Price} an object containing the value of BTC in EUR and USD
 * @param selectedCurrency {Currency} the selected currency from the menu, e.g "btc", "eur", "usd"
 * @returns {number} converted in the selected currency
 */
const currencyConverter = (
    amount: number,
    prices: Prices,
    selectedCurrency?: Currency
) => {
    const shatoshisToBTC = convertToBTC(amount);
    if (selectedCurrency === 'btc' || !prices) {
        return shatoshisToBTC.toFixed(3);
    }
    const currencyTo = selectedCurrency === 'eur' ? 'EUR' : 'USD';
    return (prices[currencyTo] * shatoshisToBTC).toFixed(3);
};

/**
 * @description Formats the transaction
 * @param txn the transaction
 * @param latestBlock the latest block in the BTC blockchain
 * @param prices {Price} an object containing the value of BTC in EUR and USD
 * @param selectedCurrency {Currency} the selected currency from the menu, e.g "btc", "eur", "usd"
 * @returns the transaction formmated
 */
const formatTxn = (
    txn: Txn,
    latestBlock: LatestBlock,
    prices: Prices,
    selectedCurrency?: Currency
) => ({
    hash: txn.hash,
    size: formatBytes(txn.size),
    time: txn.time,
    block: `${txn.block_height} (${numberOfConfirmations(
        latestBlock,
        txn
    )} Confirmation Blocks)`,
    totalBtcOutput: currencyConverter(
        calculateTotalBtcOut(txn.out),
        prices,
        selectedCurrency
    ),
    totalBtcInput: currencyConverter(
        calculateTotalBtcIn(txn.inputs),
        prices,
        selectedCurrency
    ),
    totalFees: currencyConverter(calculateFees(txn), prices, selectedCurrency)
});

/**
 * @description Computes the unspent outputs for a given address
 * @param unspent an array of the unspent outputs to be calculated
 * @returns {number} the total amount of the values for each unspent output in shatoshis
 */
const calculateTotalBTCUnspent = (unspent: UnspentOutput[]) => {
    return unspent?.reduce((acc, item) => (acc += +item.value), 0);
};

/**
 * @description Formats the address object
 * @param addr the addres details
 * @param prices {Price} an object containing the value of BTC in EUR and USD
 * @param selectedCurrency {Currency} the selected currency from the menu, e.g "btc", "eur", "usd"
 * @returns the formated addres
 */
const formatAddr = (
    addr: AddressDetails,
    prices: Prices,
    selectedCurrency?: Currency
) => ({
    address: addr.address.address,
    numberOfTransactions: addr.address.n_tx,
    totalBtcReceived: currencyConverter(
        addr.address.total_received,
        prices,
        selectedCurrency
    ),
    totalBtcSent: currencyConverter(
        addr.address.total_sent,
        prices,
        selectedCurrency
    ),
    totalBtcUnspent: currencyConverter(
        calculateTotalBTCUnspent(addr.unspentOutputs),
        prices,
        selectedCurrency
    ),
    finalBalance: currencyConverter(
        addr.address.final_balance,
        prices,
        selectedCurrency
    )
});

export {
    currencyConverter,
    formatAddr,
    formatTxn,
    formatBytes,
    convertToBTC,
    calculateFees,
    calculateTotalBtcIn,
    calculateTotalBtcOut,
    numberOfConfirmations
};
