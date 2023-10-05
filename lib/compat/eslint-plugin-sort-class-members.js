const plugin = require('eslint-plugin-sort-class-members');
const { configs, rules } = plugin;

module.exports = {
  configs: {
    'flat/recommended': {
      plugins: { 'sort-class-members': plugin },
      rules: configs.recommended.rules
    }
  },
  rules
};
