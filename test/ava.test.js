const test = require('ava');

const config = require('@jgarber/eslint-config/ava');
const eslint = require('./helpers/eslint')(config);

test('exports an array', t => {
  t.true(Array.isArray(config));
});

test('loads config and validates correct syntax', async (t) => {
  const [{ errorCount }] = await eslint.lintText("const test = require('ava')", {
    filePath: 'ava.test.js'
  });

  t.is(errorCount, 0);
});

test('loads config and invalidates incorrect syntax', async (t) => {
  const [{ errorCount, messages }] = await eslint.lintText("const foo = require('ava')", {
    filePath: 'ava.test.js'
  });

  const expected = [
    {
      column: 7,
      endColumn: 27,
      endLine: 1,
      line: 1,
      message: 'AVA should be imported as `test`.',
      nodeType: 'VariableDeclarator',
      ruleId: 'ava/use-test',
      severity: 2,
    }
  ];

  t.is(errorCount, 1);
  t.deepEqual(messages, expected);
});
