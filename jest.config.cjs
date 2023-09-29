module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    setupFiles: ['dotenv/config'],
    testEnvironment: 'node',
    testTimeout: 30000,
  };
  