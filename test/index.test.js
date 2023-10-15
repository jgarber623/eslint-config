const test = require('ava');

const config = require('@jgarber/eslint-config');
const eslint = require('./helpers/eslint')(config);

test('exports an array', t => {
  t.true(Array.isArray(config));
});

test('loads config and validates correct syntax', async (t) => {
  const [{ errorCount }] = await eslint.lintText('(() => 1)();\n', {
    filePath: 'index.test.js'
  });

  t.is(errorCount, 0);
});

test('loads config and invalidates incorrect syntax', async (t) => {
  const [{ errorCount, messages }] = await eslint.lintText('(() => { [].map().flat(); }) ()\n', {
    filePath: 'index.test.js'
  });

  const expected = [
    {
      column: 13,
      endColumn: 25,
      endLine: 1,
      fix: { range: [12, 24], text: 'flatMap()' },
      line: 1,
      message: 'Use flatMap instead of .map().flat()',
      messageId: 'preferFlatMap',
      nodeType: null,
      ruleId: 'array-func/prefer-flat-map',
      severity: 2
    },
    {
      column: 29,
      endColumn: 29,
      endLine: 1,
      fix: { range: [28, 29], text: '' },
      line: 1,
      message: 'Unexpected whitespace between function name and paren.',
      messageId: 'unexpectedWhitespace',
      nodeType: 'CallExpression',
      ruleId: 'func-call-spacing',
      severity: 2
    },
    {
      column: 32,
      endColumn: 1,
      endLine: 2,
      fix: { range: [31, 31], text: ';' },
      line: 1,
      message: 'Missing semicolon.',
      messageId: 'missingSemi',
      nodeType: 'ExpressionStatement',
      ruleId: 'semi',
      severity: 2
    }
  ];

  t.is(errorCount, 3);
  t.deepEqual(messages, expected);
});
