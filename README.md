# eslint-config

Shareable [ESLint](https://eslint.org) configuration.

> **Note**
>
> As of v1.0.0, this shareable configuration uses ESLint's new "flat" configuration file format and, thus, may not be suitable for every project. See [the official documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new) for details.

## Installation

```sh
npm install --save-dev @jgarber/eslint-config
```

## Usage

Using [CommonJS module](https://nodejs.org/api/modules.html) syntax:

```js
// eslint.config.js
module.exports = require('@jgarber/eslint-config');
```

Using [ECMAScript module (ESM)](https://nodejs.org/api/esm.html) syntax:

```js
// eslint.config.js
import config from '@jgarber/eslint-config';

export default [
  ...config,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module'
    }
  }
];
```
