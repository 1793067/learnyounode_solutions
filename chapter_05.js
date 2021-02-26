module.exports = filtered_ls;

function callback (err, list) {
  err ? console.log("error")
  : console.log(list);
};

function filtered_ls() {
  const [, , folder, ext] = process.argv;
  const fs = require('fs');
  const path = require('path');

  fs.readdir(folder, 'utf8', (err, data) => {
      if (err) callback(err);
      data.forEach(fileName => {
          if (path.extname(fileName) === `.${ext}`) {
            callback(null,fileName)
          }
      });
  });
};

//убрать слеши для выполнения задания 4
//filtered_ls();
