module.exports = (async () => {
  const { default: eslintConfig } = await import("./index.js");

  return [
    ...eslintConfig,
    {
      languageOptions: {
        /**
         * @see {@link https://www.npmjs.com/package/globals}
         * @see {@link https://github.com/sindresorhus/globals/blob/main/globals.json}
         */
        globals: {
          __dirname: "readonly",
          __filename: "readonly",
          exports: "writable",
          global: "readonly",
          module: "readonly",
          require: "readonly",
        },
        sourceType: "commonjs",
      },
    },
  ];
})();
