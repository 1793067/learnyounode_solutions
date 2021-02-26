const [, , path] = process.argv;
const fs = require('fs');
const buffer = fs.readFileSync(path, 'utf8')
//подсчет количества строк в файле
const rowCount = buffer.split('\n').length - 1;
console.log(rowCount);
