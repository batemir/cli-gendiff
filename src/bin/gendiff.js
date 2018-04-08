#!/usr/bin/env node
import program from 'commander';
import gendiff from '..';

program
  .version('0.7.0')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format', 'object')
  .description('Compares two configuration files and shows a difference.')
  .action((firstConfig, secondConfig, format) =>
    console.log(gendiff(firstConfig, secondConfig, format)))
  .parse(process.argv);

export default program;
