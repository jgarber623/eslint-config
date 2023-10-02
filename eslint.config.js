module.exports = [
  ...(require('./index')),
  ...(require('./lib/commonjs')),
  ...(require('./lib/ava')),
  ...(require('./lib/yaml'))
];
