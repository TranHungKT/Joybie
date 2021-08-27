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
    'import/resolver': { 'babel-module': {} },
  },
  ignorePatterns: [
    ".eslintrc.js",
    "metro.config.js",
    "babel.config.js"
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    semi: ["error", "always"],
    'react-hooks/exhaustive-deps': 'warn',
  },
};
