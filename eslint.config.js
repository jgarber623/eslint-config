const globals = require('globals');

const config = require('./index');

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
