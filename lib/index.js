const jsdoc = require('eslint-plugin-jsdoc');
const n = require('eslint-plugin-n');
const standard = require('eslint-config-standard');

const compat = require('./compat');

module.exports = [
  jsdoc.configs['flat/recommended-error'],
  n.configs['flat/recommended'],
  compat.arrayFunc.configs['flat/all'],
  compat.import.configs['flat/recommended'],
  compat.promise.configs['flat/recommended'],
  compat.regexp.configs['flat/recommended'],
  {
    rules: {
      /**
       * Use eslint-config-standard's rules as a base.
       *
       * @see {@link https://www.npmjs.com/package/eslint-config-standard}
       */
      ...standard.rules,

      /**
       * Enforces consistent use of semicolons.
       *
       * @see {@link https://eslint.org/docs/latest/rules/semi}
       */
      semi: ['error', 'always'],

      /**
       * Require object keys to be sorted.
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-keys}
       */
      'sort-keys': ['error', 'asc', {
        allowLineSeparatedGroups: true,
        natural: true
      }],

      /**
       * Enforces consistent spacing before function parentheses and will warn
       * whenever whitespace doesn't match the preferences specified.
       *
       * @see {@link https://eslint.org/docs/latest/rules/space-before-function-paren}
       */
      'space-before-function-paren': ['error', {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never'
      }],

      /**
       * Enforces lines between tags.
       *
       * @see {@link https://github.com/gajus/eslint-plugin-jsdoc/blob/HEAD/docs/rules/tag-lines.md}
       */
      'jsdoc/tag-lines': ['error', 'any', { startLines: 1 }]
    }
  }
];
