module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  ignorePatterns: [
    ".eslintrc.js",
    "metro.config.js",
    "babel.config.js",
    "jest.config.js",
    "src/assets/svg"
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    'max-len': 0,
    'semi': ["error", "always"],
    'import/prefer-default-export': 'off',
    'no-param-reassign': ["error", { "props": true, "ignorePropertyModificationsForRegex": ["^state"] }],
    '@typescript-eslint/no-unused-vars': "warn",
    'react-hooks/rules-of-hooks': "error",
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off'
  },
};