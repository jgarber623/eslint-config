/**
 * This package's default configuration.
 *
 * @example
 * // eslint.config.js
 * module.exports = require('@jgarber/eslint-config');
 */
module.exports = [
  ...(require('./lib/standard')),
  ...(require('./lib/markdown'))
];
