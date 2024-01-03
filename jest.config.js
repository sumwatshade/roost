
module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/components/**',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/__snapshots__/**',
    // TODO: Table Rewrite
    '!**/Table.jsx',
    '!**/SearchableTable.jsx',
    // TODO: Map rework
    '!**/Maps.jsx',
  ],
  coverageThreshold: {
    'global': {
      'branches': 90,
      'functions': 90,
      'lines': 90,
      'statements': -10,
    },
  },
  coverageDirectory: 'reports/coverage',
  reporters: ['default',
    [
      'jest-junit', {
        outputDirectory: 'reports/junit/',
        outputName: 'js-test-results.xml',
      },
    ]],
};
