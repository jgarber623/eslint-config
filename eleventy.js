module.exports = {
  extends: './index',

  env: {
    node: true
  },

  parserOptions: {
    ecmaVersion: 2017
  },

  ignorePatterns: [
    '!.eleventy.js',
    'public/'
  ]
};
