const plugin = require('eslint-plugin-regexp');
const { configs, rules } = plugin;

module.exports = {
  configs: {
    'flat/all': {
      plugins: { regexp: plugin },
      rules: configs.all.rules
    },
    'flat/recommended': {
      plugins: { regexp: plugin },
      rules: configs.recommended.rules
    }
  },
  rules
};
