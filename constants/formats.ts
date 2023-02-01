// Used for txn and address totals
/**
 * -> Sent -> red color (negative)
 * -> Received -> green color (positive)
 * -> Balance/Fees -> violet color -> (neutral) -> (primary)
 */
export type TextColor = "positive" | "negative" | "primary";

export type FieldMetada = {
  label: string;
  prop: string;
  textColor?: TextColor;
  hasBadge?: boolean;
  isTimestamp?: boolean;
  copyToClipboard?: boolean;
  hasCurrencyIcon?: boolean;
};

const txnFormatted: FieldMetada[] = [
  {
    label: "Hash",
    prop: "hash",
    copyToClipboard: true,
  },
  {
    label: "Size",
    prop: "size",
  },
  {
    label: "Time",
    prop: "time",
    isTimestamp: true,
  },
  {
    label: "Block",
    prop: "block",
    hasBadge: true,
  },
  {
    label: "Total BTC input",
    prop: "totalBtcInput",
    hasCurrencyIcon: true,
    textColor: "positive",
  },
  {
    label: "Total BTC output",
    prop: "totalBtcOutput",
    hasCurrencyIcon: true,
    textColor: "negative",
  },
  {
    label: "Total fees",
    prop: "totalFees",
    hasCurrencyIcon: true,
    textColor: "primary",
  },
];

const addrFormatted: FieldMetada[] = [
  {
    label: "Address",
    prop: "address",
    copyToClipboard: true,
  },
  {
    label: "Number of Transactions",
    prop: "numberOfTransactions",
  },
  {
    label: "Total BTC received",
    prop: "totalBtcReceived",
    hasCurrencyIcon: true,
    textColor: "positive",
  },
  {
    label: "Total BTC sent",
    prop: "totalBtcSent",
    hasCurrencyIcon: true,
    textColor: "negative",
  },
  {
    label: "Total BTC unspent",
    prop: "totalBtcUnspent",
    hasCurrencyIcon: true,
  },
  {
    label: "Current address balance",
    prop: "finalBalance",
    hasCurrencyIcon: true,
    textColor: "primary",
  },
];

export { txnFormatted, addrFormatted };
