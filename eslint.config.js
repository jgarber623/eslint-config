const globals = require('globals');

const config = require('./lib/index');

module.exports = [
  ...config,
  {
    files: ['spec/**/*[sS]pec.?(m)js'],
    languageOptions: {
      globals: {
        ...globals.jasmine
      }
    }
  }
];
