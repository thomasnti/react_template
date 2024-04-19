module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    // 'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'object-curly-newline': 'off', // For further reading: https://eslint.org/docs/latest/rules/object-curly-newline
    'class-methods-use-this': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
  },
};
