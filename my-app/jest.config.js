module.exports = {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
        "<rootDir>/setup-jest.ts"
    ],
    "transformIgnorePatterns": [
        "node_modules/(?!@ngrx|ngx-socket-io)" // List any packages here that error
    ],
    "transform": {
        "^.+\\.(ts|js|html)$": "ts-jest"
    },
    "testPathIgnorePatterns": [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        "<rootDir>/cypress/",
        "<rootDir>/src/test.ts",
    ],
    "coveragePathIgnorePatterns": [
      "node_modules",
      "test-config",
      "interfaces",
      "jestGlobalMocks.ts",
      ".module.ts",
      "<rootDir>/src/app/main.ts",
      ".mock.ts"
  ],
    "collectCoverageFrom": [
        "<rootDir>/src/app/components/*.ts",
        "!<rootDir>/src/test.ts"
    ],
    "testMatch": [
        "<rootDir>/src/app/test/*.test.ts",
        "<rootDir>/src/app/test/*.spec.ts"
    ],
};
