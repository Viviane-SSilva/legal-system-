export default {
  testEnvironment: './prisma/prisma-environment-jest.js',
  verbose: true,
  transform: {'^.+\\.tsx?$':'ts-jest'},
  moduleFileExtensions: ['js', 'json', 'ts'],
  testMatch: ['**/test/**/*.test.ts'],
};