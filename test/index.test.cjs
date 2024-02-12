const assert = require("node:assert");
const test = require("node:test");

const config = (async () => await require("@jgarber/eslint-config"))();

test("module.exports", async () => {
  assert.ok(Array.isArray(await config));
});
