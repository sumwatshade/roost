module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
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
  reporters: ['default',
    [
      'jest-junit', {
        outputDirectory: 'reports/junit/',
        outputName: 'js-test-results.xml',
      },
    ]],
};
