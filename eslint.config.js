// Require files using the package's full name and configured exports.
//
// https://nodejs.org/dist/latest-v18.x/docs/api/packages.html#package-entry-points
// https://nodejs.org/dist/latest-v18.x/docs/api/packages.html#self-referencing-a-package-using-its-name
module.exports = [
  {
    ignores: ['coverage']
  },
  ...(require('@jgarber/eslint-config/commonjs')),
  ...(require('@jgarber/eslint-config')),
  ...(require('@jgarber/eslint-config/ava'))
];
