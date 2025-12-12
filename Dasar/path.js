import path from "Dasar/path.js";

console.log(path.delimiter);

const file = '/Users/joe/test.txt';
console.log(path.dirname(file));
console.log(path.extname(file));
console.log(path.basename(file));
console.log(path.basename(file, '.txt'));