/**
 * Import YAML plugin for use with ESLint's new "flag" configuration file
 * format. Note that this plugin lints YAML files _and_ YAML in fenced code
 * blocks within Markdown files.
 *
 * @see {@link https://github.com/ota-meshi/eslint-plugin-yml}
 * @see {@link https://github.com/ota-meshi/eslint-plugin-yml/blob/master/src/configs/base.ts}
 * @see {@link https://github.com/ota-meshi/eslint-plugin-yml/blob/master/src/configs/standard.ts}
 */
const yml = require('eslint-plugin-yml');
const parser = require('yaml-eslint-parser');

module.exports = [
  {
    files: ['**/*.yaml', '**/*.yml'],
    languageOptions: { parser },
    plugins: { yml },
    rules: {
      ...yml.configs.base.rules,
      ...yml.configs.standard.rules
    }
  }
];
