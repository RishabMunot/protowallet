const { rules, overrides } = require('./core');

module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['import', 'prettier', 'simple-import-sort'],
  rules: Object.assign(rules, {
    'react-hooks/rules-of-hooks': 'off',
  }),
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      rules: overrides,
    },
  ],
};
