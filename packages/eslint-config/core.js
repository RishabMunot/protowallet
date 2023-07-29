module.exports = {
  rules: {
    camelcase: 'error',
    semi: ['error', 'always'],
    quotes: [
      'error',
      'double',
      {
        allowTemplateLiterals: false,
        avoidEscape: true,
      },
    ],

    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-anonymous-default-export': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/order': 'off',
    'sort-imports': 'off',
  },
  overrides: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-anonymous-default-export': 'off',

    '@typescript-eslint/no-shadow': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: '[iI]gnored',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-var-requires': 'warn',
  },
};
