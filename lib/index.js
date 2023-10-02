const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname
});

module.exports = [
  ...compat.extends('standard'),
  {
    rules: {
      /*
       * Enforces consistent use of semicolons.
       *
       * @see {@link https://eslint.org/docs/latest/rules/semi}
       */
      semi: ['error', 'always'],

      /*
       * Enforces consistent spacing before function parentheses and will warn
       * whenever whitespace doesn't match the preferences specified.
       *
       * @see {@link https://eslint.org/docs/latest/rules/space-before-function-paren}
       */
      'space-before-function-paren': ['error', {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never'
      }]
    }
  }
];
