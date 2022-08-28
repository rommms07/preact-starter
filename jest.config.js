/**
 * Note: Due to some intellectual limitations, my final jest setup does not cover all server-side 
 * code by default. I have mocked up some of the data fetching global variables and functions.
 */
const { readFileSync } = require('fs')

const config = JSON.parse(readFileSync('./.swcrc', 'utf-8'))

/** @type {import('jest').Config} */
const jestConf = {
  preset: 'jest-preset-preact',
  globalSetup: '<rootDir>/tests/globalSetup.js',
  globalTeardown: '<rootDir>/tests/globalTeardown.js',
  verbose: true,
  extensionsToTreatAsEsm: [ '.ts', '.tsx', '.jsx' ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { ...config }],
  },
  transformIgnorePatterns: [
    '^node_modules/(?!preact-render-to-string/.*|preact-router/.*)',
  ],
  moduleNameMapper: {
    '^@/(.*)\\.(png|jpe?g|gif|mp[3-4]|mpeg|mkv|ico|webp|3gp|ogg|m4a|flac)$': '<rootDir>/tests/__mocks__/fileMocks.js',
    '^@/(.*)\\.(p?css)$': 'identity-obj-proxy', 
    '^react$': '<rootDir>/node_modules/preact/compat',
    '^react-dom$': '<rootDir>/node_modules/preact/compat',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = jestConf
