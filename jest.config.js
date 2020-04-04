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
    // Ignore table prior to rewrite
    '!**/Table.jsx',
    '!**/SearchableTable.jsx',
  ],
  coverageThreshold: {
    'global': {
      'branches': 90,
      'functions': 90,
      'lines': 90,
      'statements': -10,
    },
  },
};
