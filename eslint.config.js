const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      // your rules here
    },
  },
];
