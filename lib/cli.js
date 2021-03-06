#!/usr/bin/env node

var Scrambo = require('./scrambo.js');
var cli = require('commander');

cli
  .version('0.0.1')
  .option('-n, --number [num]', 'set amount of scrambles to generate')
  .option('-t, --type [string]', 'set the scramble type', '333')
  .option('-s, --seed [num]', 'set seed')
  .option('-l, --length [num]', 'set scramble length')
  .parse(process.argv);

var out = new Scrambo();
var scrambles = [];

out.type(cli.type);
if (cli.seed) out.seed(cli.seed);
if (cli.length) out.length(cli.length);
if (cli.number) {
  scrambles = out.get(cli.number);
} else {
  scrambles = out.get();
}
console.log(scrambles.join('\n'));
