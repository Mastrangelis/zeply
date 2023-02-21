import {
  areArraysEqual,
  camelCaseToSpaceCamel,
  capitalize,
  isEmptyObject,
  isNotUndefined,
} from "@/utils";

describe("Utility functions testing", () => {
  describe("Camelcase to space camel", () => {
    it("Should convert a camelCase string to spaceCamel case", () => {
      const received = "ThisIsACamelCaseString";
      const expected = "This Is A Camel Case String";
      expect(camelCaseToSpaceCamel(received)).toBe(expected);
    });
  });

  describe("Capitalize a string", () => {
    it("Should capitalize a string", () => {
      const received = "capitalizeThis";
      const expected = "CapitalizeThis";
      expect(capitalize(received)).toBe(expected);
    });
  });

  describe("Check for undefined value", () => {
    it("Should return true for undefined value", () => {
      const received = undefined;
      const expected: boolean = true;
      expect(isNotUndefined(received)).toBe(expected);
    });

    it("Should return false for non undefined value", () => {
      const received: string = "something";
      const expected: boolean = false;
      expect(isNotUndefined(received)).toBe(expected);
    });
  });

  describe("Check for empty object", () => {
    it("Should return true if object has no keys", () => {
      const received: object = {};
      const expected: boolean = true;
      expect(isEmptyObject(received)).toBe(expected);
    });

    it("Should return false for objects than contain at least one key-value pair", () => {
      const received: object = { foo: "bar" };
      const expected: boolean = false;
      expect(isEmptyObject(received)).toBe(expected);
    });
  });

  describe("Check for array equality", () => {
    it("Should return true if arrays are identical", () => {
      const received1: Array<string> = ["1", "2", "3"];
      const received2: Array<string> = ["1", "2", "3"];
      const expected: boolean = true;
      expect(areArraysEqual(received1, received2)).toBe(expected);
    });

    it("Should return false for that are not identical", () => {
      const received1: Array<string> = ["1", "2", "3", "4"];
      const received2: Array<string> = ["1", "2", "3"];
      const expected: boolean = false;
      expect(areArraysEqual(received1, received2)).toBe(expected);
    });
  });
});
