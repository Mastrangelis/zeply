import {
  calculateFees,
  calculateTotalBtcIn,
  calculateTotalBtcOut,
  convertToBTC,
  currencyConverter,
  formatBytes,
  numberOfConfirmations,
} from "@/utils/blockchain";

describe("Blockchain utility functions", () => {
  it("Should be able to convert 10^9 shatoshis to 1 BTC", () => {
    const received = convertToBTC(1000000000);
    const expected = 1;
    expect(received).toBe(expected);
  });

  it("Should be able to correctly calculate transaction's total output", () => {
    const tx = {
      out: new Array(4)
        .fill({
          addr: "",
          n: 1,
          script: "",
          spent: true,
          tx_index: 1,
          type: "number",
          value: 1,
        })
        .map((out, index) => ({
          ...out,
          value: index + 1,
        })),
    };
    const received = calculateTotalBtcOut(tx.out);
    const expected = 10;
    expect(received).toBe(expected);
  });

  it("Should be able to correctly calculate transaction's total input", () => {
    const tx = {
      inputs: new Array(4)
        .fill({
          prev_out: {
            addr: "",
            n: 1,
            script: "",
            spent: true,
            tx_index: 1,
            type: "number",
            value: 1,
          },
        })
        .map((input, index) => ({
          ...input,
          prev_out: {
            ...input.prev_out,
            value: index + 1,
          },
        })),
    };
    const received = calculateTotalBtcIn(tx.inputs);
    const expected = 10;
    expect(received).toBe(expected);
  });

  it("Should be able to correctly calculate fees", () => {
    const tx = {
      inputs: new Array(4)
        .fill({
          prev_out: {
            addr: "",
            n: 1,
            script: "",
            spent: true,
            tx_index: 1,
            type: "number",
            value: 1,
          },
        })
        .map((input, index) => ({
          ...input,
          prev_out: {
            ...input.prev_out,
            value: index + 1,
          },
        })),
      out: new Array(4)
        .fill({
          addr: "",
          n: 1,
          script: "",
          spent: true,
          tx_index: 1,
          type: "number",
          value: 1,
        })
        .map((out, index) => ({
          ...out,
          value: index + 1,
        })),
    };
    const received = calculateFees(tx as any);
    const expected = 0;
    expect(received).toBe(expected);
  });

  it("Should be able to correctly calculate fees", () => {
    const tx = {
      block_height: 12200,
    };
    const latestBlock = {
      block_index: 1,
      hash: "",
      time: 0,
      height: 160778,
      txIndexes: [],
    };
    const received = numberOfConfirmations(latestBlock, tx as any);
    const expected = 148579;
    expect(received).toBe(expected);
  });

  it("Should be able to format bytes to readable form, e.g 1024 bytes = 1 KB", () => {
    const received = formatBytes(1024);
    const expected = "1 KB";
    expect(received).toBe(expected);
  });

  it("Should be able to format bytes to readable form, e.g 1024 Kbytes = 1 MB", () => {
    const received = formatBytes(1024 * 1024);
    const expected = "1 MB";
    expect(received).toBe(expected);
  });

  it("Should be able to format bytes to readable form, e.g 1024 Mbytes = 1 GB", () => {
    const received = formatBytes(1024 * 1024 * 1024);
    const expected = "1 GB";
    expect(received).toBe(expected);
  });

  it("Should be able to format bytes to readable form, e.g 1024 Gbytes = 1 TB", () => {
    const received = formatBytes(1024 * 1024 * 1024 * 1024);
    const expected = "1 TB";
    expect(received).toBe(expected);
  });

  it("Should be able to convert to 1 BTC 20.000 USD ", () => {
    const received = currencyConverter(
      Math.pow(10, 9),
      {
        USD: 20000,
        EUR: 21000,
      },
      "usd"
    );
    const expected = "20000.000";
    expect(received).toBe(expected);
  });

  it("Should be able to convert to 1 BTC 21.000 EUR ", () => {
    const received = currencyConverter(
      Math.pow(10, 9),
      {
        USD: 20000,
        EUR: 21000,
      },
      "eur"
    );
    const expected = "21000.000";
    expect(received).toBe(expected);
  });
});
