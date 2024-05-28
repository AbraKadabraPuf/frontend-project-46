#!/usr/bin/env node

import { Command } from 'commander';
//import { readFile } from '../src/utils.js';
import genDiff from '../src/index.js'
//import { readFile, getExtension } from '../src/utils.js'

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
	.version('1.0')
	.option('-f, --format <type>', 'output format (default: "stylish")')
	.argument('<filepath1>')
  .argument('<filepath2>')
	.action((filepath1, filepath2) => {
    const result = genDiff(filepath1, filepath2);
    console.log(result);
  });

program.parse();