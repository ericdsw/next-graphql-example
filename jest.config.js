module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  setupFilesAfterEnv: [
    './jest.setup.ts',
    'jest-localstorage-mock'
  ],
  resetMocks: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "@mocks/(.*)": "<rootDir>/src/__mocks__/$1",
    "@graph/(.*)": "<rootDir>/src/graphQl/$1",
    "@components/(.*)": "<rootDir>/src/components/$1"
  },
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/index.{ts,tsx}",
    "!**/styles.{ts,css,sass}",
    "!/node_modules/",
    "!styles/**.*",
    "!/@types",
    "!**.config.{ts,tsx,js}",
    "!**.d.ts",
    "!src/graphQl/interfaces/**.*",
    "!pages/_app.tsx",
    "!pages/_document.tsx"
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90
    }
  },
  coverageReporters: [
    "json",
    "lcov",
    "text",
    "clover",
    "cobertura"
  ]
};