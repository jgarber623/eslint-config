const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname
});

module.exports = [
  /**
   * eslint-config-standard doesn't (yet) provide a "flat" ESLint configuration.
   * Until an updated version is released, use `FlatCompat` to provide a "flat"-
   * compatible configuration object.
   *
   * @see {@link https://www.npmjs.com/package/eslint-config-standard}
   */
  ...compat.config((() => {
    const { plugins, rules } = require('eslint-config-standard');

    return {
      extends: [
        'plugin:import/recommended',
        'plugin:n/recommended',
        'plugin:promise/recommended'
      ],
      plugins,
      rules
    };
  })()),

  /**
   * Additional configuration to suite my taste.
   */
  {
    rules: {
      /**
       * Enforces consistent use of semicolons.
       *
       * @see {@link https://eslint.org/docs/latest/rules/semi}
       */
      semi: ['error', 'always'],

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
      }]
    }
  }
];
