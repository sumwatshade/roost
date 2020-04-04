module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '__snapshots__',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/components/**',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
};
