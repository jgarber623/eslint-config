module.exports = {
  extends: './index',

  env: {
    browser: true,
    es6: true
  },

  parserOptions: {
    sourceType: 'module'
  },

  ignorePatterns: [
    'dist/*',
    'spec/*'
  ]
};
