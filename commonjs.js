/**
 * By default, ESLint's "flat" config considers `*.js` files as ECMAScript
 * modules (ESM). Instead, consider `*.js` files to be CommonJS modules.
 *
 * @see {@link https://eslint.org/docs/latest/use/configure/configuration-files-new#configuration-objects}
 */
module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      /**
       * @see {@link https://www.npmjs.com/package/globals}
       * @see {@link https://github.com/sindresorhus/globals/blob/HEAD/globals.json}
       */
      globals: {
        exports: true,
        global: false,
        module: false,
        require: false
      },
      sourceType: 'commonjs'
    }
  }
];
