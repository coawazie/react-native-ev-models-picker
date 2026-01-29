/**
 * Jest setup file for React Native EV Models Picker tests.
 * Configures global mocks for React Native testing.
 */

// Silence console warnings during tests unless explicitly testing them
const originalWarn = console.warn;
const originalError = console.error;

beforeAll(() => {
  console.warn = jest.fn();
  console.error = jest.fn();
});

afterAll(() => {
  console.warn = originalWarn;
  console.error = originalError;
});
