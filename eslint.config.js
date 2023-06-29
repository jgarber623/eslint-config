/*
 * Import Standard's ESLint configurtation for use with ESLint's new "flat"
 * configuration file format.
 *
 * @see {@link https://github.com/standard/eslint-config-standard/blob/master/.eslintrc.json}
 * @see {@link https://eslint.org/docs/latest/use/configure/configuration-files-new}
 */
const standard = require('eslint-config-standard');

module.exports = [
  {
    plugins: Object.fromEntries(standard.plugins.map(plugin => [plugin, require(`eslint-plugin-${plugin}`)])),
    rules: {
      ...standard.rules,

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
  },
  {
    /*
     * By default, ESLint's "flat" config considers `*.js` files as ECMAScript
     * modules (ESM). Instead, consider `*.js` files to be CommonJS modules.
     *
     * @see {@link https://eslint.org/docs/latest/use/configure/configuration-files-new#configuration-objects}
     */
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs'
    }
  }
];
