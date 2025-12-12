// Gak perlu import buffer, karena sudah built-in di Node.js
// import { Buffer } from 'buffer';

const buffer = Buffer.from("Rafee");
console.log(buffer);
console.log(buffer.toString());
console.table(buffer);

buffer.reverse();
console.log(buffer.toString());