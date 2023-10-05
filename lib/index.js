// ESLint shared configurations
const js = require('@eslint/js');
const standard = require('eslint-config-standard');

// ESLint plugins
const jsdoc = require('eslint-plugin-jsdoc');
const n = require('eslint-plugin-n');

// Compat module for non-"flat"-compatible plugins
const compat = require('./compat');

module.exports = [
  {
    ignores: ['coverage']
  },
  jsdoc.configs['flat/recommended-error'],
  n.configs['flat/recommended'],
  compat.arrayFunc.configs['flat/all'],
  compat.import.configs['flat/recommended'],
  compat.promise.configs['flat/recommended'],
  compat.regexp.configs['flat/recommended'],
  compat.unicorn.configs['flat/recommended'],
  {
    rules: {
      /**
       * @see {@link https://www.npmjs.com/package/@eslint/js}
       */
      ...js.configs.recommended.rules,

      /**
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
       * Disable rules conflicting with eslint-plugin-unicorn.
       *
       * @see {@link https://www.npmjs.com/package/eslint-plugin-array-func}
       */
      'array-func/prefer-flat': 'off',
      'array-func/prefer-flat-map': 'off',

      /**
       * Enforces lines between tags.
       *
       * @see {@link https://github.com/gajus/eslint-plugin-jsdoc/blob/HEAD/docs/rules/tag-lines.md}
       */
      'jsdoc/tag-lines': ['error', 'any', { startLines: 1 }],

      /**
       * ¯\_(ツ)_/¯
       *
       * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/HEAD/docs/rules/no-null.md}
       * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/HEAD/docs/rules/prefer-module.md}
       */
      'unicorn/no-null': 'off',
      'unicorn/prefer-module': 'off',

      /**
       * Avoid using abbreviations in code.
       *
       * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/HEAD/docs/rules/prevent-abbreviations.md}
       */
      'unicorn/prevent-abbreviations': ['warn', { checkFilenames: false }]
    }
  }
];
