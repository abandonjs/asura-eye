import { Config } from '@jest/types'

export default {
  verbose: true,
  // preset: 'ts-jest',
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  moduleFileExtensions: ['ts', 'js', 'json', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '\\.ts$': 'ts-jest'
  },
  // setupFiles: ['./test/setup.js'],
  // 引入jest-enzyme扩展断言支持
  // setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],
  // rootDir: './src',
  // setupFiles: ['./src/is'],
  globals: {
    '\\.[jt]sx?$': {
      // 'ts-jest': {
      // 指定ts-jest使用的tsconfig配置
      tsconfig: 'tsconfig.test.json'
    }
  }
} as Config.InitialOptions;

// export default {
//   moduleDirectories: [
//     "node_modules"
//   ],
//   moduleFileExtensions: [
//     "js",
//     "mjs",
//     "ts"
//   ],
//   extensionsToTreatAsEsm: [
//     ".ts"
//   ],
//   preset: "ts-jest/presets/default-esm",
//   testMatch: [
//     "**/__test__/**/*.test.ts",
//   ],
//   transform: {
//     "^.+\\.tsx?$": ["ts-jest/legacy",],
//     "^.+\\.ts?$": ["ts-jest", {
//       tsconfig: "tsconfig.json",
//       useESM: true
//     }]
//   }
// } as Config.InitialOptions