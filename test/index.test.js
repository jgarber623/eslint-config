import assert from "node:assert";
import test from "node:test";

import config from "@jgarber/eslint-config";

import riskyLint from "eslint/use-at-your-own-risk";

const eslint = new riskyLint.FlatESLint({
  baseConfig: config,
  overrideConfigFile: true,
});

test("default export", () => {
  assert.ok(Array.isArray(config));
});

test("loads config and validates correct syntax", async () => {
  const [{ errorCount }] = await eslint.lintText("(() => 1)();\n", {
    filePath: "index.test.js",
  });

  assert.strictEqual(errorCount, 0);
});

test("loads config and invalidates incorrect syntax", async () => {
  const [{ errorCount, messages }] = await eslint.lintText("(() => { [].map().flat(); }) ()\n", {
    filePath: "index.test.js",
  });

  const expected = [
    {
      column: 10,
      endColumn: 26,
      endLine: 1,
      line: 1,
      message: "This line has 2 statements. Maximum allowed is 1.",
      messageId: "exceed",
      nodeType: "ExpressionStatement",
      ruleId: "@stylistic/max-statements-per-line",
      severity: 2,
    },
    {
      column: 13,
      endColumn: 25,
      endLine: 1,
      fix: { range: [12, 24], text: "flatMap()" },
      line: 1,
      message: "Use flatMap instead of .map().flat()",
      messageId: "preferFlatMap",
      nodeType: null,
      ruleId: "array-func/prefer-flat-map",
      severity: 2,
    },
    {
      column: 28,
      fix: { range: [28, 29], text: "" },
      line: 1,
      message: "Unexpected whitespace between function name and paren.",
      messageId: "unexpectedWhitespace",
      nodeType: "CallExpression",
      ruleId: "@stylistic/function-call-spacing",
      severity: 2,
    },
    {
      column: 32,
      endColumn: 1,
      endLine: 2,
      fix: { range: [31, 31], text: ";" },
      line: 1,
      message: "Missing semicolon.",
      messageId: "missingSemi",
      nodeType: "ExpressionStatement",
      ruleId: "@stylistic/semi",
      severity: 2,
    },
  ];

  assert.strictEqual(errorCount, 4);
  assert.deepEqual(messages, expected);
});
