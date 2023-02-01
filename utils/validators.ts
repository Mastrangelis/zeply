const validateTxnHash = (txn: string): boolean => {
  if (txn !== "" && !/^[a-fA-F0-9]{64}$/g.test(txn)) {
    return false;
  }
  return true;
};

const validateAddress = (address: string): boolean => {
  if (
    address !== "" &&
    !/^(bc1|[13])[a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address)
  ) {
    return false;
  }
  return true;
};

export { validateTxnHash, validateAddress };
