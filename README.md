# eslint-config

Shareable [ESLint](https://eslint.org) configurations.

[![npm](https://img.shields.io/npm/v/@jgarber/eslint-config.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/eslint-config)
[![Downloads](https://img.shields.io/npm/dt/@jgarber/eslint-config.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/eslint-config)
[![Build](https://img.shields.io/github/actions/workflow/status/jgarber623/eslint-config/ci.yml?branch=main&logo=github&style=for-the-badge)](https://github.com/jgarber623/eslint-config/actions/workflows/ci.yml)

> [!IMPORTANT]\
> From v1.0.0, these shareable configurations uses ESLint's new "flat" configuration file format and, thus, may not be suitable for every project. See [the official documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new) for details.

## Installation

```sh
npm install --save-dev @jgarber/eslint-config
```

## Usage

Using [ECMAScript module (ESM)](https://nodejs.org/api/esm.html) syntax:

```js
// eslint.config.js
import config from '@jgarber/eslint-config';

export default [...config];
```

Using [CommonJS module](https://nodejs.org/api/modules.html) syntax:

```js
// eslint.config.js
const config = require('@jgarber/eslint-config');
const commonjs = require('@jgarber/eslint-config/commonjs');

module.exports = [
  ...config,
  ...commonjs
];
```
