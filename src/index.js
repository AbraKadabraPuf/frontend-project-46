import { readFile } from './utils.js';
import parse from './parsers.js';

function genDiff(filepath1, filepath2) {
  const dataFile1 = readFile(filepath1);//показывает содержимое файла 1
  const dataFile2 = readFile(filepath2);//показывает содержимое файла 2
  const parseFile1 = parse(dataFile1);//парсит файлы-переводит из json в объекты JS
  const parseFile2 = parse(dataFile2);
// у меня есть два объекта полученные из двух ясон файлов, мне нужно реализовать парсинг данных из файлов
  //const result = {...parseFile1, ...parseFile2};
  const result = [parseFile1, parseFile2];
  return result;
}

export default genDiff;