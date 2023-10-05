# eslint-config

Shareable [ESLint](https://eslint.org) configurations.

[![npm](https://img.shields.io/npm/v/@jgarber/eslint-config.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/eslint-config)
[![Downloads](https://img.shields.io/npm/dt/@jgarber/eslint-config.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/eslint-config)
[![Build](https://img.shields.io/github/actions/workflow/status/jgarber623/eslint-config/ci.yml?branch=main&logo=github&style=for-the-badge)](https://github.com/jgarber623/eslint-config/actions/workflows/ci.yml)

> [!IMPORTANT]\
> These shareable configurations use ESLint's new "flat" configuration file format, which may not be suitable for every project. See [the official documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new) for details.

## Installation

```sh
npm install --save-dev @jgarber/eslint-config
```

## Usage

Using [ECMAScript module (ESM)](https://nodejs.org/api/esm.html) syntax:

```js
// eslint.config.js
import config from '@jgarber/eslint-config';

export default config;
```

Using [CommonJS module](https://nodejs.org/api/modules.html) syntax:

```js
// eslint.config.js
const config = require('@jgarber/eslint-config');
const commonjs = require('@jgarber/eslint-config/commonjs');

module.exports = [
  ...commonjs,
  ...config
];
```

### Additional Configurations

This package exports several other configurations that may be useful in conjunction with the main configuration (or, by themselves!):

- `@jgarber/eslint-config/commonjs`: configures `languageOptions` and `globals` for CommonJS modules (especially useful if your `*.js` files target Node.js environments)
- `@jgarber/eslint-config/ava`: configures linting for tests written using the [AVA](https://www.npmjs.com/package/ava) test framework

## License

Ths package is freely available under the [MIT License](https://opensource.org/licenses/MIT). Use it, learn from it, fork it, improve it, change it, tailor it to your needs.
