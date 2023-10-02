const { FlatESLint } = require('eslint/use-at-your-own-risk');

const config = require('../lib/index');

it('exports an Array', () => {
  expect(Array.isArray(config)).toBe(true);
});

it('loads the config and validates correct syntax', async () => {
  const eslint = new FlatESLint({ baseConfig: config });
  const [results] = await eslint.lintText(';\n');

  expect(results.errorCount).toEqual(0);
});

it('loads the config and invalidates incorrect syntax', async () => {
  const eslint = new FlatESLint({ baseConfig: config });
  const [results] = await eslint.lintText('(() => {}) ()\n');

  const ruleIds = results.messages.map(({ ruleId }) => ruleId);

  expect(results.errorCount).toEqual(2);
  expect(ruleIds).toEqual(jasmine.arrayContaining(['func-call-spacing', 'semi']));
});
