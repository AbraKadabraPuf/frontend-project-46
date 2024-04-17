#!/usr/bin/env node

import { program } from 'commander'; // Импорт объекта program из commander

program
//  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'display help for command')

if (program.help) {
  program.help(); // Вывод справки при указании флага -h или --help
}