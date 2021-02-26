const [, , ...args] = process.argv;
let res = args.reduce((sum, cur) => +cur + sum, 0);
console.log(res);
