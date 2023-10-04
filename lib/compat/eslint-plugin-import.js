const plugin = require('eslint-plugin-import');
const { configs, rules } = plugin;

module.exports = {
  configs: {
    'flat/electron': {
      plugins: { import: plugin },
      rules: configs.electron.rules
    },
    'flat/errors': {
      plugins: { import: plugin },
      rules: configs.errors.rules
    },
    'flat/recommended': {
      plugins: { import: plugin },
      rules: configs.recommended.rules
    },
    'flat/warnings': {
      plugins: { import: plugin },
      rules: configs.warnings.rules
    }
  },
  rules
};
