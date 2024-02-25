import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

import arrayFunc from "eslint-plugin-array-func";
import jsdoc from "eslint-plugin-jsdoc";
import n from "eslint-plugin-n";
import regexp from "eslint-plugin-regexp";
import sortClassMembers from "eslint-plugin-sort-class-members";

export default [
  /**
   * @see {@link https://www.npmjs.com/package/eslint-plugin-jsdoc}
   */
  jsdoc.configs["flat/recommended"],

  /**
   * @see {@link https://www.npmjs.com/package/@eslint/js}
   * @see {@link https://eslint.org/docs/latest/rules/}
   */
  js.configs.recommended,

  /**
   * @see {@link https://eslint.style/guide/config-presets}
   * @see {@link https://eslint.style/packages/default}
   * @see {@link https://github.com/eslint-stylistic/eslint-stylistic/blob/main/packages/eslint-plugin/configs/customize.ts}
   */
  stylistic.configs.customize({
    braceStyle: "1tbs",
    jsx: false,
    quotes: "double",
    semi: true,
  }),

  /**
   * @see {@link https://www.npmjs.com/package/eslint-plugin-array-func}
   */
  arrayFunc.configs.all,

  /**
   * @see {@link https://www.npmjs.com/package/eslint-plugin-n}
   */
  n.configs["flat/recommended"],

  /**
   * @see {@link https://www.npmjs.com/package/eslint-plugin-regexp}
   * @see {@link https://github.com/ota-meshi/eslint-plugin-regexp/issues/695}
   */
  {
    plugins: { regexp },
    rules: regexp.configs.recommended.rules,
  },

  /**
   * @see {@link https://www.npmjs.com/package/eslint-plugin-sort-class-members}
   */
  sortClassMembers.configs["flat/recommended"],

  /**
   * @see {@link https://www.npmjs.com/package/@jgarber/eslint-config}
   */
  {
    rules: {
      /**
       * Enforce consistent line breaks between array elements.
       *
       * @see {@link https://eslint.style/rules/default/array-element-newline}
       */
      "@stylistic/array-element-newline": ["error", "consistent"],

      /**
       * Enforce consistent usage of line breaks between arguments of a function
       * call.
       *
       * @see {@link https://eslint.style/rules/js/function-call-argument-newline}
       */
      "@stylistic/function-call-argument-newline": ["error", "consistent"],

      /**
       * Disallow spaces between the function name and the opening parenthesis
       * that calls it.
       *
       * @see {@link https://eslint.style/rules/default/function-call-spacing}
       */
      "@stylistic/function-call-spacing": ["error"],

      /**
       * Enforce a consistent location for an arrow function containing an
       * implicit return.
       *
       * @see {@link https://eslint.style/rules/default/implicit-arrow-linebreak}
       */
      "@stylistic/implicit-arrow-linebreak": "error",

      /**
       * Enforce consistent line endings independent of operating system, VCS,
       * or editor.
       *
       * @see {@link https://eslint.style/rules/default/linebreak-style}
       */
      "@stylistic/linebreak-style": "warn",

      /**
       * Enforce a maximum line length to increase code readability and
       * maintainability.
       *
       * @see {@link https://eslint.style/rules/default/max-len}
       */
      "@stylistic/max-len": ["warn", {
        code: 120,
        comments: 80,
        ignoreUrls: true,
        tabWidth: 2,
      }],

      /**
       * Disallow unnecessary semicolons.
       *
       * @see {@link https://eslint.style/rules/default/no-extra-semi}
       */
      "@stylistic/no-extra-semi": "error",

      /**
       * Warns against using the arrow function syntax in places where it could
       * be confused with a comparison operator.
       *
       * @see {@link https://eslint.style/rules/default/no-confusing-arrow}
       */
      "@stylistic/no-confusing-arrow": "warn",

      /**
       * Enforce a consistent linebreak style for operators.
       *
       * @see {@link https://eslint.style/rules/default/operator-linebreak}
       */
      "@stylistic/operator-linebreak": ["error", "after"],

      /**
       * Disallow quotes around object literal property names that are not
       * strictly required.
       *
       * @see {@link https://eslint.style/rules/default/quote-props}
       */
      "@stylistic/quote-props": ["error", "as-needed"],

      /**
       * Enforce consistent spacing before function parentheses.
       *
       * @see {@link https://eslint.style/rules/js/space-before-function-paren}
       */
      "@stylistic/space-before-function-paren": ["error", {
        anonymous: "never",
        asyncArrow: "always",
        named: "never",
      }],

      /**
       *  Control spacing around colons of `case` and `default` clauses in
       * switch statements.
       *
       * @see {@link https://eslint.style/rules/default/switch-colon-spacing}
       */
      "@stylistic/switch-colon-spacing": "error",

      /**
       * Sorts tags by a specified sequence according to tag name, optionally
       * adding line breaks between tag groups.
       *
       * @see {@link https://github.com/gajus/eslint-plugin-jsdoc/blob/HEAD/docs/rules/sort-tags.md}
       */
      "jsdoc/sort-tags": ["warn", { alphabetizeExtras: true }],

      /**
       * Enforce lines (or no lines) between tags.
       *
       * @see {@link https://github.com/gajus/eslint-plugin-jsdoc/blob/HEAD/docs/rules/tag-lines.md}
       */
      "jsdoc/tag-lines": ["warn", "any", { startLines: 1 }],

      /**
       * Disallow unused variables.
       *
       * @see {@link https://eslint.org/docs/latest/rules/no-unused-vars}
       */
      "no-unused-vars": ["error", {
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      }],

      /**
       * Enforce sorted import declarations within modules.
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-imports}
       */
      "sort-imports": ["error", { allowSeparatedGroups: true }],

      /**
       * Require object keys to be sorted.
       *
       * @see {@link https://eslint.org/docs/latest/rules/sort-keys}
       */
      "sort-keys": ["error", "asc", {
        allowLineSeparatedGroups: true,
        caseSensitive: false,
        natural: true,
      }],
    },
  },
];
