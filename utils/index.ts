const camelCaseToSpaceCamel = (s: string) => {
  return (
    s
      .replace(/([A-Z])/g, " $1")
      // uppercase the first character
      .replace(/^./, (str: string) => str.toUpperCase())
  );
};

const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const isNotUndefined = <Type>(variable: Type): boolean => {
  return typeof variable === "undefined";
};

const isEmptyObject = (obj: object): boolean => {
  return typeof obj !== "object" || Object.keys(obj).length === 0;
};

const areArraysEqual = <T>(arr1: T[], arr2: T[]): boolean => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

export {
  camelCaseToSpaceCamel,
  capitalize,
  isNotUndefined,
  isEmptyObject,
  areArraysEqual,
};
