// ESLint shared configurations
const js = require('@eslint/js');
const standard = require('eslint-config-standard');

// ESLint plugins
const jsdoc = require('eslint-plugin-jsdoc');
const n = require('eslint-plugin-n');

// Compat module for non-"flat"-compatible plugins
const compat = require('./compat');

module.exports = [
  // https://www.npmjs.com/package/eslint-plugin-jsdoc
  jsdoc.configs['flat/recommended-error'],

  // https://www.npmjs.com/package/eslint-plugin-n
  n.configs['flat/recommended'],

  // https://www.npmjs.com/package/eslint-plugin-array-func
  compat.arrayFunc.configs['flat/all'],

  // https://www.npmjs.com/package/eslint-plugin-promise
  compat.promise.configs['flat/recommended'],

  // https://www.npmjs.com/package/eslint-plugin-regexp
  compat.regexp.configs['flat/recommended'],

  // https://www.npmjs.com/package/eslint-plugin-sort-class-members
  compat.sortClassMembers.configs['flat/recommended'],

  // https://www.npmjs.com/package/eslint-plugin-unicorn
  compat.unicorn.configs['flat/recommended'],

  {
    rules: {
      // https://www.npmjs.com/package/@eslint/js
      ...js.configs.recommended.rules,

      // https://www.npmjs.com/package/eslint-config-standard
      //
      // Remove eslint-plugin-import rules until the following "flat" config-
      // related issues are resolved.
      //
      // https://github.com/import-js/eslint-plugin-import/issues/2556
      // https://github.com/import-js/eslint-plugin-import/pull/2829
      ...Object.fromEntries(
        Object.entries(standard.rules).filter(([key]) => {
          return !key.startsWith('import/');
        })
      ),

      // https://eslint.org/docs/latest/rules/semi
      semi: ['error', 'always'],

      // https://eslint.org/docs/latest/rules/sort-keys
      'sort-keys': ['error', 'asc', {
        allowLineSeparatedGroups: true,
        natural: true
      }],

      // https://eslint.org/docs/latest/rules/space-before-function-paren
      'space-before-function-paren': ['error', {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never'
      }],

      // Disable rules conflicting with eslint-plugin-unicorn.
      //
      // https://www.npmjs.com/package/eslint-plugin-array-func
      'array-func/prefer-flat': 'off',
      'array-func/prefer-flat-map': 'off',

      // https://github.com/gajus/eslint-plugin-jsdoc/blob/HEAD/docs/rules/tag-lines.md
      'jsdoc/tag-lines': ['error', 'any', { startLines: 1 }],

      // ¯\_(ツ)_/¯
      //
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/HEAD/docs/rules/no-null.md}
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/HEAD/docs/rules/prefer-module.md}
      'unicorn/no-null': 'off',
      'unicorn/prefer-module': 'off',

      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/HEAD/docs/rules/prevent-abbreviations.md
      'unicorn/prevent-abbreviations': ['warn', { checkFilenames: false }]
    }
  }
];
