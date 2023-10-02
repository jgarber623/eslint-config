const test = require('ava');

const config = require('../lib/index');
const eslint = require('./helpers/eslint')(config);

test('exports an array', t => {
  t.true(Array.isArray(config));
});

test('loads config and validates correct syntax', async (t) => {
  const [{ errorCount }] = await eslint.lintText(';\n');

  t.is(errorCount, 0);
});

test('loads config and invalidates incorrect syntax', async (t) => {
  const [{ errorCount, messages }] = await eslint.lintText('(() => {}) ()\n');

  const expected = [
    {
      ruleId: 'func-call-spacing',
      severity: 2,
      message: 'Unexpected whitespace between function name and paren.',
      line: 1,
      column: 11,
      nodeType: 'CallExpression',
      messageId: 'unexpectedWhitespace',
      endLine: 1,
      endColumn: 11,
      fix: { range: [10, 11], text: '' }
    },
    {
      ruleId: 'semi',
      severity: 2,
      message: 'Missing semicolon.',
      line: 1,
      column: 14,
      nodeType: 'ExpressionStatement',
      messageId: 'missingSemi',
      endLine: 2,
      endColumn: 1,
      fix: { range: [13, 13], text: ';' }
    }
  ];

  t.is(errorCount, 2);
  t.deepEqual(messages, expected);
});
