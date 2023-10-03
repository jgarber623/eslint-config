/**
 * By default, ESLint's "flat" config considers `*.js` files to be ECMAScript
 * modules (ESM). `*.mjs` files are always parsed as ESM modules and `*.cjs`
 * files are always parsed as CommonJS modules.
 *
 * This configures ESLint to treat `*.js` files as CommonJS modules.
 *
 * Authors may also specify the module type in `package.json` using either
 * `"type": "commonjs"` or `"type": "module"`.
 *
 * @see {@link https://eslint.org/docs/latest/use/configure/configuration-files-new#configuration-objects}
 * @see {@link https://nodejs.org/dist/latest-v18.x/docs/api/modules.html#enabling}
 */
module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly'
      },
      sourceType: 'commonjs'
    }
  }
];
