import path from 'path';
import fs from 'fs';//чтение файла через readFileSync

//показывает путь к файлу и его содержимое
const readFile = (filePath) => {
  const dirName = process.cwd(filePath);
  const fullPath = path.resolve(dirName, filePath);
  return fs.readFileSync(fullPath, 'utf-8');
}

export { readFile };
