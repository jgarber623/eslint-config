const test = require('ava');

const config = require('@jgarber/eslint-config/commonjs');
const eslint = require('./helpers/eslint')(config);

test('exports an array', t => {
  t.true(Array.isArray(config));
});

test('loads config and validates correct syntax', async (t) => {
  const [{ errorCount }] = await eslint.lintText('module.exports = __dirname;');

  t.is(errorCount, 0);
});

test('loads config and invalidates incorrect syntax', async (t) => {
  const [{ errorCount, messages }] = await eslint.lintText('export default [];');

  const expected = [
    {
      column: 1,
      fatal: true,
      line: 1,
      message: "Parsing error: 'import' and 'export' may appear only with 'sourceType: module'",
      nodeType: null,
      ruleId: null,
      severity: 2
    }
  ];

  t.is(errorCount, 1);
  t.deepEqual(messages, expected);
});
