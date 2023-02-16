import { validateAddress, validateTxnHash } from "@/utils/validators";

describe("Validators Testing", () => {
  describe("BTC Transaction validator", () => {
    it("Should validate a correct btc transaction hash", () => {
      const isValid = validateTxnHash(
        "b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da"
      );
      expect(isValid).toBe(true);
    });

    it("Should not validate an invalid btc transaction hash", () => {
      const isValid = validateTxnHash("0x10Akf");
      expect(isValid).toBe(false);
    });
  });

  describe("BTC Address validator", () => {
    it("Should validate a correct btc address", () => {
      const isValid = validateAddress("1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F");
      expect(isValid).toBe(true);
    });

    it("Should not validate an invalid address", () => {
      const isValid = validateAddress("0xAddress");
      expect(isValid).toBe(false);
    });
  });
});
