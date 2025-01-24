module.exports = {
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  maxWorkers: 1,
  moduleNameMapper: { 'e2e/(.*)': '<rootDir>/e2e/$1' },
  preset: 'react-native',
  reporters: ['detox/runners/jest/reporter'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  testMatch: ['<rootDir>/e2e/**/*.test.ts'],
  testTimeout: 200000,
  transform: { '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub' },
  verbose: true
}
