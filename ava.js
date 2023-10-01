const ava = require('eslint-plugin-ava');

module.exports = [
  {
    /**
     * Use AVA's default file-matching patterns.
     *
     * @see {@link https://github.com/avajs/ava/blob/HEAD/docs/05-command-line.md}
     */
    files: [
      'test.js',
      'src/test.js',
      'source/test.js',
      '**/test-*.js',
      '**/*.spec.js',
      '**/*.test.js',
      '**/test/**/*.js',
      '**/tests/**/*.js',
      '**/__tests__/**/*.js'
    ],
    plugins: { ava },
    rules: ava.configs.recommended.rules
  }
];
