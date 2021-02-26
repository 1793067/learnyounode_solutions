const [, , url] = process.argv;
const http = require('http');

http.get(url, (response) => {
  response.setEncoding('utf8');
  response.on('data', data => console.log(data));
});

/*
//с проверкой на ошибки:

http.get(url, (response) => {
  response.setEncoding('utf8');
  response.on('data', data => console.log(data));
  response.on('error', error => console.log(error));
}).on('error', error => console.log(error));
*/
