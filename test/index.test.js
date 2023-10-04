const test = require('ava');

const config = require('@jgarber/eslint-config');
const eslint = require('./helpers/eslint')(config);

test('exports an array', t => {
  t.true(Array.isArray(config));
});

test('loads config and validates correct syntax', async (t) => {
  const [{ errorCount }] = await eslint.lintText(';\n');

  t.is(errorCount, 0);
});

test('loads config and invalidates incorrect syntax', async (t) => {
  const [{ errorCount, messages }] = await eslint.lintText('(() => { [].map().flat(); }) ()\n');

  const expected = [
    {
      ruleId: 'array-func/prefer-flat-map',
      severity: 2,
      message: 'Use flatMap instead of .map().flat()',
      line: 1,
      column: 13,
      nodeType: null,
      messageId: 'preferFlatMap',
      endLine: 1,
      endColumn: 25,
      fix: { range: [12, 24], text: 'flatMap()' }
    },
    {
      ruleId: 'func-call-spacing',
      severity: 2,
      message: 'Unexpected whitespace between function name and paren.',
      line: 1,
      column: 29,
      nodeType: 'CallExpression',
      messageId: 'unexpectedWhitespace',
      endLine: 1,
      endColumn: 29,
      fix: { range: [28, 29], text: '' }
    },
    {
      ruleId: 'semi',
      severity: 2,
      message: 'Missing semicolon.',
      line: 1,
      column: 32,
      nodeType: 'ExpressionStatement',
      messageId: 'missingSemi',
      endLine: 2,
      endColumn: 1,
      fix: { range: [31, 31], text: ';' }
    }
  ];

  t.is(errorCount, 3);
  t.deepEqual(messages, expected);
});
