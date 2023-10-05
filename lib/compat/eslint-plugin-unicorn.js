const plugin = require('eslint-plugin-unicorn');
const { configs, rules } = plugin;

module.exports = {
  configs: {
    'flat/all': {
      plugins: { unicorn: plugin },
      rules: configs.all.rules
    },
    'flat/recommended': {
      plugins: { unicorn: plugin },
      rules: configs.recommended.rules
    }
  },
  rules
};
