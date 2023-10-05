const plugin = require('eslint-plugin-array-func');
const { configs, rules } = plugin;

module.exports = {
  configs: {
    'flat/all': {
      plugins: { 'array-func': plugin },
      rules: {
        ...configs.recommended.rules,
        ...configs.all.rules
      }
    },
    'flat/recommended': {
      plugins: { 'array-func': plugin },
      rules: {
        ...configs.recommended.rules
      }
    }
  },
  rules
};
