/**
 * Import package using its full name and configured default export.
 *
 * @see {@link https://nodejs.org/dist/latest-v20.x/docs/api/packages.html#package-entry-points}
 * @see {@link https://nodejs.org/dist/latest-v20.x/docs/api/packages.html#self-referencing-a-package-using-its-name}
 */
import eslintConfig from "@jgarber/eslint-config";

export default [
  ...eslintConfig,
  {
    files: ["**/*.cjs"],
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
      },
    },
  },
];
