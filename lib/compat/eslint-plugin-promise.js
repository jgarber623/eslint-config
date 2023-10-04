const plugin = require('eslint-plugin-promise');
const { configs, rules } = plugin;

module.exports = {
  configs: {
    'flat/recommended': {
      plugins: { promise: plugin },
      rules: configs.recommended.rules
    }
  },
  rules
};
