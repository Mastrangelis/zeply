const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './'
});

const customJestConfig = {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    clearMocks: true,
    roots: ['<rootDir>/__tests__'],
    moduleDirectories: ['node_modules', '<rootDir>'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/.next/',
        '<rootDir>/__tests__/mocks'
    ],
    testMatch: [
        '**/__tests__/**/*.[tj]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)'
    ],
    coverageReporters: ['lcov'],
    coverageDirectory: '<rootDir>/reports/coverage',
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/__tests__/mocks/**',
        '!**/reports/**'
    ],
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/$1'
    },
    reporters: [
        'default',
        [
            './node_modules/jest-html-reporters',
            {
                publicPath: '<rootDir>/reports',
                filename: 'jest-report.html',
                openReport: true
            }
        ]
    ]
};

module.exports = createJestConfig(customJestConfig);
