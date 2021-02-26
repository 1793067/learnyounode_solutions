const [, , path] = process.argv;
const fs = require('fs');

fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
//подсчет количества строк в файле
    const rowCount = data.split('\n').length - 1;
    console.log(rowCount);
});
