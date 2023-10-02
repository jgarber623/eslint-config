/**
 * Import Markdown plugin for use with ESLint's new "flag" configuration file
 * format. Note that this plugin lints JavaScript in fenced code blcoks within
 * Markdown files. It does not lint Markdown.
 *
 * @see {@link https://github.com/eslint/eslint-plugin-markdown/blob/main/lib/index.js}
 */
const markdown = require('eslint-plugin-markdown');

module.exports = [
  {
    files: ['**/*.md'],
    plugins: { markdown },
    processor: 'markdown/markdown'
  },
  {
    files: ['**/*.md/**'],
    rules: {
      ...markdown.configs.recommended.overrides[1].rules
    }
  }
];
