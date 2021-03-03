module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  setupFilesAfterEnv: [
    './jest.setup.ts'
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/index.{ts,tsx}",
    "!**/styles.{ts,css,sass}",
    "!/node_modules/",
    "!/styles/",
    "!/@types",
    "!**.config.{ts,tsx,js}",
    "!**.d.ts"
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