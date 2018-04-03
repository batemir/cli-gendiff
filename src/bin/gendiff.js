#!/usr/bin/env node
import program from 'commander';

program
  .version('0.2.0')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files and shows a difference.')
  .parse(process.argv);

export default program;
