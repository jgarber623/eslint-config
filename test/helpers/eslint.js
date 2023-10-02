const { FlatESLint } = require('eslint/use-at-your-own-risk');

module.exports = function(baseConfig) {
  return new FlatESLint({
    baseConfig,
    overrideConfigFile: true
  });
};
