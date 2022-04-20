module.exports = {
  "automock": false,
  "clearMocks": true,
  // testEnviroment: 'node',
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "moduleFileExtensions": ["js", "ts"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  "preset": "ts-jest",
  "roots": ["<rootDir>/test"],
  "testRegex": "test/(.+)\\.spec\\.(jsx?|tsx?)$"
}