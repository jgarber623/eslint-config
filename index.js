/**
 * This package's default configuration which includes ESLint configuration for
 * JavaScript files and JavaScript fenced code blocks within Markdown files.
 *
 * @example
 * // eslint.config.js
 * module.exports = require('@jgarber/eslint-config');
 */
module.exports = [
  ...(require('./lib/standard')),
  ...(require('./lib/markdown'))
];
