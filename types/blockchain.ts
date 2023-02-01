type TxnOut = {
  addr: string;
  n: number;
  script: string;
  spent: boolean;
  tx_index: number;
  type: number;
  value: number;
};

type TxnInput = {
  script: string;
  sequence: number;
  prev_out: TxnOut;
};

type Txn = {
  hash: string;
  inputs: TxnInput[];
  lock_time: number;
  out: TxnOut[];
  relayed_by: string;
  size: number; // bytes
  time: number; // timestamp
  tx_index: number;
  ver: number;
  vin_sz: number;
  vout_sz: number;
  block_height?: number;
};

type FormattedTxn = {
  hash: string;
  size: string;
  time: number;
  numberOfConfirmations: number;
  totalBtcOutput: number;
  totalBtcInput: number;
  totalFees: number;
  [key: string]: string | number;
};

type LatestBlock = {
  block_index: number;
  hash: string;
  height: number;
  time: number;
  txIndexes: number[];
};

type Address = {
  address: string;
  n_tx: number;
  total_received: number;
  total_sent: number;
  final_balance: number;
};

type FormattedAddress = {
  address: string;
  numberOfTransactions: number;
  totalBtcReceived: number;
  totalBtcSent: number;
  finalBalance: number;
  [key: string]: string | number;
};

type UnspentOutput = {
  tx_age: string;
  tx_hash: string;
  tx_index: string;
  tx_output_n: string;
  script: string;
  value: string;
};

type AddressDetails = {
  address: Address;
  unspentOutputs: UnspentOutput[];
};

export type {
  TxnOut,
  TxnInput,
  Txn,
  UnspentOutput,
  FormattedAddress,
  LatestBlock,
  Address,
  AddressDetails,
  FormattedTxn,
};
