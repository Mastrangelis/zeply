const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
// const customJestConfig = {
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
//   moduleNameMapper: {
//     "^@/components/(.*)$": "<rootDir>/components/$1",
//     "^@/utils/(.*)$": "<rootDir>/utils/$1",
//     "@/sections/(.*)$": "<rootDir>/sections/$1",
//     "^@/hooks/(.*)$": "<rootDir>/hooks/$1",
//     "^@/pages/(.*)$": "<rootDir>/pages/$1",
//   },
//   testEnvironment: "jest-environment-jsdom",
// };

const customJestConfig = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  clearMocks: true,
  roots: ["<rootDir>/__tests__"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/__tests__/mocks",
  ],
  testMatch: ["**/__tests__/**/*.[tj]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  coverageReporters: ["lcov"],
  coverageDirectory: "<rootDir>/reports/coverage",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/__tests__/mocks/**",
    "!**/reports/**",
  ],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/$1",
  },
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporters",
      {
        publicPath: "<rootDir>/reports",
        filename: "jest-report.html",
        openReport: true,
      },
    ],
  ],
};

module.exports = createJestConfig(customJestConfig);
