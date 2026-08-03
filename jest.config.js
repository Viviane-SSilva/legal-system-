export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: './prisma/prisma-environment-jest.js',
  verbose: true,
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: {
          // Força o ts-jest a emitir ES Modules sem alterar o seu tsconfig principal
          module: 'NodeNext',
          moduleResolution: 'NodeNext',
        },
      },
    ],
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  testMatch: ['**/test/**/*.test.ts'],
};