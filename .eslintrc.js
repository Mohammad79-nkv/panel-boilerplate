const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: [
    'react-app',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'react-app/jest',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  plugins: ['prettier', 'react-hooks', 'testing-library', 'jest-dom'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-empty': 'off',
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'jest/valid-expect-in-promise': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'prettier/prettier': ['warn', prettierOptions],
        'no-undef': 'off',
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
