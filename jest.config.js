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
  ],
};
