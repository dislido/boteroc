/** @type import('eslint').Linter.Config */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['prettier', '@typescript-eslint'],
  env: {
    node: true,
  },
  extends: ['plugin:@typescript-eslint/all', 'eslint:all', 'prettier'],
  rules: {
    semi: 'error',
    'prettier/prettier': 'warn',
    'no-unused-vars': 'off',
    'one-var': 'off',
    'sort-keys': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'objectLiteralProperty',
        format: null,
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
    ],
  },
};
