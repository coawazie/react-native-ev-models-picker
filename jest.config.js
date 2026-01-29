/**
 * Jest configuration for React Native EV Models Picker package.
 * Uses ts-jest for TypeScript support without react-native preset.
 */

/** Minimum coverage percentage required for all metrics */
const COVERAGE_THRESHOLD_PERCENT = 80;

module.exports = {
  testEnvironment: 'node',

  // Transform TypeScript files using ts-jest
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },

  // File extensions to consider
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Test file patterns - look for tests in __tests__ folder
  testMatch: [
    '<rootDir>/__tests__/**/*.test.ts',
    '<rootDir>/__tests__/**/*.test.tsx',
  ],

  // Setup files to run after Jest is initialized
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'],

  // Module path aliases matching tsconfig
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Coverage configuration
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
    '!src/typesEnumsInterfacesConsts/**/*.ts',
  ],

  // Coverage thresholds - 80% minimum
  coverageThreshold: {
    global: {
      branches: COVERAGE_THRESHOLD_PERCENT,
      functions: COVERAGE_THRESHOLD_PERCENT,
      lines: COVERAGE_THRESHOLD_PERCENT,
      statements: COVERAGE_THRESHOLD_PERCENT,
    },
  },

  // Coverage output directory
  coverageDirectory: '<rootDir>/coverage',

  // Directories to ignore
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],

  // Clear mocks between tests
  clearMocks: true,

  // Verbose output for better debugging
  verbose: true,
};
